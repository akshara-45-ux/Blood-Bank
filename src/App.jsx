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
      <Header />

      <Routes>
        {/* common */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/user-register' element={<UserRegister />} />

        {/* admin */}
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/bloodstock-page' element={<BloodStockPage />} />
        <Route path='/request-page' element={<Requestpage />} />

        {/* user */}
        <Route path='/donateblood-page' element={<DonateBloodPage />} />
        <Route path='/myrequest-page' element={<MyRequestPage />} />
        <Route path='/requestblood-page' element={<RequestBloodPage />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />

        {/* page not found */}
        <Route path='/*' element={<Pnf />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
