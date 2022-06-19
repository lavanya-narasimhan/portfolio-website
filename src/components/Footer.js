import React from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: darken("rgb(209, 217, 217)", 0.6)
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "rgba(214,131,85,255)",
      "&:hover": {
        fill: darken("rgb(148, 208, 204)", 0), 
        fontSize: "2.5rem",

      },
      
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
     <BottomNavigation className={classes.bottomNavContainer} >
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} href="https://www.linkedin.com/in/lavanyanarasimhan19/" target="_blank" />
      <BottomNavigationAction icon={<Instagram />} className={classes.root} href="https://www.instagram.com/_lavanya/" target="_blank"/>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} href="https://www.facebook.com/lavanya.narasimhan/" target="_blank"/>

      </BottomNavigation>
  );
};
export default Footer;
