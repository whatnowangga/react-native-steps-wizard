import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './../reducers/';
import StepWrap from './stepbar/StepWrap';

class Steps extends Component {
	render() {
		return (
		<Provider store={createStore(reducers)}>
			<StepWrap steps={this.props.steps} />
		</Provider>
		);
	}
}

export default Steps;
