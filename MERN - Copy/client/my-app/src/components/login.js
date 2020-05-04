import React,{useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Link,useHistory} from 'react-router-dom';

export default function Login() {
    const[formList,setFormList] = useState({
        empid:'',
        name:'',
        password:''
    }); 
    let history = useHistory();
     const{empid,name,password} = formList;
    const getValue = (e) =>{
        setFormList({ ...formList, [e.target.name] : e.target.value});
        
        
        }
        const submitForm = async (e) =>{
            e.preventDefault();
            

            const User = {
                empid,
                name,
                password
            }
            
            try{

                const config = {
                    headers : {
                        'Content-Type':'application/json'
                    }
                }
                
                
                const body = JSON.stringify(User);
                const res = await  axios.post('http://localhost:5000/auth',body,config);
                console.log(res.data);
                // Router.browserHistory.push('/register');
                if(res.data){
                    alert("true");
                    history.push('/addemp')

                }
                
            }
            catch(err){
                console.error(err.response.data)
            }
        }

        
    return (
        <div>
            <form onSubmit={(e)=>submitForm(e)}>
                <div>
                <label>Emp ID:</label>
                <input type="number" name="empid"  onChange={ (e) =>getValue(e) } value={empid} />  
                </div>
                <div>
                <label>Username:</label>
                <input type="text" name="name"  onChange={ (e) =>getValue(e) } value={name} />  
                </div>
                <div>
                <label>Password:</label>
                <input type="password" name="password"  onChange={ (e) =>getValue(e) } value={password}  />  
                </div>
                <button type="submit">Login</button>
                <div>

                    <Link to="/register">Register</Link>
                </div>
                
            </form>
        </div>
    )
}
