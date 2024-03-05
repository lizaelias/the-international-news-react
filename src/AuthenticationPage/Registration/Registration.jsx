import React from 'react';
import Navbar from '../../Sheard/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Registration = () => {
    
    const handleRegister = e =>{
           e.preventDefault();
           const name = e.target.name.value;
           const photo = e.target.photo.value;
           const email = e.target.email.value;
           const password = e.target.password.value;

           console.log(name,photo,email,password)
    }

    return (
        <div>
              <div>
        <Navbar></Navbar>
                
        <div className='w-1/2 mx-auto bg-slate-50 rounded-xl p-3 mt-5'>
            
            <form onSubmit={handleRegister} class="card-body">
              <h1 className='text-3xl font-bold text-center'>Register your account</h1>
              <div class="form-control mt-4">

                   <label class="label">
                    <span class="label-text font-bold">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter your name" class="input input-bordered" required />
              </div>
     <div class="form-control">
                  <label class="label">
                  <span class="label-text font-bold">Photo URL</span>
                 </label>
                 <input type="text" name='photo' placeholder="Url" class="input input-bordered" required />
                <label class="label">
                
                 </label>
     </div>
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
                
                 </label>
     </div>
    
              <div>
                 <input
                 type="checkbox"
                  id="subscribeNews"
                  name="subscribe"
                  value="newsletter" />
                <label className='ml-2 text-xl' for="subscribeNews">Accept Term & Conditions</label>
              </div>

     <div class="form-control mt-6">
       <button class="btn btn-primary font-bold">Register</button>
     </div>
     <h3 className='font-medium text-center mt-5'>You already create a Account ? <Link className='text-red-800 font-bold' to='/login'> Login.</Link></h3> 
   </form>
        
     </div>
 </div>
        </div>
    );
};

export default Registration;