import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin } from "../Components/Admin/Admin";
import HomeMainPage from "./../Components/HomePage/HomeMainPage";
import SignUpMain from "./../Components/SignUpPage/SignUpMain";
import ButtonAppBar from "./../Components/HomePage/ButtonAppBar";
import { Footer } from "../Components/HomePage/Footer";
import { CheckOutMain } from "../Components/Payment/CheckOutMain";

const Routes = () => {
    return (
        <>
            <ButtonAppBar />
            <div>
                <Switch>
                    <Route path="/" exact>
                        <HomeMainPage />
                    </Route>
                    <Route path="/signup" exact>
                        <SignUpMain />
                    </Route>

                    <Route path="/student/booking/payment" exact>
                        <CheckOutMain />
                    </Route>
                    <Route path="/admin/tutorTown/authenticated" exact>
                        <Admin />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </>
    );
};

export default Routes;
