import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from 'modules/auth';
import uuid from 'react-uuid';

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
                <Route key={uuid()} exact {...route} />
            ))}
        </Switch>
    );
}
