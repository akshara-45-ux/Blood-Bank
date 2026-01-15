import React from 'react'
import { FaWpforms } from "react-icons/fa";
import { Link } from 'react-router-dom';

function UserRegister() {
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
                
                <div className=' border-rounded  shadow p-5'>
                  <h1 className='text-center text-danger fs-1'><FaWpforms /></h1>
                         <div className='text-center text-danger mb-3 mt-2 '><h4>User Registeration</h4></div>
                         <div className='d-flex flex-column align-items-center'> 
                            <input className='form-control mb-3' type="text" placeholder='Enter your username' />
                            <input className='form-control mb-3' type="text" placeholder='Enter your Email'/>
                            <input className='form-control mb-3' type="password" placeholder='Enter your password'/>
                            
                            <button type="button" className="btn btn-danger w-100 mb-1">Sign Up</button> 
                            <span className='small mb-4'>Already have an account ? <Link to={'/user-login'}><a href="">Log in</a></Link> </span>
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