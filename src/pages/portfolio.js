import React from "react"
import Layout from "../components/layout"
import Image from '../components/image'
import { css } from "@emotion/core"

export default ({ filename }) => {
  const img = [
    'images/salmonsallad.JPG',
    'images/chickensallad.JPG',
    'images/vegiburger.JPG',
    'images/bread.JPG',
    'images/smoothie.JPG',


  ]
  return (
  <Layout>
    <h1>Portfolio</h1>
    {img.map((i,index)=>(
      <div key={index} css={css`margin: 2% 0;`}>
    <Image filename={i} />
      </div>
    ))}
  </Layout>)
}
