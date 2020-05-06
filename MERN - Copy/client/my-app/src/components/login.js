import React,{useState,} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from '../actions/auth';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Link,useHistory} from 'react-router-dom';

const Login = ({login})=>{
    const[formList,setFormList] = useState({
       
        name:'',
        password:''
    }); 
    let history = useHistory();
     const{name,password} = formList;
    const getValue = (e) =>{
        setFormList({ ...formList, [e.target.name] : e.target.value});
        
        
        }
        const submitForm = async (e) =>{
            e.preventDefault();
                console.log(name);
                
            login({name,password});

            // const User = {
            //     name,
            //     password
            // }
            
            // try{

            //     const config = {
            //         headers : {
            //             'Content-Type':'application/json'
            //         }
            //     }
                
                
            //     const body = JSON.stringify(User);
            //     const res = await  axios.post('http://localhost:5000/auth',body,config);
            //     console.log(res.data);
                
            //     // if(res.data){
            //     //     alert("true");
            //     //     history.push('/addemp')

            //     // }
                
            // }
            // catch(err){
            //     console.error(err.response.data)
            // }
        }

        
    return (
        <div>
            <div className="row form">
            <form onSubmit={(e)=>submitForm(e)}>
                <div>
                <label>Username:</label>
                <input type="text" name="name"  onChange={ (e) =>getValue(e) } value={name} />  
                </div>
                <div>
                <label>Password:</label>
                <input type="password" name="password"  onChange={ (e) =>getValue(e) } value={password}  />  
                </div>
                <button type="submit">Login</button>
                
            </form>
            </div>
            </div>
            
    )
};
Login.propTypes ={
    login :PropTypes.func.isRequired
}
export default connect (null,{login})(Login);
