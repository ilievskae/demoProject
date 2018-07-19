import React from 'react';
import { View } from 'react-native';

const CardSectionContest = (props) => {
return (
	<View style={styles.containerStyle}>
	{props.children}
	</View>

);



};

const styles ={

containerStyle:{
	
borderBottomWidth: 2,
padding: 10,
backgroundColor:'#ffffff',
justifyContent: 'flex-start',
flexDirection: 'column',
borderColor: '#9EFFB3'


}

};

export default CardSectionContest;