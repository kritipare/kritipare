import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ReactLoading from 'react-loading';
import Typical from "react-typical";

import BackgroundAnimation from '../Background/Background';
import Button from '../GlobalComponents/Button';
import './style.css';
import useStyles from './styles';

const SectionTop = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id) && document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  return (
    <Grid container justifyContent="center" alignItems="center" id="Home" style={{ top: '100px', position: 'relative' }}>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={classes.root}>
        <div className={`salutation ${classes.salutation}`}>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Hey There! 
          </Typography>
          <span className="blog-title-emoji">👋</span>
        </div>
        {loading ? 
        <ReactLoading type='bubbles' color="#fff" /> : 
          <>
            <div className={`intro ${classes.intro}`}>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              I am Kriti Pare 
              </Typography>
              <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Typical
                steps={["Software Engineer", 1000, "Fullstack developer", 1000]}
                loop={Infinity}
                wrapper="div"
              />
              </Typography>
              
            </div>
            
            {/* <div className="intro">
              
            </div> */}
            {/* <Button className="btn" onClick={(id) => handleScroll('contactForm')}>
              Contact
            </Button> */}
          </>
        }
      </Grid>
      {/* <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
        <BackgroundAnimation />
      </Grid> */}
    </Grid>
  )
}

export default SectionTop;