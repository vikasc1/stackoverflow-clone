import "../styles/App.css";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";

import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignInPage from "./SignInPage";
import QuestionNewPage from './QuestionNewPage';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                <Route path="/questions/new" exact component={QuestionNewPage} />
                <Route path="/" exact component={WelcomePage} />
                <Route path="/questions" exact component={QuestionIndexPage} />
                <Route path="/questions/:id" exact component={QuestionShowPage} />
                {/*TODO: SignIn/SignUp page handle*/}
               <Route path="/log_in" exact component={SignInPage} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;

