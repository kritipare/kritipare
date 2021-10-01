import './App.css';
import Header from './Header/Header';
import SectionTop from './SectionTop';
import Projects from './Projects/Projects';
import Contact from './Contact/Form';
import { Container, createTheme, CssBaseline, Grid } from '@material-ui/core';
import Particles from 'react-particles-js';
import ContactForm from './Contact/Form';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import About from './About/Aboutme';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container 
      // style={{ overflow: 'hidden'}} 
      maxWidth="md"
      >
        <CssBaseline />
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <SectionTop />
          </Grid>
          <Grid item xs={12}>
            <About />
          </Grid>
          <Grid item xs={12}>
            <Projects />
          </Grid>
          <Grid item xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      </ThemeProvider>
  );
}

export default App;
