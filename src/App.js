import React from "react";
import Main from "./components/Main";
import Top from './components/Top'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Top />
          </Route>
        </Switch>
    </Router>
    )
  }
}

export default App;
