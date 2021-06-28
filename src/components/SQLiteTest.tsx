import React from 'react';
import { useState, useEffect } from 'react';
import { sqlite } from '../App';
import DB from '../engine/DB';

const SQLiteTest: React.FC = () => {

  const [logs, setLogs] = useState<string[]>([]);
  const print = (msg: string) => setLogs((logs) => logs.concat(msg));

  useEffect(() => {
    if (DB.isAvailable()) {
      (async () => {
        // Show 'temperament' where idTemperament = 2
        const data0 = await DB.query("SELECT * FROM temperament WHERE idTemperament = ?;", [2]);
        print(JSON.stringify(data0));

        // Show 'note' table content
        const data1 = await DB.query("SELECT * FROM note;");
        print(JSON.stringify(data1));
        
        // Insert a new note
        const ret1 = await DB.run("INSERT INTO note (noteSymbol) VALUES (?);", ['K_stonk']);
        print(JSON.stringify(ret1));
        if (!ret1)
          return false; // Error occured
        if (-1 === ret1.changes?.changes)
          return false; // Query did not modify database → considering it as a unexpected behaviour
        
        // Show 'note' table content to see changes
        const data2 = await DB.query("SELECT * FROM note;");
        print(JSON.stringify(data2));
        
        // Delete the previously inserted note
        const ret2 = await DB.run("DELETE FROM note WHERE noteSymbol = ?;", ['K_stonk']);
        print(JSON.stringify(ret2));
        if (!ret2)
          return false; // Error occured
        
        // Show 'note' table content
        const data3 = await DB.query("SELECT * FROM note;");
        print(JSON.stringify(data3));

        return true;
      })().then(async success => {
        print((success) ? "The set of tests ended" : "Tests stopped");
      });
    }
  }, []);

  let count = 1;

  return (
    <>
      <h3>SQLite Test</h3>
      <div>
        {(sqlite.isAvailable)
          ? logs.map((line) => (
              <div key={count++}>{line}</div>
            ))
          : "SQLite is only available on iOS or Android. Desktop web is not supported."
        }
      </div>
    </>
  )
};

export default SQLiteTest;
