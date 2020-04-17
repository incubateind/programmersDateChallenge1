import React, { Component , Fragment} from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding :"5em 10em 5em 10em",
    width : 'auto',
    position:"absolute",
    top:"35em",
    borderRadius :"20px",
    backgroundColor:"white" ,
    top :"13em",
    left :"25em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom:"2em",
    zIndex:"10",
  },
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mainwrap:{
    padding : theme.spacing(0),
    margin : theme.spacing(0),
    backgroundImage: 'url(https://source.unsplash.com/featured/?covid19,coronavirus,pandemic)',
    backgroundRepeat : 'no-repeat',
    backgroundSize: "cover",
    backgroundPosition :"center",
    filter :'blur(6px)',
    minHeight:"120vh",
    width :"100%",
  },
  btn:{
      position:"absolute",
      marginLeft:"5em",
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Corona Cure
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Heading(){
    return (
        <div style={{position:"absolute" ,
         top:"2em" , zIndex:"10", 
         width :"100%" , height:"auto" , color:"white"}}>
        <Typography variant="h1" align="center">
            {"Corona Cure"}
        </Typography>
        <br/>
        </div>
    )
}

export default function UserDetails(props){
   
  function Continue(e){
    e.preventDefault();
    props.nextStep();
  };
    const { values, handleChange } = props;
    const isMedium = useMediaQuery("(min-width:960px)");
    const isSmall = useMediaQuery("(min-width:680px)");
    
    var stt;
    if (!isMedium){
        stt ={
            left :"12em"
        }
    }
    if (!isSmall){
        stt ={
            left:"3em",
            padding:"5em 5em 5em 5em",
            top :"20em",
        }
    }
     const classes = useStyles();
    return (
      <div className={classes.total}>
        <div className={classes.mainwrap}></div>
        <Heading />
        <Container maxWidth="xs">
          <CssBaseline />

          <Paper className={classes.paper} style={stt}>
            <Typography variant="h6" align="center">
              Please enter your details
            </Typography>
            <form>
              <TextField
                outlined={true}
                required
                placeholder="Enter Your First Name"
                variant="outlined"
                label="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                margin="normal"
                fullWidth="true"
              />
              <br />
              <TextField
                variant="outlined"
                required
                placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                margin="normal"
                fullWidth="true"
              />
              <br />
              <TextField
                required
                variant="outlined"
                placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
                margin="normal"
                fullWidth="true"
              />
              <br />
              <TextField
                variant="outlined"
                placeholder="Enter Your Phone"
                label="Phone"
                onChange={handleChange("phone")}
                defaultValue={values.phone}
                margin="normal"
                fullWidth="true"
              />
              <TextField
                variant="outlined"
                placeholder="Enter Your Age"
                label="Age"
                onChange={handleChange("age")}
                defaultValue={values.age}
                margin="normal"
                fullWidth="true"
              />
              <br />
              <br />
              <Button
                color="primary"
                variant="outlined"
                onClick={Continue}
                className={classes.btn}
              >
                Continue
              </Button>
            </form>

            <Box mt={8}>
              <Copyright />
            </Box>
          </Paper>
        </Container>
      </div>
    );
  }



