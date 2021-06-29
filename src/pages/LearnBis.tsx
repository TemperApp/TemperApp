import { Route } from "react-router";
import Learn_sheet from "./Learn_sheet";
import Learn_sheets from "./Learn_sheets";

const LearnBis: React.FC = () => {

  console.log("PAGE LEARN");

  return (
    <>
      <Route exact path="/learn" component={Learn_sheets} />
      <Route exact path="/learn/sheet/1" component={Learn_sheet}/>
      <Route exact path="/learn/sheet/2" component={Learn_sheet}/>
      <Route exact path="/learn/sheet/3" component={Learn_sheet}/>
      <Route exact path="/learn/sheet/4" component={Learn_sheet}/>
    </>


  );
};

export default LearnBis;
