/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import BS   from 'react-bootstrap';

export default React.createClass({
	render: function () {
		return (
			<div className='container'>
				<header className="navbar navbar-inverse">
				<a className="navbar-brand"
					href="#">React-Sample</a>
				<ul className="nav navbar-nav">
				<a className="nav" href="#/reactSelect/">reactSelect</a>
				<a className="nav" href="#/fetchJson/">fetchJson</a>
				</ul>
				</header>

				<Router.RouteHandler />

				<footer className='footer'>
				<p children='supported by uryyyyyyy' />
				</footer>

			</div>
		);
	}
});
