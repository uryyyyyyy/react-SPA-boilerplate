/** @jsx React.DOM */
'use strict';
import React  from 'react';
import AsyncUtil  from '../utils/functions/AsyncUtil';

export default React.createClass({
	ajax : function(){
		AsyncUtil.getAjaxAsync('/webAPI/sample')
			.then(window.alert);
	},
	render: function() {
		return (
			<button className="btn btn-primary"
			onClick={this.ajax}
			children="AJAX"/>
		);
	}
});
