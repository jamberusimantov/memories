import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  fullWidth: {
    width: '100%',
  },
  flexCenter:{
    display:'flex',
    justifyItems:'center',
  },
  progress: {
    padding: theme.spacing(.5),
    marginBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth:'300px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  buttonReset: {
    marginBottom: 10,
  },
  userSection: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems:'center'
    },
  },
  sectionMobile: {
    display: 'flex',
    alignItems:'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default style;