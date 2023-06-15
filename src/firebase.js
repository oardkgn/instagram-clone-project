// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import toast from 'react-hot-toast';
import { userHandler } from "./utils";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIicK-NwQPUX7HQGC5nwAMGB342oTBfpw",
  authDomain: "oaa-instagram.firebaseapp.com",
  projectId: "oaa-instagram",
  storageBucket: "oaa-instagram.appspot.com",
  messagingSenderId: "1069944352722",
  appId: "1:1069944352722:web:f5cd18025fc3b9546f620b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

 onAuthStateChanged(auth,user => {
    userHandler(user || false)
})

export const logOut = async() => {
    try{
        await signOut(auth)
    } catch(err){
        toast.error(err)
    }
}

export const login = async(email,password) =>{
    try{
    const response = await signInWithEmailAndPassword(auth,email,password)
    console.log(response.user);
    }catch(error){
        toast.error(error.code)
    }
};
