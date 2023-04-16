import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
 import {getAuth,onAuthStateChanged} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
import {getFunctions} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
/*const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};*/
const inProduction=false;

const firebaseConfig = {
  apiKey: "AIzaSyCTctTY2G1x4M3w-hHbuQ_yMadsxV4G5W0",
  authDomain: "restrosys.firebaseapp.com",
  projectId: "restrosys",
  storageBucket: "restrosys.appspot.com",
  messagingSenderId: "576608722164",
  appId: "1:576608722164:web:8fe6073af7a3e12b07d2a1",
  measurementId: "G-THTL2K27YP"
};
/*
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(app);
*/

/*Testing code*/


const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth();
export const FIREBASE_FUNCTION=getFunctions();


import {connectAuthEmulator } from "firebase/auth";
import { connectFunctionsEmulator } from 'firebase/functions';
if(!inProduction){
  connectAuthEmulator(FIREBASE_AUTH, "http://localhost:9099");
  connectFunctionsEmulator(FIREBASE_FUNCTION,"localhost",5001);
}


/*
onAuthStateChanged(FIREBASE_AUTH,(user)=>{
  const router = useRouter();


  if(user)  return <Redirect href="/Pages/Admin/Admin" />;
  if(!user){console.log("hello not login")} 
  return <Redirect href="/Pages/Admin/Admin" />;
  
})
*/
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
