import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Icon,
  Typography,
  Button
} from "@material-ui/core";

const styles = theme => ({
  typo: {
    marginBottom: `10px`,
    color: `white`
  },
  paralax: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    justifyContent: "center"
  },
  Grid: {
    margin: 20
  },
  heroButton: {
    margin: 3
  },
  buttonTwo: {
    margin: 3
  },
  Typo: {
    padding: 15,
    backgroundColor: `darkgreen`
  }
});

class Home extends Component {
  state = {
    url:
      "https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=",
    show: [
      {
        id: 1,
        url:
          "https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk="
      },
      {
        id: 5,
        url: "http://bdfjade.com/data/out/102/6066356-wallpaper-image.jpeg"
      },
      {
        id: 2,
        url:
          "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=light-landscape-nature-326055.jpg&fm=jpg"
      },
      {
        id: 3,
        url: "https://www-images.christianitytoday.com/images/71940.jpg?w=620"
      },
      {
        id: 4,
        url:
          "https://www.gannett-cdn.com/-mm-/3d4163da6f9c8d4024b714192bad2e4731f11d07/c=41-0-481-331/local/-/media/2018/05/07/MIGroup/BattleCreek/636613035474588578-642567592-1-.jpg?width=534&height=401&fit=crop"
      }
    ]
  };
  changing = () => {
    const num = Math.floor(Math.random() * 5);
    this.setState({ url: this.state.show[num].url });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div
          className={classes.paralax}
          onClick={this.changing}
          style={{
            backgroundImage: `url(${this.state.url})`,
            minHeight: 200
          }}
        >
          <Typography className={classes.typo} variant="title">
            THIS IS THE LANDING PAGE OF THIS WEBSITE
          </Typography>
          <div>
            <Grid container justify="center">
              <Button
                className={classes.heroButton}
                variant="contained"
                fullWidth
                color="primary"
                onClick={this.change}
              >
                button 1
              </Button>
            </Grid>
            <Grid container>
              <Button
                className={classes.buttonTwo}
                variant="contained"
                style={{ color: "primary" }}
              >
                button 2
              </Button>
              <Button
                className={classes.buttonTwo}
                variant="contained"
                style={{ color: "primary" }}
              >
                button 3
              </Button>
            </Grid>
            <Grid container justify="center">
              <IconButton
                onClick={this.changing}
                size="large"
                style={{ color: "white", fontSize: 200 }}
              >
                <Icon size="large">keyboard_arrow_left</Icon>
              </IconButton>
              <IconButton
                onClick={this.changing}
                style={{ color: "white", fontSize: 200 }}
              >
                <Icon>keyboard_arrow_right</Icon>
              </IconButton>
            </Grid>
          </div>
        </div>
        <Grid container justify="center" className={classes.Typo}>
          <Typography style={{ color: "white" }} variant="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <div
          className={classes.paralax}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=light-landscape-nature-326055.jpg&fm=jpg')`,
            minHeight: 200
          }}
        >
          <Typography className={classes.typo} variant="title">
            THIS IS THE LANDING PAGE OF THIS WEBSITE
          </Typography>
          <div>
            <Grid container justify="center">
              <Button
                className={classes.heroButton}
                variant="contained"
                fullWidth
                color="primary"
              >
                button 1
              </Button>
            </Grid>
            <Grid container>
              <Button
                className={classes.buttonTwo}
                variant="contained"
                style={{ color: "primary" }}
              >
                button 2
              </Button>
              <Button
                className={classes.buttonTwo}
                variant="contained"
                style={{ color: "primary" }}
              >
                button 3
              </Button>
            </Grid>
          </div>
        </div>
        <Grid container justify="center" className={classes.Typo}>
          <Typography style={{ color: "white" }} variant="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
      </Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
