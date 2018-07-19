import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const ButtonContest = ({onPress, children}) =>{

	const {buttonStyle, textStyle}=styles;
		return (
			<TouchableOpacity onPress={onPress} style={buttonStyle}>
				<Text style={textStyle}>
					{children}
				</Text>
			</TouchableOpacity>
		);

};

const styles={

buttonStyle:{
flex: 1,
alignSelf: 'stretch',
backgroundColor: '#fff',
borderRadius: 25,
borderWidth: 3,
borderColor: '#9EEAFF',
marginLeft: 5,
marginRight: 5,

},

textStyle:{
alignSelf: 'center',
color: '#000000',
fontSize:16,
fontWeight: '600',
paddingTop:10,
paddingBottom: 10
}

};

export default ButtonContest;

