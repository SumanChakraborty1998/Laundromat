import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { VideoPlayer } from "./VideoPlayer";
import { Options } from "./Options";
import { Notifications } from "./Notifications";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",
    backgroundColor: "#FEDC3F",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export const Main = () => {
  const classes = useStyles();
  return (
    <>
      <br />
      <br />
      <br/>
      <div className={classes.wrapper}>
        <AppBar position="static" color="inherit" className={classes.appBar} style={{zIndex:'-1'}}>
          <Typography variant="h2" align="center">
            {" "}
            Verification
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </>
  );
};
