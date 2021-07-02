import { makeStyles } from '@material-ui/core/styles';
import style from '../../style'



const useStyle = () => {

  const loginStyle = makeStyles(() => ({
    media: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundBlendMode: 'darken',
    },
    border: {
      border: '2px solid #dddddd',
    },
    fullHeightCard: {
      height: '100%',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      position: 'relative',
    },
    overlay0: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: style.colors[0].value,
      fontSize:'medium',
    },
    overlay1: {
      position: 'absolute',
      top: '50px',
      left: '20px',
      color: style.colors[0].value,
    },
    overlay2: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color:style.colors[0].value,
    },
    details: {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px',
    },
    message: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
    },
    title: {
      padding: '0 16px',
      fontSize:'medium',
      textAlign: 'center',

    },
    left: {
      textAlign: 'left',
    },
    cardActions: {
      padding: '0 16px 8px',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: '8px',
    },
    cardActionsBtn: {
      padding: '0 16px 8px',
      display: 'flex',
      justifyContent: 'space-between',
      color: style.colors[0].value,
    },
    link:{
      color: style.colors[0].value,
    },
  }));
  return loginStyle();
}
export default useStyle;