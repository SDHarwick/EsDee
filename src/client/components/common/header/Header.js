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
import { fetchUserSuccess } from '../../../actions/userActions';
import Logout from './Logout';


import * as authService from '../../../services/authService';

const drawerWidth = 250;

const styles = theme => ({
    appBar: {
        backgroundColor: '#f8f8f8',
        position: 'absolute',
        zIndex: theme.zIndex.navDrawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: '100%',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: -15
    },
    flex: {
        flex: 1
    }
    // logo: {
    //     backgroundImage: url('./WSBLogoNew.png')
    // }
});

class Header extends Component {

    constructor(props) {
        super(props);

    }

    async componentDidMount() {
        this.props.fetchUserSuccess();
    }


    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }


    renderContent() {
        // const {classes, navDrawerOpen, handleToggleDrawer, accountType, credits, isAuthenticated} = this.props;
        if (this.props.accountType === 'admin'){
            return (
                <span>
                    <Button><Link to={'/account'}>My Account</Link></Button>
                    <Button><Link to={'/admin'}>Admin</Link></Button>
                    <Logout />
                </span>
            );
        } else if(this.props.isAuthenticated) {
            return (
                <span>
                    <Payments />
                    <span style={{color:'black', paddingLeft:'5px'}}>Credits: {this.props.credits || 0}</span>
                    <Button><Link to={'/account'}>My Account</Link></Button>
                    <Button><Link to={'/admin'}>Admin</Link></Button>
                    <Logout />
                </span>
            );
        } else {
            return(
                <span>
                    <Button><Link to={'/signup'}>Sign Up</Link></Button>
                    <Button><Link to={'/login'}>Login</Link></Button>
                </span>
            );
        }

    }


    render() {
        const {classes, navDrawerOpen, handleToggleDrawer, accountType, credits, isAuthenticated} = this.props;

        return (
            <div>
                <AppBar className={classNames(classes.appBar, navDrawerOpen && classes.appBarShift)}>
                    <Toolbar>
                        <IconButton aria-label="Menu" onClick={handleToggleDrawer}
                                    className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            <Link to={'/'}><img className="logo-2" src="https://esdee.netlify.com/public/images/EsDeeLogoReal.png" /></Link>
                        </Typography>
                        <Button><Link to={'/sites'}>Marketplace</Link></Button>
                        <Button><Link to={'/blog'}>Blog</Link></Button>
                        <Button><Link to={'/about'}>About Us</Link></Button>
                        {this.renderContent()} 
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};


const mapStateToProps = state => {
    if(state.user.data) {
        return {
            isAuthenticated: state.auth.isAuthenticated,
            credits: state.user.data.credits,
            accountType: state.user.data.account_type
        };
    } else {
        return {
            isAuthenticated: state.auth.isAuthenticated
        };
    }
};

// function mapStateToProps({auth, user}) {
//   return {
//     auth,
//     user
//   };
// }


/**
 * Map the actions to props.
 */
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(Object.assign({}, authService), dispatch),
//     user: bindActionCreators({fetchUserSuccess: fetchUserSuccess}, dispatch)
// });

export default connect(mapStateToProps, /*mapDispatchToProps*/ {fetchUserSuccess})(withStyles(styles)(Header));
