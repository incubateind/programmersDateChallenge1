import React, { Component, Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles , useTheme } from "@material-ui/core/styles";
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
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "5em 10em 5em 10em",
    width: "auto",
    position: "absolute",
    top: "35em",
    borderRadius: "20px",
    backgroundColor: "white",
    top: "13em",
    left: "29em",
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
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

export default function UserDetails2(props) {
  function Continue(e) {
    e.preventDefault();
    props.nextStep();
  }
  function Previous(e) {
    e.preventDefault();
    props.prevStep();
  }
  const ITEM_HEIGHT = 48;
  const theme = useTheme();
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const names = [
    "asthama",
    "migraine",
    "headache",
    "stroke",
    "HIV",
    "cancer",
    "tuberculosis",
    "influenza",
    "measles",
    "whooping cough",
    "chicken pox",
    "pneumonia",
    "dementia",
  ];
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
          <Typography variant="h6" align="center">
            Please select all Health Conditions you have 
          </Typography>
          <br />
          <form>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">Select</InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={values.diseases}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, values.diseases, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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
