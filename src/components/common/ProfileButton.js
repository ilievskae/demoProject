import React from 'react';
import { Text , View, TouchableOpacity } from 'react-native';

const ProfileButton = ({onPress, children}) =>{

	const {buttonStyle, textStyle}=styles;
		return (
			<TouchableOpacity onPress={onPress}  style={buttonStyle}>
				<Text style={textStyle}>
					{children}
				</Text>
			</TouchableOpacity>
		);
};


const styles={

buttonStyle:{
	alignSelf: 'stretch',
	backgroundColor: '#9EFFB3',
	borderWidth: 7,
	borderColor: '#9EEAFF',
},

textStyle:{
	alignSelf: 'center',
	color: '#000000',
	fontSize:18,
	fontWeight: '600',
	paddingTop:10,
	paddingBottom: 10
}

};

export default ProfileButton;