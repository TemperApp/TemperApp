import { sqlite } from '../App';
import { NoteAsString, temperaments } from '../model/Temperament';
import { capSQLiteChanges } from '@capacitor-community/sqlite';

const sqlDropTables = [
  "DROP TABLE IF EXISTS temperament;",
  "DROP TABLE IF EXISTS note;",
  "DROP TABLE IF EXISTS corresponds;",
]

const sqlCreateTables = [
  `
  CREATE TABLE temperament (
    idTemperament   INTEGER PRIMARY KEY AUTOINCREMENT,
    name            VARCHAR(70),
    nameFR          VARCHAR(70),
    slugName        VARCHAR(70)
  );`,
  `
  CREATE TABLE note (
    noteSymbol   VARCHAR(7) PRIMARY KEY NOT NULL
  );`,
  `
  CREATE TABLE corresponds (
    idTemperament   INTEGER NOT NULL,
    noteSymbol      VARCHAR(7) NOT NULL,
    deviation       REAL NOT NULL,
    cpExp5th        VARCHAR(10) NOT NULL,
    csExp3rd        VARCHAR(10) NOT NULL,
    PRIMARY KEY (idTemperament, noteSymbol)
  );`,
];

interface Printer {
  (message: string): void;
}

/**
 * Singleton class to manage database access
 */
class DB {

  private static instance: DB;
  private dbconn: any;
  private printer: Printer;

  private constructor() {
    this.printer = console.log;
  }

  
  /**
   * @returns the DB singleton instance
   */
  public static get(): DB {
    if (!DB.instance)
      DB.instance = new DB();
    return DB.instance;
  }


  /**
   * @param printer function of type (string): void
   *                to output errors.
   *                Default is console.log
   */
  public static setPrinter(printer: Printer): void {
    DB.get().printer = printer;
  }


  /**
   * @returns true if sqlite plugin is available
   * on the current device
   */
  public static isAvailable(): boolean {
    return sqlite.isAvailable;
  }


  /**
   * Initiates a connection to the sqlite file
   */
  public static async connect(): Promise<void> {
    await DB.get().connect();
  }

  private async connect(): Promise<void> {
    this.printer("Connecting...");
    this.dbconn = await sqlite.createConnection("temperapp", false, "no-encryption", 1);
    await this.dbconn.open();
    await this.dbconn.createSyncTable();
    await this.dbconn.setSyncDate((new Date(Date.now())).toISOString());
    sqlite.setHasConn(true);
  }


  /**
   * Close the current connection to the
   * sqlite file
   */
  public static async close(): Promise<void> {
    await this.get().close();
  }

  private async close(): Promise<void> {
    await sqlite.closeConnection("temperapp");
    sqlite.setHasConn(false);
  }


  /**
   * Query the SQLite DB and close the connection
   * @param sql sql query
   * @returns the result of the sql query
   */
  public static async query(sql: string): Promise<[]> {
    return await this.get().query(sql, false);
  }


  /**
   * Query the SQLite DB and keep the connection active
   * @param sql sql query
   * @returns the result of the sql query
   */
  public static async queryAndKeepAlive(sql: string): Promise<[]> {
    return await this.get().query(sql, true);
  }


  private async query(sql: string, keepAlive = false): Promise<[]> {
    if (!sqlite.hasConn)
      await this.connect();
    this.printer("Querying...");

    try {
      const res = await this.dbconn.query(sql);
      if (!keepAlive)
        await this.close();
      return res.values;
    } catch (err) {
      this.printer(`ERR: ${err.message}, querying: ${sql}`);
      return [];
    }
  }


  /**
   * Execute SQLite DB Connection Raw Statement and close
   * @param sql sql query
   * @param values values to pass into the sql query
   * @returns the result of the sql query, null if there was error
   */
  public static async run(sql: string, values: Array<any>): Promise<capSQLiteChanges | null> {
    return await this.get().run(sql, values, false);
  }


  /**
   * Execute SQLite DB Connection Raw Statement and keep the connection active
   * @param sql sql query
   * @param values values to pass into the sql query
   * @returns the result of the sql query, null if there was error
   */
  public static async runAndKeepAlive(sql: string, values: Array<any>): Promise<capSQLiteChanges | null> {
    return await this.get().run(sql, values, true);
  }


  private async run(sql: string, values: Array<any>, keepAlive = false): Promise<capSQLiteChanges | null> {
    if (!sqlite.hasConn)
      await this.connect();
    this.printer("Running query...");

    try {
      const changes = await this.dbconn.run(sql, values);
      if (!keepAlive)
        await this.close();
      return changes;
    } catch (err) {
      this.printer(`ERR: ${err.message}, running query: ${sql}`);
      return null;
    }
  }


  /**
   * Initialize the database accessor
   */
  public static async init(): Promise<void> {
    if (!(await sqlite.isDatabase("temperapp")).result) {
      DB.get().printer("Initializing...");
      await DB.resetData();
    }
  }


  /**
   * Drop all the data and recreate the schema
   * with the default data
   */
  public static async resetData(): Promise<void> {
    await this.get().resetData();
  }

  private async resetData(): Promise<void> {
    this.printer("Resetting...");
    await this.close();
    await this.connect();
    await this.dropTables();
    await this.createTables();
    await this.populateTables();
    await this.close();
    this.printer("Reset ended");
  }


  public async dropTables(): Promise<void> {
    this.printer("Dropping tables...");
    for (const sql of sqlDropTables) {
      const ret =  await this.dbconn.execute(sql);
      if (ret.changes.changes < 0)
        this.printer(`ERR: Execute changes: ${ret.changes.changes}: executing: ${sql}`);
    }
  }


  private async createTables(): Promise<void> {
    this.printer("Creating tables...");
    for (const sql of sqlCreateTables) {
      const ret = await this.dbconn.execute(sql);
      if (ret.changes.changes < 0)
        this.printer(`ERR: Execute changes: ${ret.changes.changes}: executing: ${sql}`);
    }
  }

  
  private async populateTables(): Promise<void> {
    this.printer("Populating tables...");
    let ret;
    // Populate 'note'
    for (const note in NoteAsString) {
      ret = await this.dbconn.run(
        "INSERT INTO note (noteSymbol) VALUES (?);",
        [note]);
      if (ret.changes.changes < 0)
        this.printer(`ERR: Execute changes: ${ret.changes.changes}: inserting: ${note}`);
    }

    // Populate 'temperament'
    for (const t of temperaments) {
      ret = await this.dbconn.run(
        `INSERT INTO temperament (idTemperament,name,nameFR,slugName)
         VALUES (?,?,?,?);`,
        [t.idTemperament, t.name, t.nameFR, t.slugName]);
      if (ret.changes.changes < 0)
        this.printer(`ERR: Execute changes: ${ret.changes.changes}: inserting: ${t.name}`);

      for (const note in NoteAsString) {
        // Populate 'corresponds'
        ret = await this.dbconn.run(
          `INSERT INTO corresponds (idTemperament,
           noteSymbol, deviation, cpExp5th, csExp3rd)
           VALUES (?,?,?,?,?);`,
          [t.idTemperament, note, t.deviation[note],
          t.cpExp5th[note], t.csExp3rd[note]]
        );
        if (ret.changes.changes < 0)
          this.printer(`ERR: Execute changes: ${ret.changes.changes} inserting into 'corresponds'`);
      }
    }
  }

}

export default DB;
