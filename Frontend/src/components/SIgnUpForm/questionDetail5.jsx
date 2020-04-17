import React, { Component, Fragment } from "react";
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
import FormControl from "@material-ui/core/FormControl";
import { RadioGroup, RadioButton } from "react-radio-buttons";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "5em 5em 5em 5em",
    width: "70%",
    position: "absolute",
    top: "35em",
    borderRadius: "20px",
    backgroundColor: "white",
    top: "13em",
    left: "14em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2em",
    zIndex: "10",
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
  mainwrap: {
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    backgroundImage:
      "url(https://source.unsplash.com/featured/?covid19,coronavirus,pandemic)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(6px)",
    minHeight: "120vh",
    width: "100%",
  },
  btn: {
    position: "absolute",
    marginLeft: "5em",
  },
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

function Heading() {
  return (
    <div
      style={{
        position: "absolute",
        top: "2em",
        zIndex: "10",
        width: "100%",
        height: "auto",
        color: "white",
      }}
    >
      <Typography variant="h1" align="center">
        {"Corona Cure"}
      </Typography>
      <br />
    </div>
  );
}

export default function QuestionDetail5(props) {
  function Continue(e) {
    e.preventDefault();
    props.nextStep();
  }
  function Previous(e) {
    e.preventDefault();
    props.prevStep();
  }
  const { values, handleChange } = props;
  const isMedium = useMediaQuery("(min-width:960px)");
  const isSmall = useMediaQuery("(min-width:680px)");

  var stt;
  if (!isMedium) {
    stt = {
      left: "15em",
    };
  }
  if (!isSmall) {
    stt = {
      left: "5em",
      padding: "5em 5em 5em 5em",
      top: "30em",
    };
  }
  const classes = useStyles();
  return (
    <div className={classes.total}>
      <div className={classes.mainwrap}></div>
      <Heading />
      <Container maxWidth="xs">
        <CssBaseline />

        <Paper className={classes.paper} style={stt}>
          <Typography variant="h4" align="center">
            Question 5. Do you have cough?
          </Typography>
          <br />
          <br />
          <form>
            <RadioGroup onChange={handleChange("q5")} vertical>
              <RadioButton value="true">Yes</RadioButton>
              <RadioButton value="false">No</RadioButton>
            </RadioGroup>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                color="primary"
                variant="outlined"
                onClick={Previous}
                style={{ margin: "1em" }}
              >
                Previous
              </Button>
              <Button
                color="primary"
                variant="outlined"
                onClick={Continue}
                style={{ margin: "1em" }}
              >
                Continue
              </Button>
            </div>
          </form>
          <br />
          <br />

          <Box mt={8}>
            <Copyright />
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
