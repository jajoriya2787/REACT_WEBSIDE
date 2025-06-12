import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from '../Firebase.config';

import { toast } from 'react-toastify';

import { Context } from '../Context/Contextmain';



function Login() {

    const [password, setpassword] = useState(false);
    const { login, setlogin } = useContext(Context);
    const navigate = useNavigate();

    const LoginUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setlogin(user.accessToken); //ab selogin khali nhi h
                toast.success('✔️ User Login Seccussefully ! ')
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error('❌ User not sign ! ');
                console.log(error);
            });
        event.target.reset();
    }

    const logiwithgooglr = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setlogin(user.accessToken);
                toast.success('Google Login With Succussefully !')
                navigate('/');
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md m-auto mt-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Welcome Back
                </h2>
                <form onSubmit={LoginUser} className="space-y-4">
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
                            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div className=' relative'>
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
                            className=" mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        />
                        <div
                            onClick={() => { setpassword(!password) }}
                            className='absolute top-8 right-4 cursor-pointer'

                        >
                            {password ? '🙈 Hide' : '👁️ Show'}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                name="remember"
                                className="form-checkbox text-blue-500"
                            />
                            <span className="ml-2 text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Log In
                    </button>
                    <button
                        type="button"
                        onClick={logiwithgooglr}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                    >
                        Log with Google
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?
                    <Link to={'/sign'} className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Login