import React from 'react';
import { TextInput, View, Text } from 'react-native';

const ProfileInput = ({value, onChangeText}) => {
	const { inputStyle, newStyle, containerStyle } =styles;
	return (
		<View style={newStyle}>
			<View style={containerStyle}>
				<TextInput
					placeholder="Enter voucher code"
					underlineColorAndroid='rgba(0,0,0,0)'
					value={value}
					onChangeText={onChangeText}
					style={inputStyle}		
				/>
			</View>
		</View>

	);
};

const styles = {
inputStyle: {
	color: '#000',
	fontSize: 18,
	lineHeight: 25,
	flex: 1,
	justifyContent: 'center',
	alignItems:'center',
	textAlign: 'center',
},
containerStyle: {
	flexDirection: 'row',
	position: 'relative',
	justifyContent: 'center',
	alignItems:'center',
	height: 50,
	borderColor:'#000000',
	borderWidth: 2,
	borderRadius:35,
	backgroundColor: '#ffffff',
	marginLeft:65,
	marginRight:65

},
newStyle:{
	backgroundColor:'#A89EFF',
	paddingTop:10,
	paddingBottom: 10
}
};

export default  ProfileInput;