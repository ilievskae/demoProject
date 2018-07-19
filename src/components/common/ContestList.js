
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ContestDetail from './ContestDetail';

class ContestList extends Component {
state={ contests: [] };
	componentWillMount(){
		axios.get('https://api.myjson.com/bins/11zr26')
		.then(response => this.setState({ contests: response.data}));
	}

	renderContests(){
		return this.state.contests.map(contest => 
			<ContestDetail key={contest.title} contest={contest} />
			
		 );
	}
	render(){

		return (

			<ScrollView>
				{this.renderContests()}
			</ScrollView>

		);
	}

}
export default ContestList;
