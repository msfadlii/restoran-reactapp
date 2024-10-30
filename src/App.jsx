import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing page/landingPage';
import Login from "./components/auth/login";
import Register from "./components/auth/register";

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
        </Routes>
    </>
  )
}

export default App
