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
    <ListLink className="nav__name" to={"/"}>Home</ListLink>
    <ListLink className="nav__name" to={"/about/"}>About</ListLink>
    <ListLink className="nav__name" to={"/portfolio/"}>Porfolio</ListLink>
    <ListLink className="nav__name" to={"/blog/"}>Blog</ListLink>
    <ListLink className="nav__name" to={"/skills/"}>Skills</ListLink>
    <ListLink className="nav__name" to={"/contact/"}>Contact</ListLink>
  </ul>
)
