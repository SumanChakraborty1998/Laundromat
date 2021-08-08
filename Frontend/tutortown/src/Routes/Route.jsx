import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin } from "../Components/Admin/Admin";
import HomeMainPage from "../Components/HomePage/HomeMainPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomeMainPage />
        </Route>
        <Route path="/admin/tutorTown/authenticated" exact>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
