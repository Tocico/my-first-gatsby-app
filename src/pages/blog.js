import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import AddPost from '../components/addPost'
import Post from '../components/post'

export default class Blog extends React.Component{
state = 
{
  blog:[
    {title:'Photography', date:'2019-08-24', content:'I love to take a photography', id: 1},
    {title:'Food', date:'2019-08-25', content:'I love to eat a food', id:2}
  ]
}
    addPost = (post)=>{
      post.id = Math.random();
      let blogs = [...this.state.blog,post];
      this.setState({
        blog:blogs
      })
    }

    deletePost = (id) =>{
      console.log(id);
      this.setState({blog: [
        ...this.state.blog.filter(post=> post.id !== id)
      ]})
    }

    render(){
      return(
          <Layout>
         <h1
           css={css`
             display: inline-block;
           `}
           >
           My Blog
         </h1>
         <div>
           <Post blog={this.state.blog} deletePost={this.deletePost}/>
          <AddPost addPost={this.addPost} />
         </div>
         </Layout>
      )
    }
  }
