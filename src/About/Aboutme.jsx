import { Button, Grid } from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";
import { ButtonBack } from "../GlobalComponents";
// import data from "./yourdata";
import "./aboutme.css";
import useStyles from './styles';

const data = {
  aboutParaOne: 'Enthusiastic and eager to contribute to team success through hard work, attention to detail and excellent organisational skills. Clear understanding of data structures with problem solving skills. Motivated to learn, grow and excel in IT industry.',
  aboutParaTwo: 'I have completed my Bachelor of technology in Computer Science & Engineering from LNCTS Bhopal in the year 2021.',
  aboutParaThree: 'Currently I am working as a Full stack developer at Gammastack.'
};

const About = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" id="About" style={{ top: '100px', position: 'relative' }}>
      <div id="about">
        <div className="container">
          <div className="about-section">
            <div className={classes.content}>
              <Fade bottom cascade>
                <Button className={classes.about}>About Me</ Button>
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
