import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileCollectedPoints =(props) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.textStyle}>Collected Points : </Text>
			<Text style={styles.textStyle}>{props.collectedPoints}</Text>
		</View>
	);
};

const styles ={
containerStyle:{
	flexDirection: 'column',
	backgroundColor:'#A89EFF',
	position: 'relative',
	justifyContent: 'center',
	alignItems:'center',
	height: 50
},
textStyle: {
	fontSize: 16,
	color: '#000000',
	fontWeight: 'bold',
	textAlign: 'center'
}

};

export default ProfileCollectedPoints;