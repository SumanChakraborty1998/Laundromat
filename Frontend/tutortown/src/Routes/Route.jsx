<<<<<<< HEAD
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin } from "../Components/Admin/Admin";
=======
import React from 'react';
// import { Route, Switch } from 'react-router-dom';

>>>>>>> 4db99966359c7beb154e159011e04ef9842e7d11

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
