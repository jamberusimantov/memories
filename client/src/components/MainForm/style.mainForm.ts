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
  },
  formHead_title: {
    textAlign: 'center',
    flexGrow: 1,
  },
  buttonSubmit: {
    marginBottom: 10,
    width:'100%'
  },
  buttonAddFile: {
    marginBottom: 10,
  },
  buttonReset: {
    width:'100%',
    marginBottom: 10,
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
  imgPreviewContainer: {
    borderBottom: '2px solid #dddddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#cccccc',
    minHeight: '100px',
    width: '100%',
  },
  imgPreview: {
    width: '100%',
  },
}));