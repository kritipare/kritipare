import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: '40px',
    margin: '0 20px',
    fontSize: '30px',
    [theme.breakpoints.down('sm')]:{
      padding: '20px 0'
    }
  },
  salutation: {
    display: 'flex',
    justifyContent: 'center',
    // padding: '20px',
    [theme.breakpoints.down('sm')]:{
      fontSize: '20px',
      padding: '5px 5px',
    }
  },
  intro: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '220px',
    fontFamily: 'Poppins',
    flexDirection: 'column',
    padding: '20px',
    [theme.breakpoints.down('sm')]:{
      fontSize: '20px',
      padding: '20px 5px',
    }
  }
}
));