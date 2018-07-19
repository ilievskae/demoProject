import React, { Component } from 'react';
import ContestList from './common/ContestList';
import Header from './common/Header';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';


 class Contests extends Component {

 	

	render(){

		return (

     		 <View style={{ flex:1 }}>
	    		 <Header headerText={'Available contests'} />
     	 		<ContestList />
      		</View>
  		);

	}

}




export default Contests;








