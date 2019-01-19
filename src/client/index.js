import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {teal} from '@material-ui/core/colors';
import {red} from '@material-ui/core/colors';
import './style.css';
import './draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Import custom components
import store from './store/store';
import {verifyToken} from './actions/tokenAction';
import App from './containers/app/AppContainer';

const mountNode = document.getElementById('root');
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#212246'
        },
        secondary: {
            main: '#5e9fe5'
        }
    }
});

// Used to log in if token is valid
store.dispatch(verifyToken());

const renderApp = (Component) => {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <Component />
            </Provider>
        </MuiThemeProvider>,
        mountNode
    );
};

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/app/AppContainer', () => {
        // if you are using harmony modules ({modules:false})
        renderApp(App);
        // in all other cases - re-require App manually
        renderApp(require('./containers/app/AppContainer'));
    });
}