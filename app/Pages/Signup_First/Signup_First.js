import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDown from './Components/dropdown';
import {Dimensions} from 'react-native';
import { useRouter,Link } from "expo-router";
import SignupAdmin from '../Signup_Admin/Signup_Admin';

import { AUTH_HANDELLER_FOR_NON_LOGEDIN_USER } from '../../../prototype/AuthStateChange';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function SignupFirst(){
AUTH_HANDELLER_FOR_NON_LOGEDIN_USER();
	const router = useRouter();
	const [select,setSelect]=useState('../Signup_Admin/Signup_Admin');

	return(
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
		

		
		

		<View style={styles.drop}>
		<DropDown style={styles.dropp} setUser={setSelect}/>
		</View>

		{/*Fixed dynamic routing to admin and employee page*/}
		<View style={styles.btn}>
		<TouchableOpacity style={styles.btnn}>
		<Link href={select}>
		<Text style={styles.next}>Next</Text>
		</Link>
		</TouchableOpacity>
		</View>

		<View style={styles.bottom}>

		<Text style={styles.left}>Already have an account?</Text>
		<TouchableOpacity>
		<Link href="../Login/Login">
		<Text style={styles.right}>Sign in</Text>
		</Link>
		</TouchableOpacity>

		</View>


		</View>
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
	
	signup:{
		fontSize:30,
		fontWeight:'bold',
		margin:0,
	},
	
	content:{
		marginTop:windowHeight/32,
	},
	drop:{
		marginTop:windowHeight/4,
		marginBottom:windowHeight/7,
	},
	btn:{
		marginTop:windowHeight/18,
	},
	btnn:{
		height:56,
		width:'100%',
		backgroundColor:'rgba(251, 138, 56, 1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:12,
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
		marginTop:windowHeight/10,
		paddingLeft:20,
		paddingRight:20,
	},
	right:{
		color:'rgba(251, 138, 56, 1)',
		fontWeight:'bold',
	},
	left:{
		fontWeight:'bold',
	},
});