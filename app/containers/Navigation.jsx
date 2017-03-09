import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';
import Paper from 'material-ui/Paper';
import {List, ListItem } from 'material-ui/List';

const cx = classNames.bind(styles);

const handleNavigate = (value) => {
  browserHistory.push(value);
};

const Navigation = ({ user, logOut }) => {
    return (
      <Paper zDepth={2} rounded={false}>
        <List className={cx('Navigation')} >
          <ListItem 
            primaryText="Home"
            value="/"
            onTouchTap={() => handleNavigate("/")}
          />
          { user.authenticated ? (
            <ListItem
              primaryText="Logout"
              onTouchTap={logOut}
            />
          ) : (
            <ListItem
              primaryText="Login"
              value="/login"
              onTouchTap={() => handleNavigate("/login")}
            />
          )}
          <ListItem 
            primaryText="Dashboard"
            value="/"
            onTouchTap={() => handleNavigate("/dashboard")}
          />
          <ListItem 
            primaryText="About"
            value="/"
            onTouchTap={() => handleNavigate("/about")}
          />
        </List>
      </Paper>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
