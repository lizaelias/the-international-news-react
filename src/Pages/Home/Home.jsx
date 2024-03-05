import React from "react";
import Header from "../../Sheard/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../Sheard/Navbar/Navbar";
import LeftSideNav from "../../Sheard/LeftSideNav/LeftSideNav";
import MiddelNav from "../MiddelNav/MiddelNav";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";


const Home = () => {
  return (
    <div className="px-2">
      <Header></Header>
      <div className="flex bg-[#F3F3F3] p-2 mt-4 items-center">
        <button className="btn rounded-none btn-secondary">Latest</button>
        <Marquee>
          <a className="text-xl font-bold" href="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</a>
          <a className="text-xl font-bold" href="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</a>
          <a className="text-xl font-bold" href="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</a>
        </Marquee>
      </div>

      <Navbar></Navbar>

      
      <div className="grid md:grid-cols-4 gap-4 mt-10">
            <div className="col-span-1 border">
              <LeftSideNav></LeftSideNav>
            </div>
             <div className="md:col-span-2 border">
              <MiddelNav></MiddelNav>

             </div>
             <div className="col-span-1 border">
                <RightSideNav></RightSideNav>
             </div>
      </div>
    </div>
  );
};

export default Home;
