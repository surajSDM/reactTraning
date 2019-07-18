//Topics component, which renders any further <Route>'s conditionally on the paths :id value.
import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from "../container/auth";
import SignUp from "../container/auth/SignUp";
import ForgotPassword from "../container/auth/ForgotPassword";
import { Provider } from "mobx-react";
import Stores from "../store";
function Routes() {
    return (
        <Provider stores={Stores}>
            <Router history={createBrowserHistory()}>
                <Route exact path="/" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/ForgotPassword" component={ForgotPassword} />
            </Router>
        </Provider>
    );
}

export default Routes;