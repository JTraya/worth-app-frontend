// SignupForm.jsx

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService'

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateMessage('');
    console.log(formData); // this line will print the form data to the console

	try {
		const user = await authService.signup(formData)
		console.log(user)
		props.setUser(user)
		navigate('/')
	} catch(err){
		console.log(err)
	}
	

  };

  const { username, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };


  return (
    <main className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
      <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
      Sign Up
      </h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6" action="#'>
        <div>
          <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Username
          </label>
          <input
            type="text"
            id="name"
            value={username}
            name="username"
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="'
          />
        </div>
        <div>
          <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="'
          />
        </div>
        <div>
          <label htmlFor="confirm" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Confirm Password
            </label>
          <input
            type="password"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="'
          />
        </div>
        <div>
          <button disabled={isFormInvalid()} className='w-full mb-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Sign Up
          </button>
          <Link to="/">
            <button className='w-full text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
            Cancel
            </button>
          </Link>
        </div>
      </form>
      </div>
      </div>
      </div>
    </main>
  );
};

export default SignupForm;
