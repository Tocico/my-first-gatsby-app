import React ,{Component}from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import  styles from '../styles/nav-bar.module.css'

const ListLink = props => (
  <li>
    <Link
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

export default class Navbar extends React.Component{
  state = { showMenu: false }

  toggleMenu = (e) => {
    console.log(e);
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
     
  render(){
    const menuActive = this.state.showMenu ? `${styles.open}` : '';
    const triggerActive = this.state.showMenu ? `${styles.open}` : '';
    const arrowActive = this.state.showMenu ? `${styles.active}` : '';

  return(
  <div className="wrapper">

    <div className={`${styles.menuTrigger} ${triggerActive} ${arrowActive}`} onClick={this.toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav className={`${menuActive}`}>
  <ul>
    <ListLink className="nav__name" to={"/"} >Home</ListLink>
    <ListLink className="nav__name" to={"/about/"}>About</ListLink>
    <ListLink className="nav__name" to={"/portfolio/"}>Porfolio</ListLink>
    <ListLink className="nav__name" to={"/blog/"}>Blog</ListLink>
    <ListLink className="nav__name" to={"/skills/"}>Skills</ListLink>
    <ListLink className="nav__name" to={"/contact/"}>Contact</ListLink>
  </ul>
  </nav>
<div className="overlay"></div>
</div>
  )
  }
  }
