import React from 'react';
import { View, Text } from 'react-native';

const StepCircle = (props) => {
	const { selectedIndex, index } = props;
	const circleOrder = selectedIndex + 1;
	const circleStyle = (index === circleOrder) ? 'selectedCircle' : 'circleContainer';
	const circleTitleStyle = (index === circleOrder) ? 'selectedCircleTitle' : 'circleTitle';
	return (
		<View style={styles[circleStyle]}>
			<Text style={styles[circleTitleStyle]}>{index}</Text>
		</View>
	);
}

const styles = {
	selectedCircleTitle: {
		fontSize: 12,
		color: '#2E81D3'
	},
	circleTitle: {
		fontSize: 12,
		color: 'white'
	},
	selectedCircle: {
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#2E81D3',
		borderRadius: 100 / 2,
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		zIndex: 1
	},
	circleContainer: {
		borderRadius: 100 / 2,
		backgroundColor: '#2E81D3',
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		zIndex: 1
	}
}

export default StepCircle;