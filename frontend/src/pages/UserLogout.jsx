import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.removeItem('token'); // Clear token from localStorage
        navigate('/login'); // Navigate to login page
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logout();
  }, [token, navigate]); // Dependencies ensure useEffect re-runs if token changes

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default UserLogout;
