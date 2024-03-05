import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Sheard/Navbar/Navbar';


const Login = () => {

    const handleLogin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        
    }


    return (

      
     <div>
        <Navbar></Navbar>
                
        <div className='w-1/2 mx-auto bg-slate-50 rounded-xl p-3 mt-5'>
            
            <form onSubmit={handleLogin} class="card-body">
              <h1 className='text-3xl font-bold text-center'>Login your account</h1>
              <div class="form-control">

                   <label class="label">
                    <span class="label-text font-bold">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" class="input input-bordered" required />
              </div>
     <div class="form-control">
                  <label class="label">
                  <span class="label-text font-bold">Password</span>
                 </label>
                 <input type="password" name='password' placeholder="password" class="input input-bordered" required />
                <label class="label">
                 <a href="#" class="label-text-alt link link-hover font-bold">Forgot password?</a>
                 </label>
     </div>

     <div class="form-control mt-6">
       <button class="btn btn-primary font-bold">Login</button>
     </div>
     <h3 className='font-medium text-center mt-5'>Dont’t Have An Account ?spa <Link className='text-red-800 font-bold' to='/register'> Register.</Link></h3> 
   </form>
        
     </div>
 </div>
    );
};

export default Login;