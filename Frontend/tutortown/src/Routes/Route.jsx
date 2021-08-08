import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeMainPage from "./../Components/HomePage/HomeMainPage";
import SignUpMain from "./../Components/SignUpPage/SignUpMain";
import ButtonAppBar from "./../Components/HomePage/ButtonAppBar";
import { Footer } from "../Components/HomePage/Footer";
import { CheckOutMain } from "../Components/Payment/CheckOutMain";
import LoginMain from "../Components/LoginPage/LoginMain";
import StudentMainPage from "./../Components/StudentPage/StudentMainPage";
import { TutorDashboard } from "./../Components/StudentPage/TutorDashboard";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import AdminAuth from "../Components/Admin/AdminAuth";
import {Admin} from "../Components/Admin/Admin";

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

          <Route path="/login" exact>
            <LoginMain />
          </Route>

          <Route path="/student/dashboard" exact>
            <StudentMainPage />
          </Route>

          <Route path="/tutor/dashboard" exact>
            <TutorDashboard />
          </Route>

          <Route path="/student/booking/payment" exact>
            <CheckOutMain />
          </Route>

          <Route path="/admin/tutorTown/authenticated/authorized" exact>
            <AdminDashboard />
          </Route>
          <Route path='/admin/tutorTown/authenticated/verification' exact>
             < Admin />
          </Route>
          <Route path='/admin/tutorTown/login'>
            <AdminAuth/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default Routes;
