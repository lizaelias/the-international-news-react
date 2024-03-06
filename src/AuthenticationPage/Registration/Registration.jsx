import React, { useContext } from 'react';
import Navbar from '../../Sheard/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvide';

const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password);

        // createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className='w-1/2 mx-auto bg-slate-50 rounded-xl p-3 mt-5'>
                <form onSubmit={handleRegister} className='card-body'>
                    <h1 className='text-3xl font-bold text-center'>Register your account</h1>
                    <div className='form-control mt-4'>
                        <label className='label'>
                            <span className='label-text font-bold'>Name</span>
                        </label>
                        <input type='text' name='name' placeholder='Enter your name' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text font-bold'>Photo URL</span>
                        </label>
                        <input type='text' name='photo' placeholder='Url' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text font-bold'>Email</span>
                        </label>
                        <input type='email' name='email' placeholder='email' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text font-bold'>Password</span>
                        </label>
                        <input type='password' name='password' placeholder='password' className='input input-bordered' required />
                    </div>
                    <div>
                        <input type='checkbox' id='subscribeNews' name='subscribe' value='newsletter' />
                        <label className='ml-2 text-xl' htmlFor='subscribeNews'>
                            Accept Term & Conditions
                        </label>
                    </div>
                    <div className='form-control mt-6'>
                        <button className='btn btn-primary font-bold'>Register</button>
                    </div>
                    <h3 className='font-medium text-center mt-5'>
                        You already create an account? <Link className='text-red-800 font-bold' to='/login'> Login.</Link>
                    </h3>
                </form>
            </div>
        </div>
    );
};

export default Registration;
