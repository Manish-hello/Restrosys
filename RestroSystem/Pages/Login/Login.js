import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login(){
const [secureentry,issecureentry]=useState(true);
	return(
		<ScrollView>
		<View style={styles.Container}>
		

		<View style={styles.upper}>
		<TouchableOpacity>
		<FontAwesome5 name={'chevron-left'} size={18} color={'darkblue'}/>
		</TouchableOpacity>
		</View>
		
		


		<View style={styles.content}>
		<Text style={styles.login}>Login</Text>
		</View>
	
		<View style={styles.someText}>
		<Text style={styles.texts}>Welcome back</Text>
		<Text style={styles.texts}>to your workspace!</Text>

		</View>

		<View style={styles.inputs}>
		<TextInput placeholder='Phone, email of username' style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'}>

		</TextInput>

		<View style={styles.password}>
		<TextInput placeholder='Password'
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
			<TouchableOpacity style={styles.btnn}>
			<Text style={styles.Sign}>Sign In</Text>
			</TouchableOpacity>
			</View>

			<View style={styles.bottom}>
			<Text style={styles.left}>Don't have an account?</Text>
			<TouchableOpacity>
			<Text style={styles.right}>Register</Text>
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
	     marginTop:windowHeight/12,
	},
	someText:{
		marginTop:20,
	},
	texts:{
		fontSize:25,
		color:'rgba(0,0,0,0.5)'
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
		color:'orange',
		marginLeft:20,
		fontWeight:'bold'
	},
	btnn:{
		height:50,
		width:'100%',
		backgroundColor:'rgba(248,248,250,1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:6,
		marginTop:60,
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
		color:'rgba(255, 165, 0,1)',
		fontWeight:'bold',

	},
	left:{
		fontSize:15,
	},
	
});