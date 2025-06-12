import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase.config';
// Shopcard.jsx में
import { toast } from 'react-toastify';


function Sign() {
      const [password, setpassword] = useState(false);

  const fromSubmit = (event) => {
    event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      


      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        toast.success('✔️ Account created successfully!');
        // ...
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error('❌ Data Already Added !');
          // ..
        });

        event.target.reset();
    // console.log(userdata)
  }

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md m-auto mt-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>
        <form  className="space-y-4" onSubmit={fromSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className='relative'>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={password ? 'text' : 'password'}
              name="password"
              id="password"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div
            onClick={() => {setpassword(!password)}}
            className='absolute top-8 right-2'
            >
              {
                password ? '🙈 Hide' : '👁️ Show'
              }
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <Link to={'/login'} className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </>
  )
}

export default Sign