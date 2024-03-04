import React from "react";
import Header from "../../Sheard/Header/Header";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex bg-[#F3F3F3] p-2 mt-4">
        <button className="btn rounded-none btn-secondary">Latest</button>
        <Marquee>
          <a className="text-xl font-bold" href="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</a>
          <a className="text-xl font-bold" href="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</a>
          <a className="text-xl font-bold" href="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</a>
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
