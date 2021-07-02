import { makeStyles } from '@material-ui/core/styles';
import style from '../../style'

const useStyle = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  fullWidth: {
    width: '100%',
  },
  flexCenter: {
    display: 'flex',
    justifyItems: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    maxWidth: '300px',
  },
  formHead_button: {
    color: style.colors[9].value,
  },
  userSection: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center'
    },
  },
  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default useStyle;