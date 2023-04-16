import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import {Link} from 'expo-router';

import {signInWithEmailAndPassword} from "firebase/auth";
import {FIREBASE_AUTH} from "../../../firebaseConfig";

import { AUTH_HANDELLER_FOR_NON_LOGEDIN_USER } from '../../../prototype/AuthStateChange';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login(){
AUTH_HANDELLER_FOR_NON_LOGEDIN_USER();
const [secureentry,issecureentry]=useState(true);
const router = useRouter();
const [signupData,setSignupData]=useState({email:"",pword:""});

function updateSingupData(name,value){
	setSignupData(prevState => ({
		...prevState,
		[name]: value
	}));

}
function login(){
	/* please calidate unser input bsdk*/
	signInWithEmailAndPassword(FIREBASE_AUTH,signupData.email,signupData.pword,(userCredential)=>{
		const user = userCredential.user;
		console.log(user);
	}).catch((error)=>{
		/* plesase handle error bsdk */
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(error.message)
	});
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
		<Text style={styles.login}>Login</Text>
		</View>
	
		  
		<View style={styles.signupWithOthers}>
		<TouchableOpacity style={styles.google}>
		<View style={styles.whiteback}>
		<Image style={styles.Google} source={require('../../assets/google.png')} />
		</View>
		<View style={styles.googletextcontainer}>
		<Text style={styles.googlesign}>Signup with Google</Text>
		</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.facebook}>
		<View style={styles.blueback}>
		<FontAwesome5 style={styles.fbk} name={'facebook-f'} size={35} color={'rgba(255,255,255,1)'} />
		</View>
		<View style={styles.facebooktextcontainer}>
		<Text style={styles.facebooksign}>Signup with Facebook</Text>
		</View>
		</TouchableOpacity>
		</View>

		<View style={styles.OR}>
			<Text style={styles.leftline}></Text>
			<Text style={styles.or}>or</Text>
			<Text style={styles.rightline}></Text>
		</View>

		<View style={styles.inputs}>
		<TextInput value={signupData.email} onChange={(e)=>{updateSingupData("email",e.target.value)}} placeholder='Phone, email of username' style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'}>

		</TextInput>

		<View style={styles.password}>
		<TextInput placeholder='Password'
			value={signupData.pword}
			onChange={(e)=>{updateSingupData("pword",e.target.value)}}
			style={styles.passinput}
			secureTextEntry={secureentry}
			placeholderTextColor={'rgba(0,0,0,0.5)'}
			autoCorrect={false}>
		</TextInput>
		<TouchableOpacity style={styles.eye} onPress={()=>{
			issecureentry(!secureentry);
		}}>
		<FontAwesome5 name={secureentry===false ? 'eye':'eye'} size={25} color={'rgba(0,0,0,0.4)'}/>
		</TouchableOpacity>
		</View>
		</View>

		<View style={styles.forgot}>
		<TouchableOpacity>
		<Text style={styles.fgt}>Forgot your password?</Text>
		</TouchableOpacity>
		</View>


			<View style={styles.btn}>
			<TouchableOpacity onPress={login} style={styles.btnn}>
			<Text style={styles.Sign}>Sign In</Text>
			</TouchableOpacity>
			</View>

			<View style={styles.bottom}>
			<Text style={styles.left}>Don't have an account?</Text>
			<TouchableOpacity>
			<Link href="../Signup_First/Signup_First">
			<Text style={styles.right}>Register</Text>
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

	login:{
		fontSize:30,
		fontWeight:'bold',
		margin:0,

	},
	content:{
	     marginTop:windowHeight/32,
	},
	signupWithOthers:{
		width:'100%',
		height:85,
		display:'flex',
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center',
		marginTop:20,
	},
	google:{
		display:'flex',
		flexDirection:'row',
		width:'70%',
		height:40,
		borderRadius:5,
		backgroundColor:'rgba(56,156,249,1)',
		alignItems:'center',
		elevation:15,
		shadowColor: 'rgba(0,0,0,0.8)',
	},
	Google:{
		height:36,
		width:34,
	},
	whiteback:{
		height:38,
		width:36,
		backgroundColor:'white',
		margin:1,
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center',
	},
	googletextcontainer:{
		width:'80%',
		alignItems:'center',
	},
	googlesign:{
		color:'rgba(255,255,255,1)',
		fontWeight:400,
		fontSize:17,
	},
	facebook:{
		display:'flex',
		flexDirection:'row',
		width:'70%',
		height:40,
		borderRadius:5,
		backgroundColor:'rgba(	71	,89	,147,0.9)',
		alignItems:'center',
		elevation:15,
		shadowColor: 'rgba(0,0,0,0.8)',
		
	},
	blueback:{
		height:38,
		width:36,
		backgroundColor:'rgba(	71	,89	,147,0.9)',
		margin:1,
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center',
	},
	facebooktextcontainer:{
		width:'80%',
		alignItems:'center',
	},
	facebooksign:{
		color:'white',
		fontWeight:400,
		fontSize:17,
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
	inputs:{
		marginTop:40,
	},
	textinput:{
		height:50,
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:30,
	},
	password:{
		display:'flex',
		flexDirection:'row',
		marginTop:30,
		width:'90%',
		alignItems:'center',
	},
	passinput:{
		height:50,
		width:'100%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
	},
	eye:{
		position:'absolute',
		right:18,
	},
	forgot:{
		marginTop:20,

	},
	fgt:{
		color:'rgba(251, 138, 56, 1)',
		marginLeft:20,
		fontWeight:'bold'
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
		shadowColor:'rgba(0,0,0,0.5)',
	},
	Sign:{
		color:'rgba(0,0,0,1)',
		fontWeight:'bold',
		fontSize:18,
		letterSpacing:1.1,
		},
	bottom:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		marginTop:windowHeight/8,
		paddingLeft:10,
		paddingRight:20,
		marginTop:60,

	},
	right:{
		color:'rgba(251, 138, 56, 1)',
		fontWeight:'bold',

	},
	left:{
		fontSize:15,
	},
	
});