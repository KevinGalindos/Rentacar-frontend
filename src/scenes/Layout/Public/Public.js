import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  {Auth}  from '../../Auth/AuthDealer';
import { SingUp } from "../../Client/SingUp/SingUp";
import { auth } from '../../../services/Auth/AuthActions';
import { Home } from '../../../scenes/Client/Home/Home';
import {Postcar} from '../../../scenes/Client/PostCar/Postcar'


export const Public = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/login-admin" component={Auth} />
        <Route path="/sing-up" component={SingUp} />
        <Route path="/postcar" component={Postcar} />  {/* temporal para ver la vista sin login:*/}
      </Switch>
    </Router>
  )
}