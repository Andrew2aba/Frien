import { Routes, Route } from 'react-router'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import NavBar from './components/Navbar/NavBar'
import ProfilePage from './pages/ProfilePage'

function App() {
 

  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path='/Homepage' element={<LandingPage/>} />
      </Route>
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage/>} />
    </Routes>
  )
}

export default App
