import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import { createAppScript, createTrackingScript } from './createScripts';

//Material UI Injections for server rendering
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { theme } from '../../config/theme';

const createApp = (store, props, muiTheme) => renderToString(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <RouterContext {...props} />
    </Provider>
  </MuiThemeProvider>
);

const buildPage = ({ componentHTML, initialState, headAssets }) => {
  return `
<!doctype html>
<html>
  <head>
    ${headAssets.title.toString()}
    ${headAssets.meta.toString()}
    ${headAssets.link.toString()}
    ${createTrackingScript()}
  </head>
  <body>
    <div id="app">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    ${createAppScript()}
  </body>
</html>`;
};

export default (store, props, req) => {
  const initialState = store.getState();
  const muiTheme = theme(req);
  const componentHTML = createApp(store, props, muiTheme);
  const headAssets = Helmet.rewind();
  return buildPage({ componentHTML, initialState, headAssets });
};

