import { makeStyles } from '@material-ui/core/styles';


const fontSize ='large';
const color = 'rgba(0, 0, 0, 0.5)';


export default makeStyles(()=>({
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
    color,
    fontSize
  },
  overlay1: {
    position: 'absolute',
    top: '50px',
    left: '20px',
    color,
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    // color,
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
    fontSize,
    textAlign:'center',

  },
  left:{
    textAlign:'left',
  },
  cardActions: {
    padding: '0 16px 8px',
    display: 'flex',
    width:'100%',
    justifyContent: 'space-between',
    position:'absolute',
    bottom:'8px',
  },
  cardActionsBtn: {
    padding: '0 16px 8px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));