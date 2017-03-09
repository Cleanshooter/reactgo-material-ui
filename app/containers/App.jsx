import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import Navigation from '../containers/Navigation';
import Message from '../containers/Message';
import styles from '../css/main';
import AppBar from 'material-ui/AppBar';
import 'material-grid/dist/css/material-grid.css';
import {Grid, Cell} from 'material-grid/dist';

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  return (
  	<div>
  		<Grid noSpacing customClass={cx('Grid')}>
	    	<Cell col={12}>
	    		<AppBar
				    title="ReactoGo Material UI Demo"
				    showMenuIconButton={false}
				  />
	    	</Cell>
	    </Grid>
			<Grid noSpacing customClass={cx('Grid')}>
				<Cell col={2}>
					<Navigation />
				</Cell>
			  <Cell col={10} customClass={cx('PaddedCell')}>
			  	<Message />
	        {children}
			  </Cell>
	    </Grid>
  	</div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
