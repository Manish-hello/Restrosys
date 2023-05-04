import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import {Link} from 'expo-router';


import {createUserWithEmailAndPassword} from "firebase/auth";


import {FIREBASE_AUTH} from "../../../firebaseConfig";


import { AUTH_HANDELLER_FOR_NON_LOGEDIN_USER } from '../../../prototype/AuthStateChange';
import { registerAdmin } from '../../../prototype/FireBaseFunctions';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupAdmin(){
AUTH_HANDELLER_FOR_NON_LOGEDIN_USER(async (user)=>{
	console.log("user!")
	if(user){
		try{
			let res=await registerAdmin();
			return false;
		}catch(error){
			const code = error.code;
			const message = error.message;
			const details = error.details;
			console.log(error);
			/*Handle error here chikne muji*/
			return true;
		
		}
	}
});

const router = useRouter();
const [secureentry,issecureentry]=useState(true);
const [confsecureentry,isconfsecureentry]=useState(true);
const [signupData,setSignupData]=useState({name:"",email:"",pword:"",repword:""});
function updateSingupData(name,value){
	setSignupData(prevState => ({
		...prevState,
		[name]: value
	}));

};


function createUser(){

	console.log(signupData);
	/* please write data validiation code here gandu muji*/
	createUserWithEmailAndPassword(FIREBASE_AUTH, signupData.email,signupData.pword).then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		console.log(user);
		// ...
	  })
	  .catch((error) => {
		/* plz handel error code here bsdk i.e erroe while creating a user with */
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	  });;

};


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
		<Text style={styles.signup}>Sign Up</Text>
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
		

		<TextInput  placeholder='Your Full Name' value={signupData.name} onChange={(e)=>{updateSingupData("name",e.target.value)}} style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'} >

		</TextInput>

		<TextInput  placeholder='Email' value={signupData.email} onChange={(e)=>{updateSingupData("email",e.target.value)}} style={styles.numberinput} placeholderTextColor={'rgba(0,0,0,0.5)'} >

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

		<View style={styles.confpassword}>
		<TextInput placeholder='Confirm Password'
			value={signupData.repword}
			onChange={(e)=>{updateSingupData("repword",e.target.value)}}
			style={styles.passinput}
			secureTextEntry={confsecureentry}
			placeholderTextColor={'rgba(0,0,0,0.5)'}
			autoCorrect={false}>
		</TextInput>
		<TouchableOpacity style={styles.eye} onPress={()=>{
			isconfsecureentry(!confsecureentry);
		}}>
		<FontAwesome5 name={confsecureentry===false ? 'eye':'eye'} size={25} color={'rgba(0,0,0,0.4)'}/>
		</TouchableOpacity>
		</View>

			<View style={styles.btn}>
			<TouchableOpacity style={styles.btnn} onPress={createUser}>
			<Text style={styles.next}>Next</Text>
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
		height:'100%',
		width:'100%',
		paddingTop:60,
		paddingLeft:30,
		paddingRight:30,
	},
	signupWithOthers:{
		width:'100%',
		height:'11.7%',
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
	signup:{
		fontSize:30,
		fontWeight:'bold',
		margin:0,
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
	content:{
	     marginTop:windowHeight/32,
	},
	textinput:{
		height:'8%',
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:20,
		fontSize:16,

	},
	numberinput:{
		height:'8%',
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:20,
		fontSize:16,

	},
	password:{
		display:'flex',
		flexDirection:'row',
		marginTop:20,
		width:'90%',
		alignItems:'center',
	},
	confpassword:{
		display:'flex',
		flexDirection:'row',
		marginTop:20,
		width:'90%',
		alignItems:'center',
	},
	passinput:{
		height:56,
		width:'100%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		fontSize:16,
	},
	eye:{
		position:'absolute',
		right:18,
	},
	drop:{
		marginTop:60,
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