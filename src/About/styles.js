import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
  about: {
    display: 'flex',
    justifyContent: 'center',
    height: "'52px'", 
    borderRadius: "50px", 
    fontSize: "'20px'", 
    fontWeight: "600", 
    alignItems: "center", 
    color: "#fff", 
    background: 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)', 
    cursor: "pointer", 
    transition: "0.5s ease", 
    position: "relative", 
    overflow: "hidden"
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  
}));