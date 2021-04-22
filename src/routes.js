import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import JokeComponent from "./components/JokeComponent"
import JokeContainer from "./containers/JokeContainer"


const browserHistory = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <Route path="/" component={JokeContainer(JokeComponent)} >
                    <Redirect to="/joke" />
                    <Route path="/joke" component={JokeContainer(JokeComponent)} />
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;