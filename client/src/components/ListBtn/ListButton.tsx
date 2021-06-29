import React from "react";
import { ListItemIcon, ListItemText, ListItem } from '@material-ui/core/';
import { Assignment } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const CustomListButton = (props: any) => {
  const { text, icon, className, RTL } = props
  const classes = useStyles();

  if (RTL) return (
    <ListItem button className={className}  >
      <ListItemText primary={text} />
      <ListItemIcon children={icon} className={classes.icon} />
    </ListItem>
  )
  return (
    <ListItem button className={className}  >
      <ListItemIcon children={icon} />
      <ListItemText primary={text} />
    </ListItem>
  );
};
CustomListButton.defaultProps = {
  text: '',
  icon: <Assignment />,
  className: '',
}
export default CustomListButton;
