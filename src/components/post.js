import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"


const Post = ({blog}) =>{
   const blogList = blog.map((post,key)=>{
       return (
           <div
              key={key}
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