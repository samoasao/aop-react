import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Footer from "./Footer";

function App() {

  return (
    <React.Fragment>
      <Switch>
        <Route path="*">
          <Navbar />
          <MainContainer />
          <Footer />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
export default App;
