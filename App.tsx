/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-mixed-spaces-and-tabs */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
	Dimensions,
	StatusBar,
	// SafeAreaView,
	// ScrollView,
	// StatusBar,
	StyleSheet,
	// useColorScheme,
	View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
const {width} = Dimensions.get('window');


function App(): JSX.Element {
	// const isDarkMode = useColorScheme() === 'dark';
	// const backgroundStyle = {
	// 	backgroundColor: isDarkMode ? 'red' : 'red',
	// };
	return (
		<View style={styles.backgroundContainer}>
			<StatusBar
				barStyle={'dark-content'}
				backgroundColor={'#fff'}
			/>
			<HomeScreen/>
		</View>

 	);
}

const styles = StyleSheet.create({
	backgroundContainer:{
		flex: 1,
	},
	redBg:{
		flex: 1,
		backgroundColor: 'red',
		// transform: [{ rotateX: '5deg' }],
	},
	whiteBg:{
		flex: 1,
    	backgroundColor: 'white',
	},
	textInputStyle:{
		fontWeight:'bold',
		fontSize:20,
		borderBottomColor:'#000',
		borderBottomWidth:2,
		width: width * .8,
		color: 'black',
		// marginTop:4,
	},
	button:{
		backgroundColor:'red',
		width: width * .5,
		height:55,
		borderRadius:30,
		marginVertical:20,
		alignItems:'center',
	},
	buttonText:{
		fontWeight:'bold',
		textAlign:'center',
		color:'#fff',
		fontSize:20
	},
});

export default App;
