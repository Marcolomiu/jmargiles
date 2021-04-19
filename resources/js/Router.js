import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './views/home/Home';
import QuiSom from './views/company_information/QuiSom';
import Galeria from './views/gallery/galeria';
import Contacte from './views/contact/Contacte';
import Pressupost from './views/budget/Pressupost';

//import Login from './views/Login/Login';
//import Register from './views/Register/Register';
//import NotFound from './views/NotFound/NotFound'
// User is LoggedIn
//import PrivateRoute from './PrivateRoute'
//import Dashboard from './views/user/Dashboard/Dashboard';

const Main = props => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path='/' component={Home}/>
        <Route path='/quisom' component={QuiSom}/>
        <Route path='/galeria' component={Galeria}/>
        <Route path='/contacte' component={Contacte}/>
        <Route path='/pressupost' component={Pressupost}/>
        
        {/*User will LogIn*/}
        {/*<Route path='/login' component={Login}/>*/}
        {/*<Route path='/register' component={Register}/>*/}
        {/* User is LoggedIn*/}
        {/*<PrivateRoute path='/dashboard' component={Dashboard}/>*/}
        {/*Page Not Found*/}
        {/*<Route component={NotFound}/>*/}
    </Switch>
);
export default Main;