import { Container } from 'modules/ui';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Login from './Login';

import NoMatchPage from './NoMatchPage';

const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },

    {
        path: '/auth',
        component: Login,
    },
    {
        component: NoMatchPage,
    },
];

const App = () => {
    return (
        <Container>
            <Header />
            <Switch>
                {routes.map(route => (
                    <Route {...route} key={route} />
                ))}
            </Switch>
        </Container>
    );
};

export default App;
