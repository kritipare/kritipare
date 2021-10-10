import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
  container: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: '5%',
    // margin: '20px 20px 0 20px',
    // marginLeft: '20px',
    // marginRight: '20px'
  },
  textField: {
    marginTop: '10px'
  },
  form: {
    margin: '5% 0'
  },
  button: {
    display: "block", 
    appearance: "none", 
    // marginTop: "40px", 
    border: "1px solid #333", 
    marginBottom: "20px", 
    textTransform: "uppercase", 
    padding: "10px 20px", 
    borderRadius: "4px",
    background: "#ec5990", 
    color: "white", 
    textTransform: "uppercase", 
    border: "none", 
    marginTop: "40px", 
    padding: "20px", 
    fontSize: "16px", 
    fontWeight: "100", 
    letterSpacing: "10px",
    "&:hover":{
      background: '#bf1650'
    }
  },
  input: {
    display: "block", 
    boxSizing: "border-box", 
    width: "100%", 
    borderRadius: "4px", 
    border: "1px solid white", 
    padding: "10px 15px", 
    marginBottom: "10px", 
    fontSize: "18px",
    [theme.breakpoints.up('sm')]:{
      width: '120%'
    }
  },
  error: {
    color: '#bf1650',
    '&::before': {
      display: "inline", 
      content: "\"⚠ \"" 
    }
  },
  card: {
    width: '100%',
    height: '100%',
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    // background: 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)',
    '& .MuiCardMedia-img':{
      objectFit: 'contain'
    },
    '&:hover':{
      boxShadow: "0 16px 32px 0 rgba(0,0,0,0.2)"
    },
    [theme.breakpoints.up('sm')]:{
      width: '80%',
    },
    '& .MuiCardContent-root':{
      display: 'flex',
      justifyContent: 'center'
    },
    '& .MuiCardActions-root':{
      display: 'flex',
      justifyContent: 'center'
    }
  },
  badge: {
    // background: '#dc3545'
  }
}));