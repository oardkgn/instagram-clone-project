// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandler } from "./utils";
import { getFirestore, doc, setDoc, getDoc  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIicK-NwQPUX7HQGC5nwAMGB342oTBfpw",
  authDomain: "oaa-instagram.firebaseapp.com",
  projectId: "oaa-instagram",
  storageBucket: "oaa-instagram.appspot.com",
  messagingSenderId: "1069944352722",
  appId: "1:1069944352722:web:f5cd18025fc3b9546f620b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

onAuthStateChanged(auth, async(user) => {
  if (user) {
    const currentUser = await getDoc(doc(db,"users",user.uid))
    const data = {
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      emailVerified:user.emailVerified,
      ...currentUser.data()
    }
    userHandler(data)
  }else{
    userHandler(false)
  }
});


export const getUser = async username =>{
  const findUser = await getDoc(doc(db, "usernames", username))
  if (findUser.exists()) {
    return (await getDoc(doc(db, "users", findUser.data().uid))).data()
  }else{
    throw new Error("User not find")
  }
}


export const createUser = async ({ email, password, username, fullname }) => {
  try {

    const CheckUserName = await getDoc(doc(db, "usernames", username))
    if (CheckUserName.exists()) {
      toast.error("Selected username is currently using by another user.");
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      await updateProfile(auth.currentUser, {
        displayName: fullname,
      });
      await setDoc(doc(db, "users", response.user.uid), {
        fullname: fullname,
        username: username,
        email: email,
        password: password,
        followers: [],
        following: [],
        posts:0,
        webSite:"",
        gender:"",
        bio:""
      });
      await setDoc(doc(db, "usernames", username), {
        uid: response.user.uid,
      });
      return response;
    }

    
  } catch (err) {
    console.log(123);
    toast.error(err.code);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err);
  }
};

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    toast.error(err.code);
  }
};
