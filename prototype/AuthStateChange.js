import { useEffect } from "react";
import { useRouter, useFocusEffect, usePathname } from "expo-router"

import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig";

export function AUTH_HANDELLER_FOR_NON_LOGEDIN_USER(callback){
    const router = useRouter();
    const CURRENT_PAGE=usePathname();
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(FIREBASE_AUTH,async (user)=>{
            console.log(user)
            if(user){
                let reject=false;
                if(callback)reject=await callback(user);
                if(reject)return;
                let token=await user.getIdTokenResult(true);
                if(token.claims.isAdmin ){
                    let paymentDate=token.claims.paymentData;
                    let currentData=Date();
                    if(!paymentDate)router.replace("/Pages/Signup_Admin/Signup_Admin2")/*goto first time payment page*/
                    else if(paymentDate<currentData)router.replace("/Pages/Admin/Admin"); /*goto payment page*/
                    else router.replace("/Pages/Admin/Admin"); /*goto Admni working page*/
                    return;
                    
                }else{
                    let paymentDate=token.claims.paymentData;
                    let currentData=Date();
                    if(!paymentDate || paymentDate<currentData)router.replace("/Pages/Admin/Admin");/*goto waitg for payment to happend page*/
                    else router.replace("/Pages/Admin/Admin"); /*goto client working page */
                    return;
                }

                /*route to the specefied page depeiding on who user has loged in*/
                router.replace("/Pages/Admin/Admin")

                
            };
        })
        return unsubscribe;
    },[])
}

export function AUTH_HANDELLER_FOR_LOGEDIN_USER(callback){
    const router = useRouter();
    const CURRENT_PAGE=usePathname();
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(FIREBASE_AUTH,async (user)=>{
            console.log(user)
            if(!user){
                let reject=false;
                if(callback)reject=await callback(user);
                if(reject)return;
                /*route to the specefied page depeiding on who user has loged in*/

                router.replace("/");

                
            };
            if(user){
                let reject=false;
                if(callback)reject=await callback(user);
                if(reject)return;
                let token=await user.getIdTokenResult(true);
                /* if not admin not paymnet goto payment page */
                /* if not admin not payment goto waitng page*/
                if(token.claims.isAdmin){
                    let paymentDate=token.claims.paymentDate;
                    if(paymentDate)paymentDate=new Date(paymentDate[0],paymentDate[1],paymentDate[2]);
                    console.log(paymentDate)
                    const currentDate=new Date();
                    console.log(paymentDate)
                    if(!paymentDate && CURRENT_PAGE!="/Pages/Signup_Admin/Signup_Admin2"){
                        router.replace("/Pages/Signup_Admin/Signup_Admin2");/*goto first time payment page*/
                        return;
                    }
                    else if(currentDate<paymentDate && CURRENT_PAGE!="/Pages/Admin/Admin"){
                        router.replace("/Pages/Admin/Admin"); /*goto payment page*/
                        return;
                    }

                }else{
                    let paymentDate=token.claims.paymentData;
                    let currentData=Date();

                    if((!paymentDate || paymentDate<currentData) && CURRENT_PAGE!="/Pages/Admin/Admin")
                        router.replace("/Pages/Admin/Admin");/*goto waitg for payment to happend page*/
                }


            }
        })
        return unsubscribe;
    },[])
}