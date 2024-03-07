import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Sheard/Navbar/Navbar';
import { AuthContext } from '../../Providers/AuthProvide';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { loginUser, sendPasswordReset } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('forget', emailRef.current.value);
            return;
        }
        setSuccess('');
        setError('');

        sendPasswordReset(email)
            .then(result => {
                setSuccess('Please check your email...');
            })
            .catch(error => {
                setError('Error: Failed to reset password');
            });
    };

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('');
        setSuccess('');

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                setSuccess('Your login was successful. Welcome to our platform!');
            })
            .catch(error => {
                console.error(error);
                setError('Error: Invalid email address or password');
            });
    };

    return (
        <div>
            <Navbar />
            <div className='w-1/2 mx-auto bg-slate-50 rounded-xl p-3 mt-5'>
                <form onSubmit={handleLogin} className='card-body'>
                    <h1 className='text-3xl font-bold text-center'>Login your account</h1>
                    <div className='form-control'>
                        <label htmlFor='email' className='label'>
                            <span className='label-text font-bold'>Email</span>
                        </label>
                        <input 
                            type='email'
                            id='email'
                            name='email' 
                            ref={emailRef}
                            placeholder='email'
                            className='input input-bordered'
                            required 
                        />
                    </div>

                    <div className='relative'>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text font-bold'>Password</span>
                            </label>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name='password'
                                placeholder='password'
                                className='input input-bordered' 
                                required 
                            />
                            <label className='label'>
                                <button 
                                    type='button'
                                    onClick={handleForgetPassword} 
                                    className='label-text-alt link link-hover font-bold'
                                >
                                    Forgot password?
                                </button>
                            </label>
                        </div>
                        <span className='absolute right-4 top-12 mt-1' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className='form-control mt-6'>
                        <button className='btn btn-primary font-bold'>Login</button>
                    </div>
                    <h3 className='font-medium text-center mt-5'>
                        Don't Have An Account? <Link className='text-red-800 font-bold uppercase underline' to='/register'>Register.</Link>
                    </h3>
                </form>
                <div className='text-center'>
                    {success && <p className='text-2xl font-bold text-green-500 uppercase'>{success}</p>}
                    {error && <p className='text-xl font-bold text-red-800 uppercase'>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
