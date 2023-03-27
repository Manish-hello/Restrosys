import React from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity} from 'react-native';

export default function Header(){


	return(
	<View style={styles.header}>
	<View style={styles.upper}>
       <Text style={styles.restro}>RestroSys</Text>
       <TouchableOpacity>
       <Image style={styles.user} source={require('../assets/user.png')} />
       </TouchableOpacity>
       </View>

       <View style={styles.menuicon}>
       <TouchableOpacity>
       <Image style={styles.Reception} source={require('../assets/Reception.png')} />
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={styles.serving} source={require('../assets/serving.png')} />
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={styles.chef} source={require('../assets/chef.png')} />
       </TouchableOpacity>
       </View>

       <View style={styles.linec}>
       <Text style={styles.line}></Text>
       </View>
       <View style={styles.searchstuff}>
       <TextInput style={styles.searching} placeholder='Search'/>
       <TouchableOpacity>
       <Image style={styles.search} source={require('../assets/search.png')} />
       </TouchableOpacity>
       </View>

    </View>
		);
}

const styles=StyleSheet.create({
header:{
	height:280,
    backgroundColor:'#fff',
    boxSizing:'borderBox',
},
upper:{
	display:'flex',
	flexDirection:'row',
	justifyContent:'space-between'
},
  restro:{
    height:40,
    width:200,
    fontSize:30,
    fontWeight:'bold',
    marginTop:50,
    marginLeft:30,
  },
  user:{
    height:40,
    width:40,
    marginTop:50,
    marginRight:30,
  },
  menuicon:{
    display:'flex',
    flexDirection:'row',
    top:'15%',
    justifyContent: 'space-around',

  },
  Reception:{
    height:50,
    width:50,
  },
  chef:{
    height:50,
    width:50,
  },
  serving:{
    height:50,
    width:50,
  },
  linec:{
  	top:'18%',
  	display:'flex',
  	flexDirection:'row',
  },
  line:{
  	height:1.5,
  	width:'100%',
  	backgroundColor:'#000'
  },
  searchstuff:{
    top:'20%',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
  },
  searching:{
    position:'relative',
    borderWidth:2,
    borderColor:'#000',
    width:'60%',
    padding:6,
    borderRadius:20,
    left:60,
    marginLeft:1,
    fontSize:20,
  },
  search:{
    height:40,
    width:40,
    marginRight:25,
  },
});