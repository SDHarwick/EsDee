import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

// Import custom components
import MainRouter from '../../routers/routes';

class AppContainer extends Component {

    render() {

        return (
            <div>
                <div style={{minHeight: '800px'}}>
                    <MainRouter />
                </div>
            </div>
        );
    }
}

export default hot(module)(AppContainer);