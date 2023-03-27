import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,FlatList,ScrollView} from 'react-native';
import SignupFirst from './Pages/Signup_First/Signup_First';
import SignupEmployee from './Pages/Signup_Employee/Signup_Employee';
import SignupAdmin from './Pages/Signup_Admin/Signup_Admin';
import FirstPage from './Pages/First_Page/First_Page';
import Login from './Pages/Login/Login';
import MainPage from './Pages/Main_Page/Main_Page';



export default function App() {
  return (
    <FirstPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'grey',
    height:'100%',
    width:'100%',
  },
});
