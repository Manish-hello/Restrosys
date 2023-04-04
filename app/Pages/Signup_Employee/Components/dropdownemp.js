import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const values=[
{name:'Resturant1',key:'1'},
{name:'Resturant2',key:'2'},
{name:'Resturant3',key:'3'},
{name:'Resturant4',key:'4'},

	];
export default function DropDown(){
	const [select,setSelect]=useState('Organization Name');
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
					<ScrollView>
					<TouchableOpacity 
					style={styles.dropitems}
					onPress={()=>{
						setSelect(item.name);
						setisClicked(false);
					}}>

					<Text style={styles.itemname}>{item.name}</Text>
					
					</TouchableOpacity>
					</ScrollView>
					);
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
	fontSize:13,
},
contents:{
	borderColor:'(rgba(0,0,0,0.2)',
	borderRadius:10,
	marginTop:5,
	width:'100%',
	height:120,
	paddingLeft:20,
},
lists:{
	marginTop:10,

},
dropitems:{
	width:'90%',
	height:40,
	borderBottomWidth:1.2,
	borderColor:'rgba(0,0,0,0.2)',
	justifyContent:'center',

},
itemname:{
	color:'rgba(0,0,0,1)',
	fontWeight:'bold',
},
});