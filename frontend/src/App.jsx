import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/auth-pages/LoginPage'
import SignupPage from './pages/auth-pages/SignupPage'
import Main from './pages/Main'

const App = () => {
  return (
    <div className="w-full h-screen bg-[#0C1014] text-[#F5F5F5] font-[segoe]">
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />

      </Routes>
    </div>
  )
}

export default App