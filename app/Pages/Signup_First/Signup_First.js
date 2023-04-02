import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDown from './Components/dropdown';
import {Dimensions} from 'react-native';
import { useRouter,Link } from "expo-router";
import SignupAdmin from '../Signup_Admin/Signup_Admin';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupFirst(){
	const router = useRouter();
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
		<DropDown style={styles.dropp}/>
		</View>

		<View style={styles.btn}>
		<TouchableOpacity style={styles.btnn}>
		<Link href="../Signup_Admin/Signup_Admin">

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
		height:50,
		width:'100%',
		backgroundColor:'rgba(251, 138, 56, 1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:6,
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
		color:'rgba(255, 219, 30, 1)',
		fontWeight:'bold',
	},
	left:{
		fontWeight:'bold',
	},
});