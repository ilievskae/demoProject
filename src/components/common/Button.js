import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({onPress, children}) =>{


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
backgroundColor: '#9EFFB3',
borderRadius: 5,
borderWidth: 2,
borderColor: '#b82e8a',
marginLeft: 5,
marginRight: 5

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







//export default Button;

export { Button };
//key and a value of the actuall component

