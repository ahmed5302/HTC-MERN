import {LOGIN_SUCCESS,LOGIN_FAILURE} from '../actions/types';

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated : null,
    loading : true,
    user :null
}

export default function( state = initialState,action){

    const { type,payload} = action;

    switch(type){
        case LOGIN_SUCCESS:
        localStorage.setItem('token',payload.token);
        return{
            isAuthenticated:true,
            ...state,
            ...payload,
            loading :false
        }
        case LOGIN_FAILURE:
        localStorage.removeItem('token');
        return{
            isAuthenticated:false,
            ...state,
            loading :false,
            token:null
        }
        default:
        return state;

    }
}