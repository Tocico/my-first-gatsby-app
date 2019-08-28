import React,{ useState, useEffect } from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import Loading from '../components/loading'

export default () => {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

    return(
      <div>
    {spinner? <Loading/>:
  <Layout>
    <div css={css`position:relative;`}>
    <img src="./images/strawberry.JPG"/>
      <div className='textOnpic'>
    <h1 css={css`letter-spacing:0.2em;`}>Toshiko Kuno</h1>
    <h3>
    A Japanese based in Stockholm.
    </h3>
      </div>
    </div>
  </Layout>
     }
      </div>
    )
}