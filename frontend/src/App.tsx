import { Routes, Route } from 'react-router'
import './App.css'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/loginPage'

function App() {
 

  return (
    <>
    
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>

    
    </>
  )
}

export default App
