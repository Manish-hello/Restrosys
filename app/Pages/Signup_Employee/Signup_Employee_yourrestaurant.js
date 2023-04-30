import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import { useRouter } from "expo-router";
import {Link} from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupEmployeeYourrestaurant(){
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
		        <Text style={styles.Your}>Your restaurant</Text>
		        </View>

                <View style={styles.filledinfo}>
                    <View style={styles.info}>
                    <Text style={styles.txt}>Restaurant id halne </Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={styles.txt}>yeha restaurant ko name halne</Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={styles.txt}>address halne</Text>
                    </View>
                </View>

                <View style={styles.btn}>
    
                    <TouchableOpacity style={styles.btnn}>
                    <Link style={styles.linkstyle} href="./Signup_Employee">
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
Your:{
    fontSize:30,
    fontWeight:'bold',
    margin:0,
},
filledinfo:{
    width:'100%',
},
info:{
    height:56,
    width:'90%',
    borderWidth:1,
    marginTop:20,
    borderRadius:7,
    borderColor:'rgba(0,0,0,0.2)',
    justifyContent:'center',
    padding:10,
},
txt:{
    color:'rgba(0,0,0,0.45)',
    fontWeight:500,
    fontSize:16,
},

btnn:{
    height:56,
    width:'100%',
    backgroundColor:'rgba(251, 138, 56, 1)',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
    marginTop:windowHeight/4,
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
