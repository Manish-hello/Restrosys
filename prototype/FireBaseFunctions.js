import { httpsCallable } from "firebase/functions";
import { FIREBASE_FUNCTION } from "../firebaseConfig";

export const registerAdmin=httpsCallable(FIREBASE_FUNCTION, 'registerAdmin');
export const registerClient=httpsCallable(FIREBASE_FUNCTION,"registerClient");
export const verifyKhaltiPayemnt=httpsCallable(FIREBASE_FUNCTION,"verifyKhaltiPayment");
export const setRestroInfo=httpsCallable(FIREBASE_FUNCTION,"setResturentInfo");