import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const styles = theme => ({
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
    marginTop: 1,
  },
  submit: {
    margin: 3,
  },
});

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state={
      password:"",
      email:""
    }
  }
  setUserPassword = (event) => {
    this.setState({ password: event.target.value })
  }
  setUserEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  onSubmit=(event)=>{
    console.log("event====>",this.state)
    event.preventDefault();
  }
  render() {
    let { classes } = this.props;
    let {email,password}=this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={this.setUserEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={this.setUserPassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onSubmit={this.onSubmit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/ForgotPassword" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          {/* <MadeWithLove /> */}
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(SignIn)