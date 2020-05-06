import axios from 'axios';
import {LOGIN_SUCCESS,LOGIN_FAILURE} from './types';

 export const login = ({name,password}) => async dispatch =>{
     
    const config = {
        headers : {
            'Content-Type':'application/json'
        }
    }
    
   
    const body = JSON.stringify({name,password});
    try{
        
        const res = await  axios.post('http://localhost:5000/auth',body,config);
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });
    }
    catch(err){
        console.error(err.response.data);
        dispatch({
            type:LOGIN_FAILURE
        });

    }

 } 