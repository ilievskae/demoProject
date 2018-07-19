import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileCard = (props) => {
	return (
		<View style={styles.containerStyle}>
			<Image source={props.src} style={styles.image} />
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
	height: 200,
},
image:{
	width: 180,
    height: 180
}

};

export default ProfileCard;