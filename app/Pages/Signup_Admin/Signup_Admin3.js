import React from 'react';
import { StyleSheet,Text, View,Image,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import {Link, useSearchParams} from 'expo-router';

import {FIREBASE_AUTH} from "../../../firebaseConfig";

import { AUTH_HANDELLER_FOR_LOGEDIN_USER } from '../../../prototype/AuthStateChange';

import { verifyKhaltiPayemnt, setRestroInfo } from '../../../prototype/FireBaseFunctions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupAdmin2(){
AUTH_HANDELLER_FOR_LOGEDIN_USER();
const {name,adress}=useSearchParams();
const router = useRouter();

async function khaltiPayment(){
	const token="paisa_he_paisa_hoga";
	console.log(name,adress);
	try{
		let res= await verifyKhaltiPayemnt({token:token});
		let mchikne=await FIREBASE_AUTH.currentUser.getIdTokenResult(true); /*FOR REFRESHING TOKEN*/
		res= await setRestroInfo({name:name,adress:adress});
		router.replace("/Pages/Admin/Admin");
	}catch(error){
		console.log(error);
		/*chikne error handeling yeta garne*/
	}
}



	return(
		<ScrollView>
		<View style={styles.Container}>
		

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
		<Text style={styles.signup}>You are almost</Text>
		<Text style={styles.signup}>done!</Text>

		</View>

		<View style={styles.khaltiContainer}>
        <Image style={styles.khalti} source={require('../../assets/khalti.png')} />
        </View>


			<View style={styles.btn}>
			<TouchableOpacity style={styles.btnn} onPress={khaltiPayment}>
			<Text style={styles.pay}>Pay via Khalti</Text>
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
}

const styles=StyleSheet.create({
	Container:{
		flex:1,
		backgroundColor:'white',
		height:'105%',
		width:'100%',
		paddingTop:60,
		paddingLeft:30,
		paddingRight:30,
	},
	signup:{
		fontSize:32,
		fontWeight:'bold',
		margin:0,
	},
	
	content:{
	     marginTop:windowHeight/12,
         marginBottom:windowHeight/20,
         justifyContent:'center',
         alignItems:'center',
	},
	
    khaltiContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:windowHeight/2.5,
    },
    khalti:{
       height:59,
       width:161, 
    },
    btnn:{
		height:56,
		width:'100%',
		backgroundColor:'rgba(251, 138, 56, 1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:12,
		elevation:15,
        marginTop:40,
		shadowColor:'rgba(0, 0, 0,0.5)',
	},
	pay:{
		color:'rgba(0,0,0,1)',
		fontWeight:'bold',
		fontSize:18,
	},

	bottom:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		marginTop:windowHeight/8,
		paddingLeft:10,
		paddingRight:20,
		marginTop:60,

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