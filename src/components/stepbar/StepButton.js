import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const StepButton = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,

	},
	buttonStyle: {
		alignSelf: 'stretch',
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5,

	}
}

export default StepButton;