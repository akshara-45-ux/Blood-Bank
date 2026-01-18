import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../Services/allApi';


function UserLogin() {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // 2. Login Logic
    const handleLogin = async () => {
        if (!username || !password) {
            alert("Please fill all fields!");
            return;
        }

        try {
            const result = await loginAPI(username, password);

           
            if (result.data && result.data.length > 0) {
                const user = result.data[0];

                if (user.role === "user") {
                    alert("Login Successful!");
                   
                    sessionStorage.setItem("existingUser", JSON.stringify(user));
                    navigate('/dashboard'); 
                } else {
                    alert("This account is not a standard User.");
                }
            } else {
                alert("Invalid Username or Password!");
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        }
    };

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
              <h1 className='text-center text-danger fs-1'><FaRegUser /></h1>
                     <div className='text-center text-danger mb-3 mt-2 '><h4>User Login</h4></div>
                     <div className='d-flex flex-column align-items-center'> 
                        <input onChange={(e) => setUsername(e.target.value)} className='form-control mb-3' type="text" placeholder='Enter your username' />
                        <input onChange={(e) => setPassword(e.target.value)} className='form-control mb-3' type="password" placeholder='Enter your password'/>
                        
                        <button onClick={handleLogin} type="button" className="btn btn-danger w-100 mb-1">Log in</button> 
                        <span className='small mb-4'>Don't have an account? <Link to={'/user-register'}>Sign up</Link> </span>
                     </div>
                    
    
            </div>
    
    
          </div>
    
        </div>
        </div>
    
    
      </section>


    </>
  )
}

export default UserLogin