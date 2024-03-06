import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userImg from '../../../public/assets/user.png'
import { AuthContext } from "../../Providers/AuthProvide";

const Navbar = () => {


  const { user,logOut} =useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(result =>{
      console.log(result)
    })
    .catch(error =>{
      console.error(error);
    })
  }

  const navbar = <> 
                     <li className="text-xl font-medium"><Link to='/'>Home</Link></li>
                    <li className="text-xl font-medium"><Link to='/about'>Abou</Link></li>
                    <li className="text-xl font-medium"><Link to='/career'>Career</Link></li>
                    <li className="text-xl font-medium"><Link to='/login'>Login</Link></li>

                </>
   
  
 
  
  return (
    <div>
      <div className="navbar mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {
              navbar
             }
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar}
          </ul>
        </div>
        
        <div className="navbar-end">
        <img className="w-12" src={userImg} alt="" />
          {
            user ? <button onClick={handleLogOut} className="btn bg-[#403F3F] text-white px-10 py-3 font-bold ml-2">Sign Out</button>:<button className="btn bg-[#403F3F] text-white px-10 py-3 font-bold ml-2">Login</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
