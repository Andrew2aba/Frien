import { Routes, Route } from 'react-router'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import NavBar from './components/Navbar/NavBar'

function App() {
 

  return (
    <>
    <NavBar
      content={
        
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/Homepage' element={<LandingPage/>} />
      </Routes>
      
      }
    />


    
    </>
  )
}

export default App
