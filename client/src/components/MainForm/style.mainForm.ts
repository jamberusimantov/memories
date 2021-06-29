import { makeStyles } from '@material-ui/core/styles';
import style from '../../style'

const useStyle = (userTheme:any) => {

  const loginStyle =  makeStyles((theme) => ({
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
    color:  userTheme.primaryColor || style.colors[9].value,
  },
  formHead_title: {
    textAlign: 'center',
    flexGrow: 1,
  },
  link: {
    width: '100%',
  },
  uploadImg: {
    color: userTheme.primaryColor || style.colors[5].value,
  },
  btn: {
    marginBottom: 10,
    backgroundColor: userTheme.secondaryColor || style.colors[0].value,
    color: userTheme.primaryColor || style.colors[9].value,
    fontSize: userTheme.fontSize || 'medium',
  },
  buttonAddFile: {
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
    color: userTheme.secondaryColor || style.colors[0].value,
    minHeight: '100px',
    width: '100%',
  },
  imgPreview: {
    width: '100%',
  },
}));
return loginStyle();
}
export default useStyle;