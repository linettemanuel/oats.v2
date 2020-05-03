import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage/login-page.components';

const MainRouter = () => {
    return (
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route exact path='/login' component={''} />
            </Switch>
    );
}

export default MainRouter;