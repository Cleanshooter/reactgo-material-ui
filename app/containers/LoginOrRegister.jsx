import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from '../actions/users';
import styles from '../css/components/login';
import hourGlassSvg from '../images/hourglass.svg';
import {Grid, Cell} from 'material-grid/dist';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const cx = classNames.bind(styles);

class LoginOrRegister extends Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.refs);
    const { manualLogin, signUp, user: { isLogin } } = this.props;
    const username = this.refs.username.input.value;
    const password = this.refs.password.input.value;
    
    if (isLogin) {
      manualLogin({ username, password });
    } else {
      signUp({ username, password });
    }
  }

  renderHeader() {
    const { user: { isLogin }, toggleLoginMode } = this.props;
    if (isLogin) {
      return (
        <div>
          <h1 className={cx('heading')}>Login</h1>
          <div className={cx('alternative')}>
            Not what you want? <br/>
            <a
              className={cx('alternative-link')}
              onClick={toggleLoginMode}
            >Register an Account</a>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1 className={cx('heading')}>Register</h1>
        <div className={cx('alternative')}>
          Already have an account? <br/>
          <a
            className={cx('alternative-link')}
            onClick={toggleLoginMode}
          >Login</a>
        </div>
      </div>
    );
  }

  render() {
    const { isWaiting, message, isLogin } = this.props.user;

    return (
      <Grid>
        <Cell col={4} offset={4}>
          <Paper zDepth={2} rounded={false}>
            { this.renderHeader() }
            <img className={cx('loading')} alt="loading" src={hourGlassSvg} />
            <div className={cx('email-container')}>
              <form onSubmit={this.handleOnSubmit}>
                <TextField
                  floatingLabelText="Username"
                  ref="username"
                  fullWidth={true}
                  id="username"
                />
                <TextField
                  floatingLabelText="Password"
                  ref="password"
                  fullWidth={true}
                  type="password"
                  id="password"
                />
                <p className={cx('message', {'message-show': message && message.length > 0})}>
                  {message}
                </p>
                <RaisedButton 
                  label={isLogin ? 'Login' : 'Register'} 
                  secondary={true} 
                  type="submit"
                  fullWidth={true}
                />
              </form>
            </div>
          </Paper>
        </Cell>
      </Grid>
    );
  }
}

LoginOrRegister.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  toggleLoginMode: PropTypes.func.isRequired
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps({user}) {
  return {
    user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps, { manualLogin, signUp, toggleLoginMode })(LoginOrRegister);

