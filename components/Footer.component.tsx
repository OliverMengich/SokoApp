/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-floating-decimal */
import React from 'react';
import {
    View,
	Text,
    Dimensions,
    StyleSheet,
} from 'react-native';
const {width} = Dimensions.get('window');
function FooterComponent() {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.elements}>
                <View style={styles.element}>
                    <Text style={styles.sectionText}>MY ACCOUNT</Text>
                    <Text style={styles.normalText}>Sign In</Text>
                    <Text style={styles.normalText}>Register</Text>
                    <Text style={styles.normalText}>Order Status</Text>
                </View>
                <View style={styles.element}>
                    <Text style={styles.sectionText}>HELP</Text>
                    <Text style={styles.normalText}>Shipping</Text>
                    <Text style={styles.normalText}>Returns</Text>
                    <Text style={styles.normalText}>Sizing</Text>
                </View>
                <View style={styles.element}>
                    <Text style={styles.sectionText}>ABOUT</Text>
                    <Text style={styles.normalText}>Our Story</Text>
                    <Text style={styles.normalText}>Media</Text>
                    <Text style={styles.normalText}>Sustainability</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.socials}>
                    <Text style={styles.normalText}>I</Text>
                    <Text style={styles.normalText}>I</Text>
                    <Text style={styles.normalText}>F</Text>
                </View>
                <Text style={styles.normalText}>PRIVACY POLICY</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    footerContainer:{
        backgroundColor:'#000',
        marginTop:10,
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderTopWidth: .5,
        borderTopColor:'#fff',
    },
    elements:{
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width: width * .8,
        marginTop:5,
        flexWrap:'wrap',
    },
    element:{
        width: width * .4,
    },
    sectionText:{
        fontSize:17,
        fontWeight:'bold',
        color:'#fff',
        borderBottomWidth: .5,
        borderTopColor:'#fff',
    },
    normalText:{
        fontSize:17,
        fontWeight:'400',
        color:'#fff',
        marginVertical:3,
    },
    socials:{
        flexDirection:'row',
    },
});
export default FooterComponent;