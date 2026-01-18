import React, { useState } from 'react'
import { FaWpforms } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { emailCheckAPI, registerAPI } from '../../Services/allApi';

function UserRegister() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async () => {
    if (!username || !email || !password) {
      alert("Please fill all fields")
      return
    }

    const emailCheck = await emailCheckAPI(email)
    if (emailCheck.data.length > 0) {
      alert("Email already registered")
      return
    }

    const newUser = { username, email, password }
    const result = await registerAPI(newUser)

    if (result.status === 201) {
      alert("Registration Successful")
      navigate('/user-login')
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
        <div className='row p-5 justify-content-center'>
          <div className='col-6'></div>

          <div className='col-6'>
            <div className='border-rounded shadow p-5 bg-white'>
              <h1 className='text-center text-danger fs-1'>
                <FaWpforms />
              </h1>

              <div className='text-center text-danger mb-3 mt-2'>
                <h4>User Registration</h4>
              </div>

              <div className='d-flex flex-column align-items-center'>
                <input
                  className='form-control mb-3'
                  placeholder='Enter your username'
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  className='form-control mb-3'
                  placeholder='Enter your Email'
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  className='form-control mb-3'
                  placeholder='Enter your password'
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="btn btn-danger w-100 mb-1"
                  onClick={handleRegister}
                >
                  Sign Up
                </button>

                <span className='small mb-4'>
                  Already have an account ? <Link to='/user-login'>Log in</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserRegister
