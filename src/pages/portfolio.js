import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default () => {
  const img = [
    '/images/salmonsallad.JPG',
    '/images/chickensallad.JPG',
    '/images/vegiburger.JPG',
    '/images/bread.JPG',
    '/images/smoothie.JPG',
  ]
  return (
  <Layout>
    <h1>Portfolio</h1>
    {img.map((i,index)=>(
    <img src={i} css={css`margin: 2% 0;`}/>
    ))}
  </Layout>)
}
