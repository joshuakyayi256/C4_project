import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
        <Route exact path="./components/Login.jsx" component={Login} />
        <Route exact path="/src/components/SignUp.jsx" component={Signup} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
