import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import Image from "../components/image"

export default ({ filename }) => {
  const img = "images/kanellbulle.JPG"
  return (
    <Layout>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
        `}
      >
        <div css={css`width:100%; background-color: rgb(156, 148, 110); text-align:center;`}>
          <h1 css={css`color:white; padding: 15%;`}>Email me at the address below</h1>
          <div className="contact">
            <a href="mailto:info@toshikokuno.com">info@toshikokuno.com</a>
          </div>
        </div>
        <div className='backgclr'>
          <Image filename={img}/>
        </div>
      </div>
    </Layout>
  )
}
