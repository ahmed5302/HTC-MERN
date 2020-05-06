import React,{useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import ViewEmp from './viewEmp';

export default function Addemp() {
    const[formList,setFormList] = useState({
        empid:'',
        name:'',
        age:'',
        email:'',
        address:'',
        mobile:'',
        password:'',
        allData:''
    }); 
   
     const{empid,name,age,email,address,mobile,password} = formList;
    const getValue = (e) =>{
        setFormList({ ...formList, [e.target.name] : e.target.value});
        
        
        }
        const submitForm = async (e) =>{
            e.preventDefault();
            

            const User = {
                empid,
                name,
                age,
                email,
                address,
                mobile,
                password
            }
            
            
            try{

                const config = {
                    headers : {
                        'Content-Type':'application/json'
                        // 'x-auth-token':
                    }
                }
                
                
                const body = JSON.stringify(User);
                
                
                const res = await  axios.post('http://localhost:5000/addemp',body,config);
                console.log(res.data.user);
                const empData = res.data.user;
                // Router.browserHistory.push('/register');
                setFormList({ ...formList, allData : empData});
                console.log(formList.allData);
                
            }
            catch(err){
                console.error(err.response.data)
            }
        }

        
    return (
        <div>
            <div className="empform">
            <form onSubmit={(e)=>submitForm(e)}>
            <div>
                <label>Emp ID</label>
                <input type="text" name="empid"  onChange={ (e) =>getValue(e) } value={empid} />  
                </div>
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
                <div>
                <label>Password</label>
                <input type="password" name="password"  onChange={ (e) =>getValue(e) } value={password} />  
                </div>
                <button type="submit">Add Employee</button>
            </form>
            </div>
            <div>
                <ViewEmp empdata={formList.allData} />
            </div>
        </div>
    )
}
