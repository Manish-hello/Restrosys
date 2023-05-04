import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import {Link,useSearchParams} from 'expo-router';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { FIREBASE_AUTH } from '../../../firebaseConfig';

import {registerClient} from "../../../prototype/FireBaseFunctions"
import { AUTH_HANDELLER_FOR_NON_LOGEDIN_USER } from '../../../prototype/AuthStateChange';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function SignupEmployee(){
	const {dbId}=useSearchParams();
	AUTH_HANDELLER_FOR_NON_LOGEDIN_USER(async (user)=>{
		//got next to -> href="../SomethingCompletedPages/Signup_Employee_Completed_Page";
		console.log("user!")
		if(user){
			try{
				let res=await registerClient({dbId:dbId}); //change to gegister cliet and proved the dbID
				// let res=await registerClient(dbID); // server ne function code garna xa
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



const [inputData,setInputData]= useState({name:"",email:"",pword:"",repword:""});

function updateInputData(name,value){
	setInputData(prevState => ({
		...prevState,
		[name]: value
	}));
}
async function gotoNextPage(){
	console.log(inputData);
	/* please write data validiation code here gandu muji*/
	createUserWithEmailAndPassword(FIREBASE_AUTH, inputData.email,inputData.pword).then((userCredential) => {
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

		
		

			<TextInput placeholder='Your Full Name' style={styles.textinput} 
			value={inputData.name}
			onChange={(e)=>updateInputData("name",e.target.value)}
			placeholderTextColor={'rgba(0,0,0,0.5)'} >

			</TextInput>

			<TextInput placeholder='Phone Number' style={styles.numberinput} 
			value={inputData.email}
			onChange={(e)=>updateInputData("email",e.target.value)}
			placeholderTextColor={'rgba(0,0,0,0.5)'} keyboardType='numeric'>

			</TextInput>


			<View style={styles.password}>
			<TextInput placeholder='Password'
			style={styles.passinput}
			value={inputData.pword}
			onChange={(e)=>updateInputData("pword",e.target.value)}
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
			style={styles.passinput}
			value={inputData.repword}
			onChange={(e)=>updateInputData("repword",e.target.value)}
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
			<TouchableOpacity style={styles.btnn}>
			<Text style={styles.next}  onPress={gotoNextPage}>Next</Text>
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
	signup:{
		fontSize:30,
		fontWeight:'bold',
	},
	content:{
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
		height:56,
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:10,
		fontSize:16,
	},
	numberinput:{
		height:56,
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:10,
		fontSize:16,

	},
	password:{
		display:'flex',
		flexDirection:'row',
		marginTop:10,
		width:'90%',
		alignItems:'center',
	},
	confpassword:{
		display:'flex',
		flexDirection:'row',
		marginTop:10,
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
	btnn:{
		height:56,
		width:'100%',
		backgroundColor:'rgba(251, 138, 56, 1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:12,
		marginTop:windowHeight/6,
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
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		marginTop:windowHeight/8,
		paddingLeft:20,
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
		fontWeight:'bold',
	},
	
});