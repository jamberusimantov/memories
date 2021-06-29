import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formHead: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formHead_button: {
    flexBasis: 1,
    wordBreak: 'keep-all',
  },
  formHead_title: {
    textAlign: 'center',
    flexGrow: 1,
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  buttonReset: {
    marginBottom: 10,
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none'
  },
}));