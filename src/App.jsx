import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import './normalize.css'

import LogIn from './pages/LogIn'
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import UserMenu from "./pages/userMenu"
import CenterMenu from "./pages/centerMenu"
import InformationCenter from "./pages/informationCenter";
import InformationUser from './pages/informationUser'
import { AuthProvider } from './context/AuthContext'

function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userMenu" element={<UserMenu />} />
          <Route path="/informationCenter" element={<InformationCenter />} />
          <Route path="/centerMenu" element={<CenterMenu />} />
          <Route path="/informationUser" element={<InformationUser />} />
        </Routes>
      </AuthProvider>

    </BrowserRouter>
  )
}


export default App
