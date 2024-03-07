import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Sheard/Navbar/Navbar';
import { AuthContext } from '../../Providers/AuthProvide';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] =useState(false);


    const navigate =useNavigate();
    const location =useLocation();
    console.log('login',location)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location ?. state?  location?.state :'/')
                
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className='w-1/2 mx-auto bg-slate-50 rounded-xl p-3 mt-5'>
                <form onSubmit={handleLogin} className='card-body'>
                    <h1 className='text-3xl font-bold text-center'>Login your account</h1>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text font-bold'>Email</span>
                        </label>
                        <input type='email' name='email' placeholder='email' className='input input-bordered' required />
                    </div>


                    <div className='relative'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text font-bold'>Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} 
                        name='password'
                         placeholder='password'
                         className='input input-bordered' required />
                        <label className='label'>
                            <a href='#' className='label-text-alt link link-hover font-bold'>Forgot password?</a>
                        </label>
                    </div>

                     <span className='absolute right-4 top-12 mt-1' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    </div>
                    <div className='form-control mt-6'>
                        <button className='btn btn-primary font-bold'>Login</button>
                    </div>
                    <h3 className='font-medium text-center mt-5'>Don't Have An Account ? <Link className='text-red-800 font-bold' to='/register'> Register.</Link></h3>

                 
                </form>


               
            </div>
        </div>
    );
};

export default Login;
