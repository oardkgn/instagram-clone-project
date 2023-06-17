 import { setUser } from "./store/auth";
 import  store from "./store/index";
 export const userHandler = (data) => {
   store.dispatch(setUser(data))
 }