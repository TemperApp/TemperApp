import { Route } from "react-router";
import "./Sheets.css";
import Sheets from "../components/Sheets/Sheets";
import SheetsTemperament from "../components/Sheets/SheetsTemperament";
import { useState } from "react";


const SheetsRoute: React.FC = () => {

  console.log("PAGE SHEETS");
  const [idTemperament, setIdTemperament] = useState<number>(0);

  return (
    <>
      <Route exact path="/sheets" render={(props) => <Sheets {...props} darkTheme={false} setIdTemperament={setIdTemperament} />}/*component={Sheets}*/ />
      <Route exact path="/sheets/temperament" render={(props) => <SheetsTemperament {...props} id={idTemperament} />}/*component={SheetsTemperament}*/  />
    </>

  );
};

export default SheetsRoute;
