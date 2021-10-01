import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 155px)',
    display: 'table',
    width: '100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0,

    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 190px)'
    },
    [theme.breakpoints.down('xs')]: {
      // display: 'table'
      height: '100%',

      display: 'block'
    }
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    position: 'sticky'
  },
  header: {
    flexGrow: 1
  }
}));
