/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Select  from 'react-select';

export default React.createClass({
	getInitialState: function () {
		return {options : [
			{ value: 'one', label: 'One' },
			{ value: 'two', label: 'Two' }
		]};
	},
	logChange: function(val) {
		console.log("Selected: " + val);
	},
	render: function() {
		return(
			<Select
			name="form-field-name"
			value="one"
			options={this.state.options}
			onChange={this.logChange}
			/>
		);
	}
});
