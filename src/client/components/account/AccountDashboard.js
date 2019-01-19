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
      paddingTop: 0
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
    new_site: {
      color: '#FFFFFF !important',
      fontSize: 24,
      backgroundColor: '#212246',
      verticalAlign: 'middle',
      justifyContent: 'center',
      height: '100%',
      width: '100%'      
    },
    bottom: {
      paddingTop: '35px'
    },
    even_space: {
      display: '-webkit-flex'
    },
    auto_width:{
      width: 'auto'
    },
    account_header: {
      fontSize:'42px',
      textAlign:'center',
      paddingTop: '50px',
      color: '#212246'
    }
});

class AccountDashboard extends Component {

  async componentDidMount() {
    this.props.fetchSitesSuccess();
  }

  // paginationStart(page) {
  //   let n = page || 0;
  //   return n;
  // }

  // paginate() {
  //   this.paginationStart(2);
  // }

  getPagination() {
    // Add Logic for Pagination
  }


  renderSites(start, stop) {
    const props = this.props;
    const classes = props.classes;
    let user = getUser();

    let sites = this.props.sites.data;
    let newSites;
    if (sites) {
      newSites = sites.filter(site => site.user_id == user);
      // let page = this.getPagination();
    }
    // let page = this.getPagination();
    if (!sites) {
      return null;
    }
    if (!newSites) {
      return null;
    }

    return newSites.reverse().slice(start,stop).map(({ site_title, asking_price, id, website_url, currency_type, visitors }) => {
      if (currency_type === "GBP"){
        currency_type = '£';
      }
      if (currency_type === "USD"){
        currency_type = '$';
      }
      if (currency_type === "EUR"){
        currency_type = '€';
      }

      return (
        <div className={classes.even_space} key={id}>
          <ListItem>
            <ListItemIcon>
              <Avatar>
                <Wallpaper />
              </Avatar>
            </ListItemIcon>
            <Link to={'/sites/' + id}>
              <ListItemText
                primary="Listing Title:"
                secondary={site_title} 
              />
            </Link>
            <ListItemText
              primary="Asking Price:"
              secondary={currency_type + " " + asking_price}
            />
            <ListItemText
              primary="Listing Visitors:"
              secondary={visitors} 
            />
            <ListItem
              className={classes.auto_width}
              button
              component="a"
              href={website_url} 
            >
              <ListItemText
                primary="Listing URL: "
                secondary={website_url}
              />
            </ListItem>
          </ListItem>
          <Divider inset={true}/>
        </div>
      );
    });
  }

  render() {
    const props = this.props;
    const classes = props.classes;

    return (
      <div>
        <Paper>
        {this.renderSites(/*this.paginationStart()*/0,5)}
        </Paper>

        <div className={classes.bottom}>
        <Button className={classes.new_site}>
          <Link className={classes.new_site} to={'/new'}>Add New Site
          </Link>
        </Button>
        </div>
      </div>
      );
  }
}

AccountDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps({ sites }) {
  return { sites };
}


export default connect(mapStateToProps, { fetchSitesSuccess })(withStyles(styles)(AccountDashboard));

