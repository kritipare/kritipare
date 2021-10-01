import { Box, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react'

import useStyles from './styles';

const mapIdToName = {
  0: 'Home',
  1: 'Projects',
  2: 'Contact'
};

const NavigationTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleScroll = (id) => {
    let offset = 100; // sticky nav height
    let el = document.getElementById(id); // element you are scrolling to
    el && window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
    // document.getElementById(id) && document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  const handleChange = (e, v) => {
    console.log(e)
    setValue(v);
    handleScroll(mapIdToName[v]);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        // indicatorColor="transparent"
      >
        <Tab value={0} label="Home" className={classes.tab} />
        <Tab value={1} label="Projects" className={classes.tab} />
        <Tab value={2} label="Contact" className={classes.tab} />
      </Tabs>
    </Box>
  )
}

export default NavigationTabs;
