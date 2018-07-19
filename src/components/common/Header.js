import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
 const { textStyle, viewStyle } =styles;
	return (

		<View style={viewStyle}>
		<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);

};

const styles = {

	viewStyle:{
		backgroundColor: '#9EEAFF',
		justifyContent: 'center', 
		alignItems: 'center',
		height: 60,
		elevation: 10,
		position: 'relative'
	},

textStyle: {
	fontSize: 25,
	color: '#000000',
	textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
}

};

export default Header; 