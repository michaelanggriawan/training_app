import React, { Component } from 'react';
import Navbars from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListTraining from './components/menu/listTraining';
import Profil from './components/menu/profil';
import RequestTraining from './components/menu/requestTraining';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
        <Navbars />
        <Switch>
          <Route exact path='/' component={ListTraining} />
          <Route path='/RequestTraining' component={RequestTraining} />
          <Route path='/Profile' component={Profil} />
          <Route path='/LogIn' component={LogIn} />
          <Route path='/SignUp' component={SignUp} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
