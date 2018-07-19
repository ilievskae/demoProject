import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileTextPoints = (props) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.textStyle1}>{props.board} </Text>
			<Text style={styles.textStyle2}>{props.status} </Text>
			<Text style={styles.textStyle3}>{props.achievements} </Text>
		</View>
	);
};


const styles ={
containerStyle:{
	flexDirection: 'row',
	backgroundColor:'#A89EFF',
	justifyContent: 'space-evenly',
	alignItems:'center',
	height: 30
},
textStyle1: {
	fontSize: 16,
	color: '#000000',
	fontWeight: 'bold',
	marginLeft:15,
	paddingLeft:5
},
textStyle2: {
	fontSize: 16,
	color: '#000000',
	fontWeight: 'bold',
	marginLeft: 15
},
textStyle3: {
fontSize: 16,
color: '#000000',
fontWeight: 'bold'

}


};

export default ProfileTextPoints;












