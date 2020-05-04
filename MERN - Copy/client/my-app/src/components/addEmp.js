import React,{useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Link} from 'react-router-dom';

export default function Addemp() {
    const[formList,setFormList] = useState({
        name:'',
        age:'',
        email:'',
        address:'',
        mobile:''
    }); 
     const{name,age,email,address,mobile} = formList;
    const getValue = (e) =>{
        setFormList({ ...formList, [e.target.name] : e.target.value});
        
        
        }
        const submitForm = async (e) =>{
            e.preventDefault();
            

            const User = {
                name,
                age,
                email,
                address,
                mobile
            }
            
            
            try{

                const config = {
                    headers : {
                        'Content-Type':'application/json'
                        // 'x-auth-token':
                    }
                }
                
                
                const body = JSON.stringify(User);
                const res = await  axios.post('http://localhost:5000/emp',body,config);
                console.log(res.data);
                // Router.browserHistory.push('/register');
                
            }
            catch(err){
                console.error(err.response.data)
            }
        }

        
    return (
        <div>
            <form onSubmit={(e)=>submitForm(e)}>
                <div>
                <label>Name</label>
                <input type="text" name="name"  onChange={ (e) =>getValue(e) } value={name} />  
                </div>
                <div>
                <label>Age:</label>
                <input type="number" name="age"  onChange={ (e) =>getValue(e) } value={age} />  
                </div>
                <div>
                <label>Email:</label>
                <input type="email" name="email"  onChange={ (e) =>getValue(e) } value={email}  />  
                </div>

                <div>
                <label>Address:</label>
                <textarea type="textbox" name="address"  onChange={ (e) =>getValue(e) } value={address} ></textarea>  
                </div>
                <div>
                <label>Mobile:</label>
                <input type="number" name="mobile"  onChange={ (e) =>getValue(e) } value={mobile}  />  
                </div>
                <button type="submit">Add Employee</button>
                
                
            </form>
        </div>
    )
}
