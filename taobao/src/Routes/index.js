import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import _404Page from "../pages/_404Page";
import MytaobaoPage from "../pages/MytaobaoPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

function Routes(props) {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/mytaobao" component={MytaobaoPage} /> */}
            <PrivateRoute path="/mytaobao" component={MytaobaoPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={_404Page} />
        </Switch>
    );
}

export default Routes;
