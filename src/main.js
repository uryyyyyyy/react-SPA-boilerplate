/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import NotFoundPage  from './utils/myComponents/NotFoundPage';
import AppTemplate  from './utils/myComponents/AppTemplate';
import FetchJsonRoot  from './fetchJsonPage/FetchJsonRoot';
import ReactSelect  from './utils/myComponents/ReactSelect';

var routes = (
	<Router.Route name='app' path='/' handler={AppTemplate}>
		<Router.Route name='reactSelect/'
		handler={ReactSelect} />
		<Router.Route name='fetchJson/'
		handler={FetchJsonRoot} />
		<Router.NotFoundRoute handler={NotFoundPage}/>
	</Router.Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});
