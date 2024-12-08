import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios
            .get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                }
            })
            .catch((error) => {
                console.error('Error during logout:', error);
                // Handle error, e.g., navigate to login or show an error message
                navigate('/captain-login');
            });
    }, [navigate]);

    return <div>Logging out...</div>;
};

export default CaptainLogout;
