import React,{ useState } from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import Loading from '../components/loading'

export default () => {
  const [ spinner, setSpinner ] = useState(true);
  
  const windowGlobal = typeof window !== 'undefined' && window;
    //  if(windowGlobal){
       if(windowGlobal.sessionStorage.getItem('access')){
         setTimeout(() => setSpinner(false), 0)
        } else {
          setTimeout(() => setSpinner(false), 3000)
          windowGlobal.sessionStorage.setItem('access', 0);
        }
        
        
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
// }