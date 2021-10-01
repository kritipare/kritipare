import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    color: 'black',
    height: '12%',
    // // backgroundColor: 'white',
    // // transform: "translate3d(0px, -64px, 0px) scale3d(1, 1, 1) rotateX(\n0deg) rotateY(\n0deg) rotateZ(\n0deg) skew(\n0deg, \n0deg)", 
    // // transformStyle: "preserve-3d",
    backdropFilter: "blur(10px)",
    // paddingRight: "240px", 
    // paddingLeft: "240px",
    // // position: "sticky", 
    // left: "0", 
    // // top: "64px", 
    // right: "0", 
    // bottom: "auto", 
    display: "flex", 
    // padding: "24px 120px 8px", 
    // WebkitBoxPack: "justify", 
    // MsFlexPack: "justify", 
    justifyContent: "center", 
    // WebkitBoxAlign: "center", 
    // MsFlexAlign: "center", 
    alignItems: "center", 
    // // borderRadius: "0 0 72px 72px", 
    backgroundColor: "hsla(0,0%,100%,.37)",
    // background: "#ddd", 
    // zIndex: "1000",
    // backgroundAttachment: "scroll !important",
    // [theme.breakpoints.down('sm')]:{
    //   paddingLeft: '10px',
    //   paddingRight: '10px'
    // }
  }
}));