import React from 'react';
import { View, Image } from 'react-native';
import logo from './logo.png';

const Logo = () => {
  return (
    	<View style={styles.container}>
          <Image source={logo} style={styles.image} />
      </View>

  );

};

const styles={

container: {
   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  image: {
      width: 280,
    height: 280
  }
};

export { Logo };