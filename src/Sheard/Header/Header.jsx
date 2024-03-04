
import logo from '../../../public/assets/logo.png'
import moment from 'moment';

import React from 'react';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
             <img className='mx-auto' src={logo} alt="" />
             <h3 className='text-xl'>Journalism Without Fear or Favour</h3>
             <h3 className='text-xl'> {moment().format("dddd, MMMM D, YYYY")}</h3>
        </div>
    );
};

export default Header;