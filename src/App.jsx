import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Layout'
import { AboutPage, ContactPage, Home, LoginPage } from './pages'
import RegisterPage from './pages/register/RegisterPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="/contact" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
