import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderProfile from './common/HeaderProfile';
import ProfileCard from './common/ProfileCard';
import ProfileCollectedPoints from './common/ProfileCollectedPoints';
import ProfileTextLine from './common/ProfileTextLine';
import ProfileTextPoints from './common/ProfileTextPoints';
import ProfileInput from './common/ProfileInput';
import ProfileButton from './common/ProfileButton';

class Profile extends Component{

	state={ users: [], vouchers: [], error: '',  voucher: ''};
 	users:[];
 	currentUser;
 	vouchers:[];
 	currentVoucher;
 	
	componentWillMount(){
	
		var userData = require('./users.json');
		this.users = userData;
		this.currentUser = userData[1];
		
		let niza = [require("./common/user0.png"),require("./common/user1.png"),require("./common/user2.png"),require("./common/user3.png"),require("./common/user4.png")];
		this.currentUser.photo = niza[1];

		var voucherData = require('./vouchers.json');
		this.vouchers=voucherData;
				
	}

	onButtonPress(state) {
		
		var success = false;
		const{ voucher } =this.state;
		console.log(voucher);
		console.log(this.vouchers[0].name);
		let bonus=30;

		this.setState({ error: ''});
		for (let i=0;i< this.vouchers.length;i++) 
		{
			if (voucher == this.vouchers[i].name)
			{
				success = true;							
				this.currentUser.points=(parseInt(this.currentUser.points) + 30).toString();
				break;
			}
		}
		if (success){
			this.onVoucherSuccess();
			console.log(success);
			
		}
		else{
			this.onVoucherFail();
			
		}

	}

		onVoucherFail(){
			const{ voucher } =this.state;
			if(voucher== ""){



			this.setState({
			error: 'Empty voucher field.'
			});
		}
		else{
			
			this.setState({
			error: 'Error with the voucher code.',
			voucher:''
			});

			}
		}

	onVoucherSuccess(){

		this.setState({
			error: '',
			voucher: ''

		});

	}


render(){

	return (

		<View>	
			<HeaderProfile headerText={"Welcome " + this.currentUser.name} />	
			<ProfileCard src={this.currentUser.photo}/>
			<ProfileCollectedPoints collectedPoints={this.currentUser.points}  />
			<ProfileTextLine  />
			<ProfileTextPoints status={this.currentUser.status} achievements={this.currentUser.achievements} board={this.currentUser.board} />
			<ProfileInput 
				value={this.state.voucher}
				onChangeText={(text) => this.setState({voucher: text})} 
			/>
			<View style={styles.errorContainerStyle}>
				<Text style={styles.errorTextStyle}>
						{this.state.error}
				</Text>
			</View>			
			<ProfileButton onPress={() => {this.onButtonPress(this.state)}}>
				Send voucher code
			</ProfileButton>
		</View>
		);
	}
}
const styles={
	errorTextStyle: {
		color: 'red',
		fontSize:18,
		textAlign: 'center',
		backgroundColor:'#A89EFF'
	},
	errorContainerStyle:{
		backgroundColor:'#A89EFF',
		height:40

	}

};
export default Profile;




