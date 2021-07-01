import { Route } from "react-router";
import LearnSheet from "../components/Learn/LearnSheet";
import Learn from "../components/Learn/Learn";

const LearnRoute: React.FC = () => {

  console.log("PAGE LEARN");

  return (
    <>
      <Route exact path="/learn" component={Learn} />
      <Route exact path="/learn/sheet/1" component={LearnSheet}/>
      <Route exact path="/learn/sheet/2" component={LearnSheet}/>
      <Route exact path="/learn/sheet/3" component={LearnSheet}/>
      <Route exact path="/learn/sheet/4" component={LearnSheet}/>
    </>
  );
};

export default LearnRoute;
