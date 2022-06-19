import React, {useState} from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import {Link} from "react-router-dom";
import { InputLabel } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded'
import avatar from "../manya6.png";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles({
  bottomNavContainer: {
    background: darken("rgb(209, 217, 217)", 0.6)
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: darken("rgb(238, 196, 196)", 0),

      "&:hover": {
        fill: darken("rgb(148, 208, 204)", 0), 
        fontSize: "2.5rem",

      },
      
    },
  },
  bottomNavLabel: 
  {
    textTransform: "uppercase",
    marginTop: 5
  },
  arrowUp:
  {
    color: "rgb(148, 208, 204)"
  },
  quotes:
  {
    color: "rgb(148, 208, 204)",
    textTransform: "uppercase"
  }
});

const HomeQuote = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Box>
       <IconButton onClick={() => setOpen(true)}>
              <ArrowUpwardRoundedIcon className= {classes.arrowUp}></ArrowUpwardRoundedIcon>

      </IconButton>
       <Drawer open= {open} anchor="bottom" onClose={() => setOpen(false)}>
       <BottomNavigation className={classes.bottomNavContainer} >
          <BottomNavigationAction label="Inspire" showLabel="true" className={classes.quotes} />
          <BottomNavigationAction label="Excel" showLabel="true" className={classes.quotes} />
          <BottomNavigationAction label="Innovate" showLabel="true" className={classes.quotes} />

          </BottomNavigation>
      </Drawer>
    </Box>
    
  );
};
export default HomeQuote;
