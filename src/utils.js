 import { setUser } from "./store/auth";
 import  configureStore from "./store/index";
 export const userHandler = (data) => {
   console.log(data);
    configureStore.dispatch(setUser(data.uid))
 }