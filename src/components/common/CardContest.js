import React from 'react';
import { View } from 'react-native';

const CardContest = (props) => {
return (

	<View style={styles.containerStyle}>
		{props.children}
	</View>

);

};


const styles={

containerStyle:{
	borderWidth: 3,
	borderRadius: 3,
	borderColor: '#A89EFF',
	backgroundColor: '#ffffff',
	marginLeft: 5,
	marginRight: 5,
	marginTop: 10,
	marginBottom:5

}


};


export default CardContest;