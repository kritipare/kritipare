import { Grid } from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";
// import data from "./yourdata";
import "./aboutme.css";

const data = {
  aboutParaOne: 'Enthusiastic and eager to contribute to team success through hard work, attention to detail and excellent organisational skills. Clear understanding of data structures with problem solving skills. Motivated to learn, grow and excel in IT industry.',
  aboutParaTwo: 'I have completed my Bachelor of technology in Compuetr Science & Engineering from LNCTS Bhopal in the year 2021.',
  aboutParaThree: 'Currently I am working as a Full stack developer at Gammastack.'
};

const About = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" id="About" style={{ top: '100px', position: 'relative' }}>
      <div id="about">
        <div className="container">
          <div className="about-section">
            <div className="content">
              <Fade bottom cascade>
                <h1 className="container text-center">About Me</h1>
              </Fade>
              <p>
                {data.aboutParaOne}
                <br></br>
                <br></br>
                {data.aboutParaTwo}
                <br></br>
                <br></br>
                {data.aboutParaThree}
              </p>
            </div>
            {/* <div>
              <img src={data.aboutImage} alt="about"></img>
            </div> */}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default About;
