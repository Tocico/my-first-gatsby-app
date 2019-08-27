import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
    `}
  >
    <Link
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

export default () => (
  <ul
    css={css`
      float: right;
    `}
  >
    <ListLink to={"/"}>Home</ListLink>
    <ListLink to={"/about/"}>About</ListLink>
    <ListLink to={"/portfolio/"}>Porfolio</ListLink>
    <ListLink to={"/blog/"}>Blog</ListLink>
    <ListLink to={"/contact/"}>Contact</ListLink>
  </ul>
)
