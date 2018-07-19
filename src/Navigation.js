import React from 'react';
import { Scene, Router, Stack, Actions }  from 'react-native-router-flux';
import Main from './components/Main';

const Navigation = () => {

return(

		<Router style={{}}>
			<Stack key="root" hideNavBar>
				<Scene key="login" component={Main} initial />
			</Stack>
		</Router>
	);
};

export default Navigation;