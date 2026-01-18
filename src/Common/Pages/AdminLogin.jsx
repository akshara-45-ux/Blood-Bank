import React, { useState } from 'react'
import { RiAdminLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { adminLoginAPI } from '../../Services/allApi';

function AdminLogin() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleAdminLogin = async () => {
    if (!username || !password) {
      alert("Please fill all fields")
      return
    }

    const result = await adminLoginAPI(username, password)

    if (result.data.length > 0) {
      sessionStorage.setItem(
        "admin",
        JSON.stringify(result.data[0])
      )
      alert("Admin Login Successful")
      navigate('/admin-dashboard')
    } else {
      alert("Invalid Admin Credentials")
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
                <RiAdminLine />
              </h1>

              <div className='text-center text-danger mb-3 mt-2'>
                <h4>Admin Login</h4>
              </div>

              <div className='d-flex flex-column align-items-center'>
                <input
                  className='form-control mb-3'
                  type="text"
                  placeholder='Enter your username'
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  className='form-control mb-3'
                  type="password"
                  placeholder='Enter your password'
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="btn btn-danger w-100 mb-1"
                  onClick={handleAdminLogin}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminLogin
