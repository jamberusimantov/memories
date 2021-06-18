import { makeStyles } from '@material-ui/core/styles';

const fontSize ='large';
const color ='white';
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
    color,
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    fontSize
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));