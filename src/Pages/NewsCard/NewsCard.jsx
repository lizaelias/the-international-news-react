import React from "react";
import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { title, image_url, thumbnail_url,details,_id } = aNews;
  return (
    <div className="px-4">
     <div className="border mb-7">
     <div className="mb-10 flex justify-between rounded-lg p-5 items-center bg-slate-100">
        <div className="flex items-center gap-x-2">
          <img className="w-10 rounded-full" src={aNews.author.img} alt="" />
          <div>
            <h1>{aNews.author.name}</h1>
            <p>{aNews.author.published_date}</p>
          </div>
        </div>

        <div className="flex gap-x-4">
          <span>
            <FaBookmark></FaBookmark>
          </span>
          <span>
            <FaShare></FaShare>
          </span>
        </div>
      </div>

      <h2 className="text-2xl font-bold">{title}</h2>
      <div class="card w-full bg-base-100 mb-10 mt-4">
        <figure>
          <img className="w-full"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          
          
          {
            details.length > 200 ? 
            <p>{details.slice(0,200) }   <Link className="font-bold text-red-700 underline uppercase" to={`news/${_id}`}> Read More..</Link></p> :<p>{details}</p>

          }

<div className="border-t-2">
        <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-x-3">
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
     </div>
        <div>
        <h2>4.99</h2>
        </div>

        </div>


        <div className="flex items-center gap-x-3">
            <span><FaEye></FaEye></span>
            <h3>499</h3>
        </div>
        </div>
      

 </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default NewsCard;
