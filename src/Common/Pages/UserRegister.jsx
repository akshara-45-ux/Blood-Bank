import React, { useEffect, useState } from 'react'
import { FaWpforms } from "react-icons/fa";
import { Link, useNavigate} from 'react-router-dom';
import { emailCheckAPI, registerAPI } from '../../Services/allApi';


function UserRegister() {
 
  const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
    
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
   
}, [username, email, password]);

    

    const navigate = useNavigate();

    const handleRegister = async () => {
        // Validation
        if (!username || !email || !password) {
            alert("Please fill all fields!");
            return;
        }

        try {
            // Check if email exists
            const checkRes = await emailCheckAPI(email);
            if (checkRes.data.length > 0) {
                alert("Email already registered!");
            } else {
                
                const newUser = { username, email, password};
                
                
                const result = await registerAPI(newUser);
                if (result.status === 201) {
                    alert("Registration Successful!");
                    navigate('/user-login');
                }
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        }
    }


  return (
    <>
    <section style={{ 
            backgroundImage: `url("https://t3.ftcdn.net/jpg/07/66/96/68/360_F_766966878_rUCREVWpxYfASPg9IeUYatsOyZhsRUDg.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '550px',
            width: "100%",
            
          }}>
            <div className='row p-5  justify-content-center '>
              <div className='col-6'>
        
              </div>
        
              <div className='col-6'>
                
                <div>
                
                <div className=' border-rounded  shadow p-5 bg-white'>
                  <h1 className='text-center text-danger fs-1'><FaWpforms /></h1>
                         <div className='text-center text-danger mb-3 mt-2 '><h4>User Registeration</h4></div>
                         <div className='d-flex flex-column align-items-center'> 
                            <input onChange={(e) => setUsername(e.target.value)} className='form-control mb-3' type="text" placeholder='Enter your username' />
                            <input onChange={(e) => setEmail(e.target.value)} className='form-control mb-3' type="text" placeholder='Enter your Email'/>
                            <input onChange={(e) => setPassword(e.target.value)} className='form-control mb-3' type="password" placeholder='Enter your password'/>
                            
                            <button onClick={handleRegister} type="button" className="btn btn-danger w-100 mb-1">Sign Up</button> 
                           <span className='small mb-4'>
                                        Already have an account ? <Link to={'/user-login'}>Log in</Link>
                                    </span>
                         </div>
                        
        
                </div>
        
        
              </div>
        
            </div>
            </div>
        
        
          </section>
    </>
  )
}

export default UserRegister