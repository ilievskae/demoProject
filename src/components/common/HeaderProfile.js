import React from 'react';
import { Text, View, Image } from 'react-native';
import partlogo from './partlogo.png';


const HeaderProfile = (props) => {
	const { viewStyle, textStyle, imageStyle } = styles;
	return (

			<View style={viewStyle}>
				<Image source={partlogo} style={imageStyle} />
				<Text style={textStyle}>{props.headerText}</Text>

			</View>
	);
};

const styles = {
viewStyle:{
	backgroundColor: '#9EEAFF',
	justifyContent: 'center', 
	alignItems: 'center',
	height: 80,
	elevation: 10,
	position: 'relative'
},
textStyle: {
	fontSize: 20,
	color: '#000000',
	textShadowColor: 'rgba(0, 0, 0, 0.75)',
  	textShadowOffset: {width: -1, height: 1},
  	textShadowRadius: 10
},
imageStyle: {
    width: 45,
    height: 45
  }
};

export default HeaderProfile;