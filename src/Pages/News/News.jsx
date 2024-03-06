import React from "react";
import Navbar from "../../Sheard/Navbar/Navbar";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import Header from "../../Sheard/Header/Header";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";

const News = () => {
  const newsData = useLoaderData();
  const { id } = useParams();

  const news = newsData.find((news) => news._id == id);
  console.log(news, id);

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      <div className="grid md:grid-cols-4">
        <div className="col-span-3 p-4">
          <h2 className="text-xl font-bold">Dragon News</h2>
          <div className="p-10 border bg-slate-50 mt-2">
            <img src={news.image_url} alt="" />
            <h1 className="text-2xl font-bold mt-4">{news.title}</h1>
            <p className="font-medium mt-2">{news.details}</p>
          </div>


            <div>
                <h2 className="text-2xl font-bold mt-4"> Editors Insight</h2>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3">
                     <div>
                        <div className="bg-gray-400 w-[267px] h-[160px] mt-4 mb-4">

                        </div>
                        <h2 className="text-2xl font-bold">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                        <p className="flex gap-x-2 items-center mt-4"><FaCalendar></FaCalendar><span className="text-zinc-500">Jan 4, 2022</span></p>
                     </div>
                     <div>
                        <div className="bg-gray-400 w-[267px] h-[160px] mt-4 mb-4">

                        </div>
                        <h2 className="text-2xl font-bold">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                        <p className="flex gap-x-2 items-center mt-4"><FaCalendar></FaCalendar><span className="text-zinc-500">Jan 4, 2022</span></p>
                     </div>
                     <div>
                        <div className="bg-gray-400 w-[267px] h-[160px] mt-4 mb-4">

                        </div>
                        <h2 className="text-2xl font-bold">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                        <p className="flex gap-x-2 items-center mt-4"><FaCalendar></FaCalendar><span className="text-zinc-500">Jan 4, 2022</span></p>
                     </div>

                 </div>
            </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
