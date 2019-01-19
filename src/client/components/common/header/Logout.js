import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import Payments from '../../payments/Payments';



import * as authService from '../../../services/authService';

class Logout extends Component {
    constructor(props) {
        super(props);
    }


    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }


    render() {
        return (
            <Button onClick={this.logOut.bind(this)}>Logout</Button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, authService), dispatch)
});

export default connect(null, mapDispatchToProps)(Logout);