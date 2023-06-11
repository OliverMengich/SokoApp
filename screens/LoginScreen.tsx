/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eol-last */
/* eslint-disable no-floating-decimal */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import {
	Image,
    View,
	Pressable,
	// SafeAreaView,
	// ScrollView,
	// StatusBar,
	Text,
	TextInput,
    Dimensions,
    StyleSheet,
    StatusBar,
	// useColorScheme,
} from 'react-native';
const {width,height} = Dimensions.get('window');
function LoginScreen() {
    return (
        <>
            <StatusBar
				barStyle={'light-content'}
				backgroundColor={'#red'}
			/>
            <View style={{
                    flex:1,
                    width,
                    height:0,
                    borderTopColor:'red',
                    borderTopWidth:height / 2,
                    borderRightWidth: width,
                    borderRightColor:'#fff',
                    alignItems:'center',
                    justifyContent:'center',
                    // position:'relative',
                }}>
                    <View style={{position:'absolute',top: -350}}>
                        <Image style={{height:200,width:200,overflow:'hidden', borderWidth:1, borderColor:'#000',borderRadius:100}} source={require('./assets/oliverimg.png')} />
                        <Text>Soko Supermarket</Text>
                        <TextInput placeholder={'Email'} style={styles.textInputStyle}/>
                        <TextInput placeholder={'Password'} style={styles.textInputStyle}/>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </Pressable>
                        <Text style={{color:'#000'}}>Forgot password?</Text>
                    </View>
            </View> 
        </>
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
		fontSize:20,
	},
});
export default LoginScreen;