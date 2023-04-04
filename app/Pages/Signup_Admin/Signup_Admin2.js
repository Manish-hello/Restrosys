import React from 'react';
import { StyleSheet,Text, View,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import {Link} from 'expo-router';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupAdmin2(){
const router = useRouter();




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
		
		
        <View>
		<TextInput placeholder='Name of Organization' style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'} > 
		</TextInput>
        <Text style={styles.warning}>Warning</Text>
        </View>

        <TextInput placeholder='Address' style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'} >

		</TextInput>

        <TextInput placeholder='No of Employee' style={styles.numberinput} placeholderTextColor={'rgba(0,0,0,0.5)'} keyboardType='numeric' >

		</TextInput>

		


			<View style={styles.btn}>
			<TouchableOpacity style={styles.btnn}>
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
		height:'105%',
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
         marginBottom:windowHeight/20,
	},
	textinput:{
		height:56,
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:40,
		fontSize:16,

	},
    warning:{
        color:'rgba(246, 27, 27, 1)',
        fontSize:13,
        marginLeft:10,
        fontWeight:500,
        lineHeight:18,
        width:'80%',
    },
	numberinput:{
		height:56,
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:40,
		fontSize:16,

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
		elevation:15,
        marginTop:200,
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