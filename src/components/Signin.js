import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  FormHelperText,
  TextField,
  Paper,
  Input,
  Grid,
  IconButton,
  Icon,
  FormControl,
  Card,
  InputLabel,
  CardActionArea,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.type === "dark",
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  div: {
    display: "flex",
    justifyContent: "center"
  },
  cardHeader: {
    backgroundColor: "#FF1744",
    color: "#FAFAFA"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  textfield: {
    width: "90%",
    marginTop: 10
  },
  item: {
    margin: 15
  },
});

function Login(props) {
  const { classes } = props;
  return (
    <Fragment>
      <Grid container justify='center' style={{ marginTop: 20 }} >
        <Grid item xs={12} sm={10} md={8} className={classes.item} >
          <Paper style={{backgroundColor: ''}} >
            <Grid container justify='center' >
              <Typography color='secondary' style={{ marginTop: 15 }} variant='headline' align='center' >LOGIN FORM</Typography>
            </Grid>
            <Grid container justify='center' className={classes.item} >
              <TextField
              variant='outlined'
              className={classes.textfield}
              label='ENTER YOUR NAME HERE'
             />
            </Grid>
            <Grid container justify='center' className={classes.item} >
              <TextField
              variant='outlined'
              className={classes.textfield}
              label='ENTER YOUR EMAIL HERE'
              />
            </Grid>
            <Grid container justify='center' className={classes.item} >
              <TextField
              variant='outlined'
              className={classes.textfield}
              label='ENTER YOUR PASSWORD HERE'
             />
            </Grid>
            <Grid container justify='center' >
              <Button style={{ marginBottom: 15 }} variant='contained' color='secondary' >login</Button>
            </Grid>
          </Paper>  
        </Grid>
      </Grid>
    </Fragment>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
