
import React from 'react';

import licensed from '../../../public/assets/licensed.jpg'
import { Link } from 'react-router-dom';

const EorrorPages = () => {
    return (
        <div className='relative'>
             <img src={licensed} alt="" />
               <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <Link to='/'><button  className='btn  btn-active btn-secondary text-2xl'>Back To Home..</button></Link>
               </div>
        </div>
    );
};

export default EorrorPages;