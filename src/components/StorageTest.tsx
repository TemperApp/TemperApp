import React from 'react';
import { useState, useEffect } from 'react';
import { useStorageSQLite } from 'react-data-storage-sqlite-hook/dist';

const StorageTest: React.FC = () => {

  const [logs, setLogs] = useState<string[]>([]);
  const print = (msg: string) => setLogs((logs) => logs.concat(msg));
  
  const {openStore, getItem, setItem, clear, isAvailable} = useStorageSQLite();
  const store = {openStore, getItem, setItem, clear, isAvailable};

  useEffect(() => {
    if (store.isAvailable) {
      (async () => {
        await store.openStore({});
        await store.clear();

        const person = {
          name: 'Donna',
          age: '35',
        };
        await store.setItem('person', JSON.stringify(person));
        const p = JSON.parse((await store.getItem('person'))!);

        if(p)
          print(`Hello! My name is ${p.name}, I'm ${p.age}`); 
        
        return true;

      })().then(async success => {
        print((success) ? "The set of tests ended" : "Tests stopped");
      });
    }
  }, []);

  let count = 1;

  return (
    <>
      <h3>Storage Test</h3>
      <div>
        {(store.isAvailable)
          ? logs.map((line) => (
              <div key={count++}>{line}</div>
            ))
          : "Store is not available :("
        }
      </div>
    </>
  )
};

export default StorageTest;
