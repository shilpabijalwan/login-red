import { LOGIN_FAILTURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes'
const intialState={
    isLoading:false,
    isAuth:false,
    isError:false,
    token:""
}
export function reducer(state=intialState,{type,payload}) {
    // console.log(payload)
  switch(type){

    case LOGIN_REQUEST:{
        return{
            ...state,
            isLoading:true,
        }
    }
    case LOGIN_SUCCESS:{
        return {
        ...state,
        isLoading:false,
        isAuth:true,
        token:payload  
    }
    }
    case LOGIN_FAILTURE:{
        return{
            ...state,
            isLoading:false,
            isError:true
        }
    }
    default:{
        return {
           ...state
        }
    }
  }
}
