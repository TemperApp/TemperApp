import { capSQLiteChanges } from '@capacitor-community/sqlite';
import { sqlite } from '../App';
import { DataSources, defaultTemperaments } from '../model/Temperament/Temperament';
import { Notes } from "../model/Note/enums";

const sqlDropTables = [
  "DROP TABLE IF EXISTS temperament;",
  "DROP TABLE IF EXISTS note;",
  "DROP TABLE IF EXISTS divergence;",
];

const sqlCreateTables = [
  `
  CREATE TABLE temperament (
    idTemperament   INTEGER PRIMARY KEY AUTOINCREMENT,
    name            VARCHAR(70),
    nameFR          VARCHAR(70)
  );`,
  `
  CREATE TABLE note (
    noteSymbol   VARCHAR(7) PRIMARY KEY NOT NULL
  );`,
  `
  CREATE TABLE divergence (
    idTemperament   INTEGER NOT NULL,
    noteSymbol      VARCHAR(7) NOT NULL,
    deviation       REAL NOT NULL,
    cpExp5th        VARCHAR(10) NOT NULL,
    csExp3rd        VARCHAR(10) NOT NULL,
    PRIMARY KEY (idTemperament, noteSymbol)
  );`,
];

export type TemperamentDBType = {
  idTemperament: number,
  name: string,
  nameFR: string,
  period : string,
  theorist : string,
  geographicalArea: string,
  nature: string,
  structuralParticularity: string,
  sources: Array<DataSources>,
  soundReferences: Array<string>,
  commentary: string,
};

export type NoteDBType = {
  noteSymbol: string,
};

export type DivergenceDBType = {
  idTemperament: number,
  noteSymbol: string,
  deviation: string,
  cpExp5th: string,
  csExp3rd: string,
  procedure: string,
};

/**
 * Singleton class to manage database access
 */
class DB {

  private static instance: DB;
  private dbconn: any;
  private hasConn = false;

  private constructor() {
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
    this.dbconn = await sqlite.createConnection(
      "temperapp", false, "no-encryption", 1);
    await this.dbconn.open();
    await this.dbconn.createSyncTable();
    await this.dbconn.setSyncDate(
      (new Date(Date.now())).toISOString());
    this.hasConn = true;
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
    this.hasConn = false;
  }


  /**
   * Query the SQLite DB
   * @param sql sql query
   * @param values values to pass into the sql query
   * @returns the result of the sql query
   */
  public static async query(
    sql: string, values: Array<number | string> = []
  ): Promise<any[]> {
    return await this.get().query(sql, values);
  }


  private async query(
    sql: string, values: Array<number | string> = []
  ): Promise<any[]> {
    if (!this.hasConn)
      await this.connect();

    try {
      values = values.map((v) => String(v));
      return (await this.dbconn.query(sql, values)).values;
    } catch (err) {
      console.warn(`[SQLite]: ${err.message}, querying: ${sql}`);
      return [];
    }
  }


  /**
   * Execute SQLite DB Connection Raw Statement
   * @param sql sql query
   * @param values values to pass into the sql query
   * @returns the result of the sql query,
   * @returns null, if parsing fails
   */
  public static async run(
    sql: string, values: Array<number | string>
  ): Promise<capSQLiteChanges | null> {
    return await this.get().run(sql, values);
  }


  private async run(
    sql: string, values: Array<number | string>
  ): Promise<capSQLiteChanges | null> {
    if (!this.hasConn)
      await this.connect();

    try {
      values = values.map((v) => String(v));
      return await this.dbconn.run(sql, values);
    } catch (err) {
      console.warn(`[SQLite]: ${err.message}, running query: ${sql}`);
      return null;
    }
  }


  /**
   * Initialize the database accessor and opens
   * a connection to the sqlite database. Creates
   * one if there is none.
   */
  public static async init(): Promise<void> {
    if (!(await sqlite.isDatabase("temperapp")).result) {
      await DB.connect();
      await DB.resetData();
    } else {
      await DB.connect();
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
    await this.dropTables();
    await this.createTables();
    await this.populateTables();
  }


  public async dropTables(): Promise<void> {
    for (const sql of sqlDropTables) {
      const ret = await this.dbconn.execute(sql);
      if (ret.changes.changes < 0)
        console.warn(`[SQLite]: Changes: ${ret.changes.changes}
                       : executing: ${sql}`);
    }
  }


  private async createTables(): Promise<void> {
    for (const sql of sqlCreateTables) {
      const ret = await this.dbconn.execute(sql);
      if (ret.changes.changes < 0)
        console.warn(`[SQLite]: Changes: ${ret.changes.changes}
                       : executing: ${sql}`);
    }
  }


  private async populateTables(): Promise<void> {
    let ret;
    // Populate 'note'
    for (const note in Notes) {
      ret = await this.dbconn.run(
        "INSERT INTO note (noteSymbol) VALUES (?);",
        [note]);
      if (ret.changes.changes < 0)
        console.warn(`[SQLite]: Changes: ${ret.changes.changes}
                       : inserting: ${note}`);
    }

    // Populate 'temperament'
    for (const t of defaultTemperaments) {
      ret = await this.dbconn.run(
        `INSERT INTO temperament (idTemperament,
          name,nameFR)
         VALUES (?,?,?);`,
        [t.idTemperament, t.name, t.nameFR]);
      if (ret.changes.changes < 0)
        console.warn(`[SQLite]: Changes: ${ret.changes.changes}
                       : inserting: ${t.name}`);

      for (const note in Notes) {
        const noteTyped: Notes = Notes[note as keyof typeof Notes]; // TS cast hack
        // Populate 'divergence'
        ret = await this.dbconn.run(
          `INSERT INTO divergence (idTemperament,
            noteSymbol, deviation, cpExp5th, csExp3rd)
           VALUES (?,?,?,?,?);`,
          [t.idTemperament, note, t.deviation[noteTyped],
          t.cpExp5th[noteTyped], t.csExp3rd[noteTyped]]
        );
        if (ret.changes.changes < 0)
          console.warn(`[SQLite]: Changes: ${ret.changes.changes}
                         : inserting into 'divergence'`);
      }
    }
  }

}

export default DB;
