import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import { inject, observer } from "mobx-react";

const styles = () => ({
  '@global': {
    body: {
      backgroundColor: "white",
    },
  },
  paper: {
    marginTop: 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: "#f50057",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 3,
  },
  submit: {
    margin: 3,
  },
});


@inject("stores")
@observer
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      checkBox: "",
      phone: ""
    }
  }
  componentDidMount() {

  }

  registerUser = (event) => {
    let {
      stores: { UserStore },
    } = this.props;
    const { firstName, lastName, email, password, phone } = this.state;
    UserStore.registerUser({ username: email, email, firstName, lastName, password, phone_number: phone })
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    let { email, firstName, lastName, password, rePassword, checkBox, phone } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(event) => this.setState({ firstName: event.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName}
                  onChange={(event) => this.setState({ lastName: event.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phone"
                  value={phone}
                  onChange={(event) => this.setState({ phone: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => this.setState({ email: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => this.setState({ password: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="re-password"
                  label="Repet Password"
                  type="password"
                  id="password"
                  value={rePassword}
                  onChange={(event) => this.setState({ rePassword: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value={"allowExtraEmails"} color="primary" onChange={(event) => this.setState({ checkBox: event.target.value })} />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.registerUser}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUp)