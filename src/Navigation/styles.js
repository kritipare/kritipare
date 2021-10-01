import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  tab: {
    margin: '2px',
    padding: "8px 16px", 
    // border: "1px solid rgba(34,34,34,.12)", 
    borderRadius: "4px", 
    // backdropFilter: 'unset',
    // backgroundColor: "transparent", 
    fontFamily: "Poppins,sans-serif", 
    color: "rgba(34,34,34,.87)", 
    fontSize: "16px", 
    lineHeight: "16px", 
    fontWeight: "600", 
    letterSpacing: ".01em",
    '&$selected':{
      borderStyle: "solid", 
      borderColor: "#f0e5ff", 
      backgroundColor: "#f0e5ff", 
      color: "#8f44ff",
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: "12px", 
      lineHeight: "18px"
    }
  }
}));