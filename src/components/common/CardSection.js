import React from 'react';
import { View } from 'react-native';



const CardSection = (props) => {
return (



	<View style={styles.containerStyle}>
	{props.children}
	</View>

);



};


const styles ={

containerStyle:{
	borderWidth: 1,

padding: 5,
backgroundColor:'#fff',
justifyContent: 'flex-start',
flexDirection: 'row',
borderColor: '#000000',
position: 'relative',
marginBottom: 10,
flexDirection: 'row'


}

};

export { CardSection };