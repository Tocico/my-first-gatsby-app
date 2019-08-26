import React from "react"
import Layout from "../components/layout"
import Image from '../components/image'
import { css } from "@emotion/core"

export default ({filename}) => {
    const img = 'images/strawberry.JPG'
    return(
  <Layout>
    <div css={css`position:relative;`}>
    <Image filename={img}/>
      <div className='textOnpic'>
    <h1>Toshiko Kuno</h1>
    <h3>
    A Japanese based in Stockholm.
    </h3>
      </div>
    </div>
  </Layout>
    )
}