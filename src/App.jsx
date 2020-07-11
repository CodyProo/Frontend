import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';
import Create from './pages/Create';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/Single/:id' exact component={Single} />
				<Route path='/Create' exact component={Create} />
			</Switch>
		</Router>
	);
};

export default App;
