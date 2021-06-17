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
  buttonSubmit: {
    marginBottom: 10,
  },
  buttonAddFile: {
    marginBottom: 10,
  },
  buttonReset: {
    marginBottom: 10,
  },
  input: {
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