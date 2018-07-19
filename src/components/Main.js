import React, { Component } from 'react';
import { View } from 'react-native';
import { Logo } from './common';
import LoginForm from './LoginForm';

class Main extends Component {

	render(){

		return(

			<View style={{ flex: 1, backgroundColor:'#FFFFFF'}}>
				<Logo /> 
				<LoginForm />
			</View>  

		);

	}

}

export default Main;