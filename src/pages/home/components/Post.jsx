import React from "react";
import { GetIcon } from "../../../assets/icons";

function Post({ post }) {
  return (
    <div className=" w-[470px] mx-auto border-b border-inactive_line pb-3 mb-3">
      <div className=" flex items-center gap-2 h-14">
        <img className=" w-8 rounded-full" src={post.from.pic} alt="" />
        <h6 className=" text-sm font-semibold text-[#404040] mr-auto">
          {post.from.name}{" "}
        </h6>
        <button>
          <GetIcon className=" text-inactive_text" name="dots" />
        </button>
      </div>
      <img
        className=" w-full max-h-[600px] mx-auto"
        src={post.images[0]}
        alt=""
      />
      <div className=" h-10 flex items-center gap-4 mt-1">
        <button>
          <GetIcon name="notify" />
        </button>
        <button>
          <GetIcon name="comment" />
        </button>
        <button className=" mr-auto">
          <GetIcon name="msg" />
        </button>
        <button>
          <GetIcon name="saved" />
        </button>
      </div>
      <div>
        <div className=" mb-1 mt-2">{post.likes} likes</div>
      
          
            <div>
              <p className="mb-1">
                <span className=" font-semibold text-sm mr-1">{post.comments[0].from}</span>{" "}
                <span className=" text-sm mr-1">{post.comments[0].comment}</span>
                <button className=" block text-sm text-inactive_text">View all {post.comments.length} comments</button>
              </p>
            </div>

            <div className=" flex  mt-2">
            <input type="text" placeholder=" Add a comment..." className=" placeholder:text-sm placeholder:-ml-4 outline-none flex-1" />
            <button><GetIcon size={12} name="emoji"/></button>
            </div>
         
       
      </div>
    </div>
  );
}

export default Post;
