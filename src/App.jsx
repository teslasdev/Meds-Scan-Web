import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navlink from './components/Navlink';
import Welcomepage from './components/Welcomepage';
import LogOption from './components/LogOption';
import SignInManufactur from './components/SignInManufactur';
import SigninDistributor from './components/SigninDistributor';
import SigninStore from './components/SigninStore';
import SignOption from './components/SignOption';
import LogDistributor from './components/LogDistributor';
import LogStore from './components/LogStore';
import LogManufactur from './components/LogManufactur';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user profile if token exists
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setIsAuthenticated(true);
        setUserProfile(data);
      } else {
        console.error('Failed to fetch user profile:', data.message);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <>
      <Router>
        <Navlink isAuthenticated={isAuthenticated} userProfile={userProfile} />
        <Routes>
          <Route path='/' element={<Welcomepage />} />
          <Route path='/option' element={<LogOption />} />
          <Route path='option/signinManufactur' element={<SignInManufactur />} />
          <Route path='option/signinDistributor' element={<SigninDistributor />} />
          <Route path='option/signinStore' element={<SigninStore />} />
          <Route path='/signup' element={<SignOption />} />
          <Route path='signup/logManufactur' element={<LogManufactur />} />
          <Route path='signup/LogDistributor' element={<LogDistributor />} />
          <Route path='signup/LogStore' element={<LogStore />} />
          <Route path='/dashboard' element={<ProtectedRoute element={Dashboard} />} /> {/* Protect the Dashboard route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;