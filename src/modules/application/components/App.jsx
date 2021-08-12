import { Container } from "modules/ui";
import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NoMatchPage from "./NoMatchPage";

const routes = [
	{
		path: "/",
		component: HomePage,
		exact: true,
	},
	// // @use-auth-module-begin
	// {
	//   path: "/auth",
	//   component: Login,
	// },
	// // @use-auth-module-end
	{
		component: NoMatchPage,
	},
];

const App = () => {
	return (
		<Container>
			<Switch>
				{routes.map((route, index) => (
					<Route {...route} key={index} />
				))}
			</Switch>
		</Container>
	);
};

export default App;
