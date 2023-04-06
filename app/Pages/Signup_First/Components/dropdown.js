import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const values=[
{name:'Owner',key:'1',url:"../Signup_Admin/Signup_Admin"},
{name:'Employee',key:'2',url:"../Signup_Employee/Signup_Employee"},
	];
export default function DropDown({setUser}){
	const [select,setSelect]=useState('Owener');
	const[isClicked,setisClicked]=useState(false);
	const[data,setdata]=useState(values);

	return(
		<View style={styles.Container}>

		<TouchableOpacity style={styles.dropdown} onPress={()=>{
			setisClicked(!isClicked);
		}}>
		<Text style={styles.inside}>{select}</Text>
		{isClicked?(
		<FontAwesome5 name={'chevron-up'} color={'rgba(0,0,0,0.5)'}/>):
		(<FontAwesome5 name={'chevron-down'} color={'rgba(0,0,0,0.5)'}/>
		)}
		</TouchableOpacity>



		{isClicked?(
			<View style={styles.contents}>
			<FlatList data={data} style={styles.lists} renderItem={({item,index})=>{
				return(
					<TouchableOpacity 
					style={styles.dropitems}
					onPress={()=>{
						setSelect(item.name);
						setisClicked(false);
						setUser(item.url)
					}}>
					<Text style={styles.itemname}>{item.name}</Text>
					</TouchableOpacity>
					)
			}}/>
		</View>):null}
		</View>
		);
}
const styles=StyleSheet.create({
dropdown:{
	width:'90%',
	height:56,
	borderRadius:7,
	borderColor:'rgba(0,0,0,0.2)',
	borderWidth:1.2,
	fontSize:5,
	flexDirection:'row',
	justifyContent:'space-between',
	alignItems:'center',
	paddingLeft:15,
	paddingRight:15,
},
inside:{
	color:'rgba(0,0,0,0.5)',
	fontWeight:'bold',
	fontSize:16,
},
contents:{
	height:80,
	width:'90%',
	borderColor:'(rgba(0,0,0,0.2)',
	borderRadius:10,
	marginTop:5,
},
lists:{
	marginTop:10,
},
dropitems:{
	width:'90%',
	height:40,
	borderBottomWidth:1.2,
	borderColor:'rgba(0,0,0,0.2)',
	alignSelf:'center',
	justifyContent:'center',
},
itemname:{
	color:'rgba(0,0,0,1)',
	fontWeight:'bold',
},
});