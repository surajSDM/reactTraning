//Topics component, which renders any further <Route>'s conditionally on the paths :id value.
import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from "../container/auth";
import SignUp from "../container/auth/SignUp";
import ForgotPassword from "../container/auth/ForgotPassword";
function Routes() {
    return (
        <Router history={createBrowserHistory()}>
            <div>
                {/* <Header /> */}

                <Route exact path="/" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/ForgotPassword" component={ForgotPassword} />
            </div>
        </Router>
    );
}

export default Routes;