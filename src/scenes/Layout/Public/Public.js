import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  {Auth}  from '../../Auth/AuthDealer';
import { SingUp } from "../../Client/SingUp/SingUp";
import { auth } from '../../../services/Auth/AuthActions';
import { Home } from '../../../scenes/Client/Home/Home';
import {Postcar} from '../../../scenes/Client/PostCar/Postcar';
import {DetailCar} from '../../../scenes/Client/DetailCar/DetailCar';


export const Public = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/login-admin" component={Auth} />
        <Route path="/sing-up" component={SingUp} />
        <Route path="/detail-car/:id" component={DetailCar} />
        <Route path="/postcar" component={Postcar} />
      </Switch>
    </Router>
  )
}