import React from "react";
import Header from "../../Sheard/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../Sheard/Navbar/Navbar";

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
    </div>
  );
};

export default Home;
