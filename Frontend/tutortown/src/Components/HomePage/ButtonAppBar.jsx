import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import logo from "../Images/logo.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    position: 'fixed',
    zIndex: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    marginLeft: 50
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <img width="40px" style={{borderRadius: "50%"}} src={logo} alt="" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Button className={classes.margin} color="inherit">About</Button>
          <Button className={classes.margin} color="inherit">Login</Button>
          <Button className={classes.margin} color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}