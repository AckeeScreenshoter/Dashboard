import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';

import HomePage from 'modules/application/components/HomePage';
const routes = [
    {
        render: () => <HomePage />,
        path: '/',
    },
    {
        render: () => <Redirect to={'/'} />,
    },
];

export default function AuthRoutes() {
    return (
        <>
            <Switch>
                {routes.map(route => (
                    <Route key={nanoid()} exact {...route} />
                ))}
            </Switch>
        </>
    );
}
