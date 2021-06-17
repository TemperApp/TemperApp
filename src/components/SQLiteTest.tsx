import React from 'react';
import { useState, useEffect } from 'react';
import { sqlite, existingConn } from '../App';
import { temperaments } from '../model/Temperament'
import { NoteAsString } from '../model/Note'

const SQLiteTest: React.FC = () => {

  const [logs, setLogs] = useState<string[]>([]);
  const print = (msg: string) => setLogs((logs) => logs.concat(msg));

  useEffect(() => {
    if (sqlite.isAvailable) {
      const testSQLite = async (): Promise<Boolean> => {
        print("## START ##");
        try {
          const db = await sqlite.createConnection("db", false, "no-encryption", 1);
          await db.open();

          let ret: any;

          await db.execute(`DROP TABLE temperament`);
          await db.execute(`DROP TABLE note`);
          await db.execute(`DROP TABLE corresponds`);

          ret = await db.execute(`
          CREATE TABLE temperament (
            idTemperament   INTEGER PRIMARY KEY AUTOINCREMENT,
            name            VARCHAR(70),
            slugName        VARCHAR(70)
          )`);
          if (ret.changes.changes < 0) {
            print(`ERR: Execute changes: ${ret.changes.changes}`);
            return false;
          }

          ret = await db.execute(`
          CREATE TABLE note (
            noteSymbol   VARCHAR(7) PRIMARY KEY NOT NULL
          )`);
          if (ret.changes.changes < 0) {
            print(`ERR: Execute changes: ${ret.changes.changes}`);
            return false;
          }

          ret = await db.execute(`
          CREATE TABLE corresponds (
            idTemperament   INTEGER NOT NULL,
            noteSymbol      VARCHAR(7) NOT NULL,
            deviation       REAL NOT NULL,
            cpExp5th        VARCHAR(10) NOT NULL,
            csExp3rd        VARCHAR(10) NOT NULL,
            PRIMARY KEY (idTemperament, noteSymbol)
          )`);
          if (ret.changes.changes < 0) {
            print(`ERR: Execute changes: ${ret.changes.changes}`);
            return false;
          }

          await db.createSyncTable();
          await db.setSyncDate((new Date(Date.now())).toISOString());
          
          // Populate 'note'
          for (let note in NoteAsString) {
            ret = await db.run(
              "INSERT INTO note (noteSymbol) VALUES (?)",
              [note]);
          }

          // Populate 'temperament'
          for (let t of temperaments) {
            ret = await db.run(
              "INSERT INTO temperament (idTemperament,name,slugName) VALUES (?,?,?)",
              [t.idTemperament, t.name, t.slugName]);

            for (let note in NoteAsString) {
              // Populate 'corresponds'
              ret = await db.run(
                `INSERT INTO corresponds (idTemperament,
                  noteSymbol, deviation, cpExp5th, csExp3rd)
                  VALUES (?,?,?,?,?)`,
                [t.idTemperament, note, t.deviation[note],
                t.cpExp5th[note], t.csExp3rd[note] ]
              );
            }
          }

          ret = await db.query("SELECT * FROM corresponds;");

          setLogs((logs) => logs.concat(JSON.stringify(ret)));
          existingConn.setExistConn(true);
          return true;
        } catch (err) {
          print(`ERR: ${err.message}`);
          return false;
        }
      }

      testSQLite().then(async success => {
        print((success) ? "The set of tests was successful" : "Tests failed");
      });
    }
  }, []);

  return (
    <>
      <h3>SQLite Test</h3>
      <p>
        {(sqlite.isAvailable)
          ? logs.map((line) => <div>{line}</div>)
          : "SQLite is only available on iOS or Android. Desktop web is not supported."
        }
      </p>
    </>
  )
};

export default SQLiteTest;
