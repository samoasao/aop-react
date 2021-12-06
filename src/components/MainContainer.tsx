import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

//Pages
import Home from "../pages/Home";
// import Board from "../pages/Board";
// import PastShows from "../pages/PastShows/";
// import Tickets from "../pages/Tickets";
// import Auditions from "../pages/Auditions";
// import Founders from "../pages/Founders";
// import Contact from "../pages/Contact";
// import SupportIndividual from "../pages/SupportIndividual";
// import SupportCorporate from "../pages/SupportCorporate";
// import ForeverPlaid from "../pages/PastShows/ForeverPlaid";
// import NextToNormal from "../pages/NextToNormal";
// import DesertView from "../pages/Venues/DesertView";
// import PlaidTidings from "../pages/PlaidTidings";

const MainContainer = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Helmet>
          <title>Arizona Onstage Productions</title>
        </Helmet>
        <Home />
      </Route>
      
    </Switch>
  );
};
export default MainContainer;
