import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};


const styles={

containerStyle:{
	
	borderBottomWidth: 0,
	backgroundColor: '#ffffff',
	marginLeft: 5,
	marginRight: 5,
	marginTop: 10,
	elevation:1

}

};

export { Card };