import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
    // margin: '20px 20px 0 20px',
    // marginLeft: '20px',
    // marginRight: '20px'
  },
  card: {
    width: '90%',
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
  }
}));