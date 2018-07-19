import React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import status from './status.png';
import leader from './leader.png';
import medal from './medal.png';

const ProfileTextLine = () => {
	return (
		<View style={styles.containerStyle}>
			<Image source={leader} style={styles.image} />
	     	<Image source={status} style={styles.image} />
	   		<Image source={medal} style={styles.image} />
		</View>
	);
};


const styles ={
containerStyle:{
	flexDirection: 'row',
	backgroundColor:'#A89EFF',
	justifyContent: 'space-evenly',
	height: 40,
	paddingTop:5
},
image: {
 	paddingBottom:35,
    width: 30,
    height: 30
  }

};
export default ProfileTextLine;












