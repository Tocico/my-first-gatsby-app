import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default () => {
    return(
  <Layout>
  <div css={css`position:relative;`}>
    <img src="/images/flowers.JPG"/>
    <div className='textOnpicAbout'>
  <h1>Hej</h1>
    <p>My name is Toshiko Kuno. I am ambitious and creative with great passion for design, photography and food. I am currently in my first year of Front-end development studies at Nackademin in Stockholm. I enjoy learning new things. Future plans : a great web developer.</p>
    </div>
    </div>
  </Layout>
    )
}
