import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';
import { stepIndexChanged } from '../../actions';

class StepContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { components, steps } = this.props;
		return (
			<View style={styles.componentContainer}>
				{
					components[steps.index]()
				}
			</View>
		);
	}
}
const mapStateToProps = state => {
	const { steps } = state;
	return { steps };
}

const styles = {
	componentContainer: {
		width: '100%',
		marginTop: 10,
		height: Dimensions.get('window').height - 150,
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10,
		flex: 1
	},
}

export default connect(mapStateToProps, { stepIndexChanged })(StepContent);