import React, { useState, useEffect } from 'react';
import { IonPage } from '@ionic/react';
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

        const person = {
          name: 'Donna',
          age: '35',
        };
        await store.setItem('person', JSON.stringify(person));
        const p = JSON.parse((await store.getItem('person'))!);

        if(p.name === person.name && p.age === person.age)
          print(`success setItem and getItem`); 
        
        return true;

      })().then(async success => {
        print((success) ? "The set of tests ended" : "Tests stopped");
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let count = 1;

  return (
    <IonPage className="p-4">
      <div>
        <h2>Storage</h2>
        <button
          className="mr-4 p-2"
          onClick={() => (async () => store.clear())().then(() => print('Store cleared'))}
        >
          Clear store
        </button>
        <h3>Test Logs</h3>
        <div>
          {(store.isAvailable)
            ? logs.map((line) => (
                <div key={count++}>{line}</div>
              ))
            : "Store is not available :("
          }
        </div>
      </div>
    </IonPage>
  )
};

export default StorageTest;
