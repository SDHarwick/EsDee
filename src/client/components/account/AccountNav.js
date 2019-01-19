import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {cyan, pink, purple, orange, red, teal} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import {AddShoppingCart, ThumbUp, Assessment, Face, AddLocation, AddCircle} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Wallpaper from '@material-ui/icons/Wallpaper';
import _ from 'lodash';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as crudAction from '../../actions/crudAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchSitesSuccess } from '../../actions/sitesAction';

import {getUser} from '../../utils/storageUtil';
import {SITES} from '../../constants/entity';



const styles = theme => ({
    root: {
      paddingTop: 0,
      paddingBottom: 0
    },
    tabs: {
      display: '-webkit-flex',
      minWidth: '100%'
    },
    subheader: {
      fontSize: 24,
      backgroundColor: '#212246',
      color: '#FFFFFF',
      flexBasis: '25%',
      textAlign: 'center',
      padding: 0
    },
    subheader2: {
      fontSize: 24,
      backgroundColor: '#899FB7',
      color: '#FFFFFF',
      flexBasis: '25%',
      textAlign: 'center',
      padding: 0
    },
    link: {
      color: '#FFFFFF !important',
      fontSize: 24,
      verticalAlign: 'middle',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    },
    account_header: {
      fontSize:'42px',
      textAlign:'center',
      paddingTop: '50px',
      color: '#212246'
    }
});


class AccountNav extends Component {

    render() {
        const props = this.props;
        const classes = props.classes;
        
        return(
            <div>
            <h1 className={classes.account_header} style={{paddingBottom: '15px'}}>My Profile</h1>
            <Paper>
              <List className={classes.root}>
              <div className={classes.tabs}>
                <ListSubheader className={classes.subheader}>
                  <Button className={classes.link}>
                    <Link className={classes.link} to={'/account'}>
                      My Sites
                    </Link>
                  </Button>
                </ListSubheader>
                <ListSubheader className={classes.subheader2}>
                  <Button className={classes.link}>
                    <Link className={classes.link} to={'/account/watchlist'}>
                      My Watch List
                    </Link>
                  </Button>
                </ListSubheader>
                <ListSubheader className={classes.subheader}>
                  <Button className={classes.link}>
                    <Link className={classes.link} to={'/account/purchases'}>
                      My Purchases
                    </Link>
                  </Button>
                </ListSubheader>
                <ListSubheader className={classes.subheader2}>
                  <Button className={classes.link}>
                    <Link className={classes.link} to={'/account/messages'}>
                      My Messages
                    </Link>
                  </Button>
                </ListSubheader>
                </div>
              </List>
            </Paper>
            </div>
        );
    }
}


AccountNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AccountNav);

