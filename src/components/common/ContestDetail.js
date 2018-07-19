import React from 'react';
import { Text, View, Image  } from 'react-native';
import CardContest from './CardContest';
import CardSectionContest from './CardSectionContest';
import ButtonContest from './ButtonContest';

const ContestDetail = ({ contest }) => {
	const {title, photo, description } = contest;

return(

	<CardContest>
	<CardSectionContest>
	<View style={styles.headerContentStyle}>
	<Text style={styles.headerTextStyle}>{title}</Text>
	
	
	</View>
	</CardSectionContest>

	<CardSectionContest>
		<Image 
		style={styles.imageStyle} 
		source={{ uri: photo }}
		/>
		<Text style={styles.descriptionStyle}>{description} </Text>
	

	

	<ButtonContest >

		Enter contest

	</ButtonContest>


</CardSectionContest>


	</CardContest>


	);

};

const styles={

headerContentStyle: {
flexDirection: 'row',
justifyContent:'space-around'


},

headerTextStyle:{
fontSize: 20,
color: '#000000'


},


imageStyle:{

	height: 180,
	flex: 1,
	width:null,
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center'

},

descriptionStyle:{
marginBottom:15,

marginTop:10,
marginLeft:10,
marginRight:10,

fontSize: 18,
textAlign: 'center'



}

};


export default ContestDetail;