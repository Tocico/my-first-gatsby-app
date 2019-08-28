import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import AddPost from '../components/addPost'
import Post from '../components/post'

export default class Blog extends React.Component{
state = 
{
  blog:[
    {title:'Photography', date:'2019-08-24', content:'I love to take a photography'},
    {title:'Food', date:'2019-08-25', content:'I love to eat a food'}
  ]
}
    
    addPost = (post)=>{
      console.log(post);
      let blogs = [...this.state.blog,post];
      console.log(blogs);
      this.setState({
        blog:blogs
      })

    }
    render(){
      return(
          <Layout>
         <h1
           css={css`
             display: inline-block;
             border-bottom: 1px solid;
           `}
           >
           My Blog
         </h1>
         <div>
           <Post blog={this.state.blog}/>
          <AddPost addPost={this.addPost} />
         </div>
         </Layout>
      )
    }
  }
