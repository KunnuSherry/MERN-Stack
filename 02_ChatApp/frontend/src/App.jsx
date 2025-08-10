import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import { Route, Routes } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore.js'
import { Loader } from 'lucide-react'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore((state) => state);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("Auth User:", authUser);

  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin w-10 h-10" />
      </div>
    );
  }


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to='/login'/>}></Route>
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to='/'/>}></Route>
        <Route path="/login" element={ !authUser ? <LoginPage /> : <Navigate to='/'/>}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/profile" element={authUser ?<ProfilePage /> : <Navigate to='/login'/>}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
