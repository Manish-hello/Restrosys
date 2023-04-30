import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import {Link} from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function SignupEmployeeCompleted(){

    const router = useRouter();

    return(
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.content}>
		        <Text style={styles.Complete}>Sign Up Complete</Text>
		        </View>

                <View style={styles.tickcontainer}>
                    <Image style={styles.tick} source={require('../../assets/tick.png')} />
                </View>

                <View style={styles.adminVerifyText}>
                    <Text style={styles.verifytext}>
                            You will be logged in
                    </Text>
                    <Text style={styles.verifytext}>
                        once the Admine Verified!
                    </Text>
                </View>

                <View style={styles.btn}>
    
                    <TouchableOpacity style={styles.btnn}>
                    <Link href="../Login/Login">
                    <Text style={styles.started}>Log Out</Text>
                    </Link>
                    </TouchableOpacity>
                
                </View>

            </View>
        </ScrollView>
    );

};

const styles=StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:'white',
		height:'100%',
		width:'100%',
		paddingTop:60,
		paddingLeft:30,
		paddingRight:30,
    },
    content:{
        marginTop:windowHeight/16,
        alignItems:'center',

    },
    Complete:{
        fontSize:29.29,
        fontWeight:600,
        lineHeight:43,
    },
    tickcontainer:{
        marginTop:windowHeight/10,
        alignItems:'center',
    },
    tick:{
        height:100,
        width:100,
    },
    adminVerifyText:{
        width:'100%',
        alignItems:'center',
        marginTop:windowHeight/8,
    },
    verifytext:{
        fontWeight:500,
        fontSize:24.58,
        lineHeight:36.67,
    },
    btnn:{
        height:56,
        width:'100%',
        backgroundColor:'rgba(207,22,1,1)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        marginTop:windowHeight/4,
    },
    started:{
        color:'rgba(255,255,255,1)',
        fontWeight:'bold',
        fontSize:18,
        letterSpacing:1.1,
    },
});