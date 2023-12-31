/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-floating-decimal */
/* eslint-disable eol-last */
import React from 'react';
import {
    StyleSheet,
	View,
    Dimensions,
    Text,
    Pressable,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native';
import FooterComponent from '../components/Footer.component';
const {width} = Dimensions.get('window');

function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.navContainer}>
                    <Text>Nav</Text>
                    <Text>Soko Yetu</Text>
                    <View style={styles.rowContainer}>
                        <Text>Cart</Text>
                        <Text>Cart</Text>
                    </View>
                </View>
                <View>
                    <ImageBackground style={{height: width}} resizeMode="cover" source={require('../assets/oliverimg.png')}>
                        <Text style={styles.normalText}>Healthy Mondays</Text>
                        <Text style={styles.boldText} >Get Up to 70% off for everything</Text>
                        <Pressable style={styles.button}>
                            <Text style={{textAlign:'center',fontWeight:'bold',color:'#fff'}}>Shop Now</Text>
                        </Pressable>
                    </ImageBackground>
                </View>
                <View style={[styles.rowContainer,{marginVertical:10,marginHorizontal:7,}]}>
                    <Text style={styles.boldText}>Categories</Text>
                    <Pressable  >

                        <Text style={styles.moreText}>Show all</Text>
                    </Pressable>
                </View>
                <View style={[styles.itemsContainer,{marginHorizontal:7}]}>
                    <ScrollView horizontal={true}>
                        <View style={styles.item}>
                            <Image style={{height: width*.5,width:'100%'}} source={require('../assets/oliverimg.png')} />
                            <Text style={{fontSize:25, fontWeight: '600',color:'#000'}}>Shoes</Text>
                            <Text style={styles.priceText}>1100 Categories</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={{height: width*.5,width:'100%'}} source={require('../assets/oliverimg.png')} />
                            <Text style={{fontSize:25, fontWeight: '600',color:'#000'}}>Shoes</Text>
                            <Text style={styles.priceText}>1100 Categories</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={[styles.rowContainer,{marginVertical:10,marginHorizontal:7,}]}>
                    <Text style={styles.boldText}>Popular</Text>
                    <Text style={styles.moreText}>Show all</Text>
                </View>
                <View style={[styles.itemsContainer,{marginHorizontal:7}]}>
                    <ScrollView horizontal={true}>
                        <View style={styles.item}>
                            <Image style={{height: width*.5,width:'100%'}} source={require('../assets/oliverimg.png')} />
                            <Text style={{fontSize:25, fontWeight: '600',color:'#000'}}>Shoes</Text>
                            <Text style={styles.priceText}>1100 Categories</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={{height: width*.5,width:'100%'}} source={require('../assets/oliverimg.png')} />
                            <Text style={{fontSize:25, fontWeight: '600',color:'#000'}}>Shoes</Text>
                            <Text style={styles.priceText}>1100 Categories</Text>
                        </View>
                    </ScrollView>
                </View>
                <FooterComponent/>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    navContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    button:{
		backgroundColor:'red',
		width: width * .3,
		height:45,
		marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
	},
    boldText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        maxWidth:width *.8,
    },
    normalText:{
        fontSize:16,
        fontWeight: '200',
    },
    moreText:{
        color:'#FF0A0A',
        fontWeight:'bold',
    },
    itemsContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    item:{
        backgroundColor:'#D9D9D9',
        width: width * .45,
        marginRight: width * .1,
        borderRadius:4,
    },
    priceText:{
        fontSize:15,
        fontWeight: '500',
        color:'#000',
    },
});
export default HomeScreen;