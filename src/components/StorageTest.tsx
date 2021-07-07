import React from 'react';
import { useState, useEffect } from 'react';
import { sqlite } from '../App';
import DB from '../engine/DB';
import { useStorageSQLite } from 'react-data-storage-sqlite-hook/dist';

const SQLiteTest: React.FC = () => {

  const [logs, setLogs] = useState<string[]>([]);
  const print = (msg: string) => setLogs((logs) => logs.concat(msg));
  
  const {echo, getPlatform, openStore, closeStore, isStoreOpen, isStoreExists,
    deleteStore, getItem, setItem, getAllKeys, getAllValues,
    getFilterValues, getAllKeysValues, isKey, setTable,
    removeItem, clear, isTable, getAllTables, deleteTable, isAvailable} = useStorageSQLite();

  const store = {echo, getPlatform, openStore, closeStore, isStoreOpen, isStoreExists,
    deleteStore, getItem, setItem, getAllKeys, getAllValues,
    getFilterValues, getAllKeysValues, isKey, setTable,
    removeItem, clear, isTable, getAllTables, deleteTable, isAvailable};

  useEffect(() => {
    console.log(store)
    if (store.isAvailable) {
      (async () => {

        
        await openStore({});
        await clear();
        await setItem('name', 'Jeep');
        const val = await getItem('name');
        await setItem('message', 'Hello World from ');
        const mess = await getItem('message');
        if( mess && val ) print((" > " + mess + " " + val + "\n")); 

        const keys = await getAllKeys();
        print((" > keys : " + keys.length + "\n"));
        for(let i: number = 0;i< keys.length;i++) {
          print((' >> key[' + i + "] = " + keys[i] + "\n"));
        }
        let values: string[] = await getAllValues();
        print((" > values : " + values.length + "\n"));
        for(var i in values) {
          // eslint-disable-next-line no-loop-func
          print((` >> value[${i}] = ${values[i]} \n`));
        }
        let iskey: boolean = await isKey('name');
        await setTable("testtable");
        print((` > set table "testtable" result \n`)); 
        await setItem('name', 'Jeepq');
        await setItem('email', 'Jeepq@example.com');
        await setItem('tel', '2255443315');
        const name = await getItem('name');
        if( name != null ) print((" > " + name + "\n")); 
        const email = await getItem('email');
        if( email != null ) print((" > " + email + "\n")); 
        const tel = await getItem('tel');
        if( tel != null ) print((" > " + tel + "\n")); 
        await removeItem('tel')
        print((` > remove tel \n`)); 
        iskey = await isKey('tel');
        print((' > iskey tel ' + iskey + "\n")); 
        await clear();
        print((` > clear table "testtable" \n`)); 
        // store data to test getFilterValues
        await setItem("session","Session Lowercase Opened");
        const data = {'a':20,'b':'Hello World','c':{'c1':40,'c2':'cool'}};
        await setItem("testJson",JSON.stringify(data));
        await setItem("Session1","Session Uppercase 1 Opened");
        await setItem("MySession2foo","Session Uppercase 2 Opened");
        const data1 = 243.567;
        await setItem("testNumber",data1.toString());
        await setItem("Mylsession2foo","Session Lowercase 2 Opened");
        await setItem("EnduSession","Session Uppercase End Opened");
        await setItem("Endlsession","Session Lowercase End Opened");
        await setItem("SessionReact","Session React Opened");
        // Get All Values
        values = await getAllValues();
        if(values.length !== 9) {
          print((" > getAllValues failed \n"));
          return false;
        } else {
          for(let i = 0; i< values.length;i++) {
            print((' key[' + i + "] = " + values[i] + "\n"));
          }
          print((" > getAllValues was successful \n"));
        }
        // Get Filter Values Starting with "session"
        const stValues: string[] = await getFilterValues("%session");
        if(stValues.length !== 3) {
          print((" > getFilterValues Start failed \n"));
        } else {
          for(let i = 0; i< stValues.length;i++) {
            print((' AH >> key[' + i + "] = " + stValues[i] + "\n"));
          }
          print((" > getFilterValues Start was successful \n"));
        }
        // Get Filter Values Ending with "session"
        const endValues: string[] = await getFilterValues("session%");
        if(endValues.length !== 3) {
          print((" > getFilterValues End failed \n"));
        } else {
          for(let i = 0; i< endValues.length;i++) {
            print((' >> key[' + i + "] = " + endValues[i] + "\n"));
          }
          print((" > getFilterValues End was successful \n"));
        }
        // Get Filter Values Containing "session"
        const contValues: string[] = await getFilterValues("session");
        if(contValues.length !== 7) {
          print((" > getFilterValues Contain failed \n"));
          print(("* Tab 2 Page End Test failed\n")); 
        } else {
          for(let i = 0; i< contValues.length;i++) {
            print((' >> key[' + i + "] = " + contValues[i] + "\n"));
          }
          print((" > getFilterValues Contain was successful \n"));
        }
        print(("* Tab 2 Page End Test successful\n")); 
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
          : "Store is not available."
        }
      </div>
    </>
  )
};

export default SQLiteTest;
