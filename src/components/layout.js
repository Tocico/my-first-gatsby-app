import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import logo from "../images/logo.png"
import Navbar from './navbar'


export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 90%;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/`}>
      <img
        src={logo}
        alt="logo"
        css={css`
          max-width: 100px;
          display: inline-block;
        `}
      />
    </Link>

     <Navbar />
    {children}
  </div>
)
