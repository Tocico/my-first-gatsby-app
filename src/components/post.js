import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"




const Post = ({blog, deletePost}) =>{
   const blogList = blog.map((post)=>{
       return (
           <div
              key={post.id}
            >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {post.title}{" "}
              <span
                css={css`
                  color: #bbb;
                  font-size:0.8em;
                `}
              >
                 {post.date}
              </span>
            </h3>
            <p>{post.content}</p>
            <button onClick={()=>{deletePost(post.id)}} css={css`padding:0.5%; margin-left:30%; font-size:0.8em; background-color:#c78484ad; color: white;`}>Delete</button>
            </div>
       )
       })
   return(
       <div >
           {blogList}
       </div>
       )
   }

 export default Post