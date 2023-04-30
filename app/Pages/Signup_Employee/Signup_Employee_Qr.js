import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import {Link} from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupEmployeeQr(){
    const router = useRouter();
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upper}>
                <TouchableOpacity>
                <FontAwesome5 name={'chevron-left'} size={18} color={'darkblue'}
                onPress={() => {
                    router.back();
                }}
                />
                </TouchableOpacity>
                </View>

                <View style={styles.content}>
		        <Text style={styles.signup}>Sign Up</Text>
		        </View>

                <View style={styles.qrouterbox}>
                <Text style={styles.qrtext}>Scan the Qr code from Admin:</Text>
                <View style={styles.QR}>
                    <Text>here qr from admin goes</Text>
                </View>
                </View>

                <View style={styles.OR}>
			    <Text style={styles.leftline}></Text>
			    <Text style={styles.or}>or</Text>
			    <Text style={styles.rightline}></Text>
		        </View>

                <View style={styles.textinput}>
                    <TextInput style={styles.text} placeholder='Enter the resturant ID'
			        placeholderTextColor={'rgba(0,0,0,0.5)'}
                    >
                    </TextInput>
                </View>

                <View style={styles.btn}>
    
                <TouchableOpacity style={styles.btnn}>
                <Link style={styles.linkstyle} href="./Signup_Employee_yourrestaurant">
                <Text style={styles.next}>Next</Text>
                </Link>
                </TouchableOpacity>
                
                </View>

                <View style={styles.bottom}>
                <Text style={styles.left}>Already have an account?</Text>
                <Text style={styles.horzline}></Text>
                <TouchableOpacity>
                <Link href="../Login/Login">
                <Text style={styles.right}>Sign in</Text>
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
        marginTop:windowHeight/32,
   },
    signup:{
		fontSize:30,
		fontWeight:'bold',
		margin:0,
	},
    qrouterbox:{
        height:400,
        width:'100%',
        alignItems:'center',
        marginTop:windowHeight/32,
    },
    qrtext:{
        fontWeight:500,
        fontSize:16,
        marginTop:windowHeight/32,
    },
    QR:{
        height:'70%',
        width:'80%',
        backgroundColor:'grey',
        marginTop:windowHeight/32,
    },
    OR:{
		marginTop:windowHeight/32,
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-between',
	},
	leftline:{
		height:1,
		width:'46%',
		backgroundColor:'rgba(0,0,0,1)',
		position:'relative',
		top:2,
		elevation:5,
		shadowColor: 'rgba(0,0,0,0.8)',
	},
	or:{
		fontWeight:'bold',
		fontSize:16,
	},
	rightline:{
		height:1,
		width:'46%',
		backgroundColor:'rgba(0,0,0,1)',
		position:'relative',
		top:2,
		elevation:5,
		shadowColor: 'rgba(0,0,0,0.8)',
	},
    textinput:{
        height:'10%',
        width:'100%',
    },
    text:{
        height:50,
        width:'90%',
        borderWidth:1,
        borderRadius:7,
		borderColor:'rgba(0,0,0,0.2)',
		padding:10,
        marginTop:20,
		fontSize:16,
    },
    btnn:{
		height:56,
		width:'100%',
		backgroundColor:'rgba(251, 138, 56, 1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:12,
		marginTop:60,
		elevation:15,
		shadowColor:'rgba(0, 0, 0,0.5)',
	},
	next:{
		color:'rgba(0,0,0,1)',
		fontWeight:'bold',
		fontSize:18,
		letterSpacing:1.1,
	},
	bottom:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		marginTop:windowHeight/22,
		paddingLeft:10,
		paddingRight:20,
		height:80,

	},
	right:{
		color:'rgba(251, 138, 56, 1)',
		fontWeight:'bold',

	},
	horzline:{
		height:13,
		width:3,
		backgroundColor:'rgba(226, 227, 228, 1)',
	},
	left:{
		fontSize:15,
	},

});