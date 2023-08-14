import { LOGIN_FAILTURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
import axios from "axios"




export const LoginData=(userdata)=>(dispatch)=>{
dispatch({type:LOGIN_REQUEST})
   axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>{
        // console.log(res.data.token)
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
   }).catch((err)=>{
    dispatch({type:LOGIN_FAILTURE})
   })
}