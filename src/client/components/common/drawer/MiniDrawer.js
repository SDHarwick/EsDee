import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import * as crudAction from '../../../actions/crudAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getUser} from '../../../utils/storageUtil';
import {USERS} from '../../../constants/entity';

const drawerWidth = 250;

const styles = theme => ({
    drawerPaper: {
        marginTop: '80px',
        position: 'relative',
        height: 'auto',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 60,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        height: 56,
        [theme.breakpoints.up('sm')]: {
            height: 64,
        },
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
});






class MiniDrawer extends Component {

    constructor(props) {
        super(props);
        this.getUserById = this.getUserById.bind(this);

    }

    async getUserById() {
        let user = getUser();
        const userProfile = await this.props.actions.fetchById('users', user);

        return userProfile;
    }

    async componentDidMount() {
        let user = await this.getUserById();
        this.setState({user});
    }





    render() {
        const props = this.props;
        const classes = props.classes;
        let {navDrawerOpen} = props;

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
                }}
                open={navDrawerOpen}
            >
                <div className={classes.drawerHeader}/>
                <Divider />

                <div className={classes.root}>
                    <Avatar alt="User" className="avatar-2" src=" https://esdee.netlify.com/public/images/avatar5.png" className={classNames(classes.avatar, classes.bigAvatar)}/>
                    <Typography component="p" className={classes.avatar}>
                        {this.state && this.state.hasOwnProperty('user') ? (this.state.user.first_name) : 'John'} {this.state && this.state.hasOwnProperty('user') ? (this.state.user.last_name) : 'Doe'}
                    </Typography>
                    <Typography component="span" className={classes.avatar}>
                        {this.state && this.state.hasOwnProperty('user') ? (this.state.user.email) : 'e@mail.com'}
                    </Typography>
                </div>
                <div className="box" style={{background: '#eee', padding: '8px 16px'}}>
                    MAIN NAVIGATION
                </div>


                <List>
                    <Link to={'/account'}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Sites"/>
                        </ListItem>
                    </Link>
                    <Link to={'/account/watchlist'}>
                        <ListItem button>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Watch List"/>
                        </ListItem>
                    </Link>
                    <Link to={'/account/purchases'}>
                        <ListItem button>
                            <ListItemIcon>
                                <LocalTaxiIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Purchs"/>
                        </ListItem>
                    </Link>
                    <Link to={'/account/messages'}>
                        <ListItem button>
                            <ListItemIcon>
                                <NotificationsIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Messages"/>
                        </ListItem>
                    </Link>
                    <Link to={'/account/help'}>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Profile"/>
                    </ListItem>
                    </Link>
                    <Divider/>
                    <Link to={'/account/help'}>
                        <ListItem button>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help"/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});


MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    navDrawerOpen: PropTypes.bool
};

// export default withStyles(styles)(MiniDrawer);
export default connect(null, mapDispatchToProps)(withStyles(styles)(MiniDrawer));







// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import {withStyles} from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
// import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';
// import HomeIcon from '@material-ui/icons/Home';
// import PersonIcon from '@material-ui/icons/Person';
// import SettingsIcon from '@material-ui/icons/Settings';
// import HelpIcon from '@material-ui/icons/Help';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
// import {USERS} from '../../../constants/entity';
// import * as crudAction from '../../../actions/crudAction';


// const drawerWidth = 250;

// const styles = theme => ({
//     drawerPaper: {
//         position: 'relative',
//         height: 'auto',
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawerPaperClose: {
//         width: 60,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     drawerInner: {
//         // Make the items inside not wrap when transitioning:
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         padding: '0 8px',
//         height: 56,
//         [theme.breakpoints.up('sm')]: {
//             height: 64,
//         },
//     },
//     avatar: {
//         margin: 10,
//     },
//     bigAvatar: {
//         width: 60,
//         height: 60,
//     },
// });

// const MiniDrawer = (props) => {
//     console.log(props);

//     let {navDrawerOpen} = props;
//     const classes = props.classes;

//     return (
//         <Drawer
//             variant="permanent"
//             classes={{
//                 paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
//             }}
//             open={navDrawerOpen}
//         >
//             <div className={classes.drawerHeader}/>
//             <Divider />

//             <div className={classes.root}>
//                 <Avatar alt="User" src="/img/avatar5.png" className={classNames(classes.avatar, classes.bigAvatar)}/>
//                 <Typography component="p" className={classes.avatar}>
//                     John Doe
//                 </Typography>
//                 <Typography component="span" className={classes.avatar}>
//                     john.doe@example.com
//                 </Typography>
//             </div>
//             <div className="box" style={{background: '#eee', padding: '8px 16px'}}>
//                 MAIN NAVIGATION
//             </div>

//             <List>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <HomeIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Dashboard"/>
//                 </ListItem>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <PersonIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Users"/>
//                 </ListItem>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <LocalTaxiIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Products"/>
//                 </ListItem>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <NotificationsIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Notifications"/>
//                 </ListItem>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <SettingsIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Settings"/>
//                 </ListItem>
//                 <Divider/>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <HelpIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Help"/>
//                 </ListItem>
//             </List>
//         </Drawer>
//     );
// };

// MiniDrawer.propTypes = {
//     classes: PropTypes.object.isRequired,
//     navDrawerOpen: PropTypes.bool
// };

// export default withStyles(styles)(MiniDrawer);



// class SignUpContainer extends Component {

//     constructor(props) {
//         super(props);

//         this.submitForm = this.submitForm.bind(this);
//     }

//     /**
//      * Submit the form.
//      *
//      * @param {object} formProps
//      */
//     submitForm(formProps) {

//         this.props.actions.submitForm(USERS, formProps);
//     }

//     render() {

//         return (
//             <Drawer
//                 variant="permanent"
//                 classes={{
//                     paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
//                 }}
//                 open={navDrawerOpen}
//             >
//                 <div className={classes.drawerHeader}/>
//                 <Divider />

//                 <div className={classes.root}>
//                     <Avatar alt="User" src="/img/avatar5.png" className={classNames(classes.avatar, classes.bigAvatar)}/>
//                     <Typography component="p" className={classes.avatar}>
//                         John Doe
//                     </Typography>
//                     <Typography component="span" className={classes.avatar}>
//                         john.doe@example.com
//                     </Typography>
//                 </div>
//                 <div className="box" style={{background: '#eee', padding: '8px 16px'}}>
//                     MAIN NAVIGATION
//                 </div>

//                 <List>
//                     <ListItem button>
//                         <ListItemIcon>
//                             <HomeIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Dashboard"/>
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon>
//                             <PersonIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Users"/>
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon>
//                             <LocalTaxiIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Products"/>
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon>
//                             <NotificationsIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Notifications"/>
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon>
//                             <SettingsIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Settings"/>
//                     </ListItem>
//                     <Divider/>
//                     <ListItem button>
//                         <ListItemIcon>
//                             <HelpIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Help"/>
//                     </ListItem>
//                 </List>
//             </Drawer>
//         );
//     }

// }

// /**
//  * Map the actions to props.
//  */
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
// });

// MiniDrawer.propTypes = {
//     classes: PropTypes.object.isRequired,
//     navDrawerOpen: PropTypes.bool
// };

// // export default connect(null, mapDispatchToProps)(SignUpContainer);

// // export default connect(null, mapDispatchToProps)(withStyles(styles)(MiniDrawer));
