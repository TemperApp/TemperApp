import React from 'react';
import { useState, useEffect } from 'react';
import { sqlite, existingConn } from '../App';

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

          await db.execute(`DROP TABLE users`);

          let ret = await db.execute(`CREATE TABLE users (
            id      INTEGER PRIMARY KEY AUTOINCREMENT,
            name    VARCHAR(70),
            email   VARCHAR(70),
            age     INTEGER,
            company VARCHAR(70)
          )`);
          if (ret.changes.changes < 0) {
            print(`ERR: Execute changes: ${ret.changes.changes}`);
            return false;
          }

          await db.createSyncTable();
          await db.setSyncDate((new Date(Date.now())).toISOString());

          ret = await db.run(
            "INSERT INTO users (name,email,age,company) VALUES (?,?,?,?)",
            ['Jean', 'jean@hotmail.fr', 29, 'Damcom']);

          ret = await db.run(
            "INSERT INTO users (name,email,age,company) VALUES (?,?,?,?)",
            ['Marine', 'macham@gmail.com', 29, 'Haaz']);

          ret = await db.query("SELECT * FROM users;");

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
