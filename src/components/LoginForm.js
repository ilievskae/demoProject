import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, Stack, Actions }  from 'react-native-router-flux';
import axios from 'axios';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component{

	state= { users:[], email: '', password: '' , error: '', loading: false};

	componentWillMount(){
		axios.get('https://api.myjson.com/bins/fiehi')
		.then(response => this.setState({ users: response.data }));

	}

	onButtonPress(state) {
		
		var sucess = false;
		const{ email, password } =this.state;

		this.setState({ error: '', loading: true});
		for (let user of this.state.users) 
		{
			if (user.email == email && user.password == password)
			{
				sucess = true;
				break;
			}
		}
		if (sucess){
			this.onLoginSuccess();
		}
		else{
			this.onLoginFail();
		}

	}

	onLoginFail(){
			this.setState({
			error: 'Authentication Failed.', loading:false

		});
	}

	onLoginSuccess(){

		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''

		});

	}

	renderButton(){

		if(this.state.loading){
			return <Spinner size="small" />;
		}

		return(
			<View style={{flex:1, paddingTop:30}}>
			<Button onPress={() => {this.onButtonPress(this.state)}}>
			Log in
			</Button>
			</View>
		);
	}


	render(){
		 return (
			<View style={{flex:1}}>

				<Card>
					<CardSection>
						<Input 
							placeholder="user@gmail.com" 
							label="Email"
							value={this.state.email}
							onChangeText={(text) => this.setState({email: text})}
						/>
					</CardSection>
			
					<CardSection>
						<Input
						secureTextEntry
						placeholder="*******"
						label="Password"
						value={this.state.password}
						onChangeText={(text) => this.setState({password: text})} 
						/>
					</CardSection>
				</Card>
			
			
					{this.renderButton()}
					<Text style={styles.errorTextStyle}>
						{this.state.error}
					</Text>
			</View>
							
			);
	}
}
const styles={
	errorTextStyle: {
		fontSize: 18,
		color: 'red',
		alignSelf: 'stretch',
		flex: 1,
		textAlign: 'center'
	}

};
export default LoginForm;