import React from 'react';

import { AppBar } from '@material-ui/core';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import useStyles from './styles';

const PageTemplateDecorator = (WrappedComponent) =>
  function Inner(props) {
    const classes = useStyles();

    return (
      <div>
        <div className={classes.header}>
          <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Header />
          </AppBar>
        </div>
        <main className={classes.content}>
          <WrappedComponent {...props} />
        </main>
        <Footer />
      </div>
    );
  };

export default PageTemplateDecorator;
