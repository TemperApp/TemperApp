import { Route } from "react-router";
import Sheets from "./Sheets";
import SheetsTemperament from "./SheetsTemperament";


const SheetsRoute: React.FC = () => {

  console.log("PAGE SHEETS");

  return (
    <>
      <Route exact path="/sheets" component={Sheets} />
      <Route exact path="/sheets/temperament" component={SheetsTemperament}/>
    </>


  );
};

export default SheetsRoute;
