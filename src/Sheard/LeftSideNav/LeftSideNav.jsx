import { CiCalendarDate } from "react-icons/ci";

import React, { useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom';

import editorsInsight1 from '../../../public/assets/editorsInsight1.png'
import editorsInsight2 from '../../../public/assets/editorsInsight2.png'
import editorsInsight3 from '../../../public/assets/1.png'


const LeftSideNav = () => {
     const [categorys, setCategorys] =useState([])

     useEffect(()=>{
            fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data))

     },[])

    return (
        <div className='space-y-5'>
            <h2 className='text-3xl font-bold'>All Categories</h2>
            {
                categorys.map(category=> 
                <NavLink to={`/category/${category.id}`} className='block px-5 text-2xl font-medium'
                
                 key={category.id}>
                    {category.name}
                    </NavLink>)
            }


            <div className="p-2 mb-5">
                 <img  src={editorsInsight1}alt="" />
                 <h1 className='text-2xl font-bold mt-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                 <div className="flex items-center gap-x-5 mt-5">
                     <h2 className='text-xl font-bold'>Sports</h2>
                     <h3 className='text-xl font-bold text-slate-300 flex items-center gap-x-2'> <span><CiCalendarDate></CiCalendarDate></span> Jan 4, 2022</h3>
                 </div>
            </div>
            <div className="p-2 mb-5">
                 <img  src={editorsInsight2}alt="" />
                 <h1 className='text-2xl font-bold mt-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                 <div className="flex items-center gap-x-5 mt-5">
                     <h2 className='text-xl font-bold'>Sports</h2>
                     <h3 className='text-xl font-bold text-slate-300 flex items-center gap-x-2'> <span><CiCalendarDate></CiCalendarDate></span> Jan 4, 2022</h3>
                 </div>
            </div>
            <div className="p-2 mb-5">
                 <img  src={editorsInsight3}alt="" />
                 <h1 className='text-2xl font-bold mt-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                 <div className="flex items-center gap-x-5 mt-5">
                     <h2 className='text-xl font-bold'>Sports</h2>
                     <h3 className='text-xl font-bold text-slate-300 flex items-center gap-x-2'> <span><CiCalendarDate></CiCalendarDate></span> Jan 4, 2022</h3>
                 </div>
            </div>
        </div>
    );
};

export default LeftSideNav;