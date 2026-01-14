
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Common/Pages/LandingPage'
import AdminLogin from './Common/Pages/AdminLogin'
import UserRegister from './Common/Pages/UserRegister'
import UserLogin from './Common/Pages/UserLogin'
import Pnf from './Common/Pages/Pnf'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import BloodStockPage from './Admin/Pages/BloodStockPage'
import Requestpage from './Admin/Pages/Requestpage'
import DonateBloodPage from './User/Pages/DonateBloodPage'
import MyRequestPage from './User/Pages/MyRequestPage'
import RequestBloodPage from './User/Pages/RequestBloodPage'
import UserDashboard from './User/Pages/UserDashboard'
import Header from './Common/Components/Header'
import Footer from './Common/Components/Footer'

function App() {


  return (
    <>
      <Routes>
        <Header/>
        {/* common */}
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/user-login' element={<UserLogin />}></Route>
        <Route path='/admin-login' element={<AdminLogin />}></Route>
        <Route path='/user-register' element={<UserRegister />}></Route>
        <Route path='/*' element={<Pnf />}></Route>



        {/* admin */}
        <Route path='/admin-dashboard' element={<AdminDashboard />}></Route>
        <Route path='/bloodstock-page' element={<BloodStockPage />}></Route>
        <Route path='/request-page' element={<Requestpage />}></Route>



        {/* user */}
        <Route path='/donateblood-page' element={<DonateBloodPage />}></Route>

        <Route path='/myrequest-page' element={<MyRequestPage />}></Route>

        <Route path='/requestblood-page' element={<RequestBloodPage />}></Route>

        <Route path='/user-dashboard' element={<UserDashboard/>}></Route>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
