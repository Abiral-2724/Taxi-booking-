import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CapatainContext';
import axios from 'axios';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const [userData, setUserData] = useState({});
 const navigate = useNavigate() ; 
  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
        fullname: {
            firstname: firstName,
            lastname: lastName
          },
          email: email,
          password: password,
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType
          }
    
    };
    console.log(captainData);



const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register` ,captainData)

 if(response.status === 201){
    const data  = response.data 
    setCaptain(data.captain) ;
    localStorage.setItem('token' ,data.token) ;
    navigate('/captain-home')
 }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className='p-5 h-screen flex flex-col justify-between'>
      <div>
        <img
          className='w-20 mb-2'
          src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'
          alt='Uber Logo'
        />
        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>Enter your name</h3>
          <div className='flex gap-2 mb-3'>
            <input
              className='bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type='text'
              placeholder='First name'
            />

            <input
              className='bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type='text'
              placeholder='Last name'
            />
          </div>

          <h3 className='text-base font-medium mb-2'>Enter your email</h3>

          <input
            className='bg-[#eeeeee] mb-3 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-base font-medium mb-2'>Enter your Password</h3>

          <input
            className='bg-[#eeeeee] mb-3 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type='password'
            placeholder='Enter Password'
          />
          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-1.5 border text-lg placeholder:text-base'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            >
              <option value='' disabled>
                vehicle color
              </option>
              <option value='Black'>Black</option>
              <option value='White'>White</option>
              <option value='Blue'>Blue</option>
              <option value='Red'>Red</option>
              <option value='Silver'>Silver</option>
            </select>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type='text'
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-1.5 border text-lg placeholder:text-base'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            >
              <option value='' disabled>
                 Capacity
              </option>
              <option value='4'>4</option>
              <option value='6'>6</option>
              <option value='8'>8</option>
            </select>
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-1.5 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value='' disabled>
                vehicle type
              </option>
              <option value='car'>Car</option>
              <option value='auto'>Auto</option>
              <option value='moto'>Moto</option>
            </select>
          </div>

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
          >
            Sign up
          </button>
        </form>

        <p className='text-center'>
          Already a captain?{' '}
          <Link to='/captain-login' className='text-blue-600 cursor-pointer'>
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className='text-[10px] mt-5 leading-tight'>
          This site is protected by reCAPTCHA and the{' '}
          <span className='underline'>Google Privacy Policy</span> and{' '}
          <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
