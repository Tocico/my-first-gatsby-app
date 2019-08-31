import React, { Component } from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import 'chartjs-plugin-deferred';
import ProgrammingsSkillsChart from '../components/programmingSkillsChart'
import AdobeSkillsChart from '../components/adobeSkillsChart'
import HobbySkillsChart from '../components/hobbySkillsChart'
// import ChartDataLabels from 'chartjs-plugin-datalabels';



export default () =>{

    return (
      <Layout>
        　　　　
        <h1
          css={css`
            display: inline-block;
          `}
        >
          My Skills
        </h1>

        <h2 css={css`text-align: center; margin-top:10%;`}>Programming Skills</h2>
           <ProgrammingsSkillsChart/>

        <h2 css={css`text-align: center; margin-top:10%;`}>Adobe Skills</h2>
            <AdobeSkillsChart/>
        <h2 css={css`text-align: center; margin-top:10%;`}>Hobby Skills</h2>
            <HobbySkillsChart />
       
      </Layout>
    )
}
