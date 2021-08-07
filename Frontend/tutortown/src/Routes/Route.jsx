import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin } from "../Components/Admin/Admin";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/tutorTown/authenticated" exact>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
