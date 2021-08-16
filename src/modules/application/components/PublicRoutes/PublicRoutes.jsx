import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from 'modules/auth';
const routes = [
    {
        render: () => <Login />,
        path: '/login',
    },

    {
        render: () => <Redirect to="/login" />,
    },
];

export default function PublicRoutes() {
    return (
        <Switch>
            {routes.map(route => (
                <Route key={route.path} exact {...route} />
            ))}
        </Switch>
    );
}
