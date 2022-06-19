import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles , darken} from "@material-ui/core/styles";
import avatar from "../manya6.png";
import Footer from "./Footer";
import HomeQuote from "./HomeQuote";
import Drawer from "@material-ui/core/Drawer";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: darken("rgb(148, 208, 204)", 0),
    fontWeight: 550
  },
  subtitle: {
    color: "rgba(214,131,85,255)",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Lavanya Narasimhan" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <IconButton className={classes.title} variant="h4"> 
        <Typed strings={["Lavanya Narasimhan"]} typeSpeed={50} onClick={() => setOpen(true)}/>  
        <Drawer open= {open} anchor="bottom" onClose={() => setOpen(false)}>
       <BottomNavigation className={classes.bottomNavContainer} >
          <BottomNavigationAction label="Inspire" showLabel="true" className={classes.quotes} />
          <BottomNavigationAction label="Excel" showLabel="true" className={classes.quotes} />
          <BottomNavigationAction label="Innovate" showLabel="true" className={classes.quotes} />

          </BottomNavigation>
      </Drawer>
        </IconButton>
        
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Developer",
            "Software Engineer",
            "Masters Student",
            "Musician"
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
          
      </Typography>

          

        
    </Box>

  );
};

export default Header;
