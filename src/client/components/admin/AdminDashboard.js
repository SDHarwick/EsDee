import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Wallpaper from '@material-ui/icons/Wallpaper';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as crudAction from '../../actions/crudAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchSitesSuccess } from '../../actions/sitesAction';
import ApproveListing from './ApproveListing';


import {SITES} from '../../constants/entity';


const styles = theme => ({
    root: {
        paddingTop: 0
    },
    tabs: {
      display: '-webkit-flex',
      minWidth: '100%'
    },
    auto_width: {
      width: 'auto'
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
    }
});

class AdminDashboard extends Component {

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
    let sites = this.props.sites.data;
    let newSites;

    if (sites) {
      newSites = sites.filter(site => site.approved_status == 0);
      // let page = this.getPagination();
    }
    if (!sites) {
      return null;
    }

    if (!newSites) {
      return null;
    }

    return newSites.reverse().slice(start,stop).map(({ site_title, asking_price, id, website_url, currency_type, visitors }) => {
      if (currency_type === 'GBP'){
        currency_type = '£';
      }
      if (currency_type === 'USD'){
        currency_type = '$';
      }
      if (currency_type === 'EUR'){
        currency_type = '€';
      }

      let siteId = id;

      return (
        <div key={id}>
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
            <ApproveListing siteId={siteId} />
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
        <h1 style={{paddingBottom: '15px'}}>Admin Dashboard</h1>

        <Grid container spacing={24} style={{paddingBottom: '15px'}}>
          <Grid item xs>
            {/*<Product data={data.recentProducts}/>*/}
          </Grid>
        </Grid>

        <Paper>
          <List className={classes.root}>
            <div className={classes.tabs}>
              <ListSubheader className={classes.subheader}>
                <Button className={classes.link}>
                  <Link className={classes.link} to={'/admin'}>
                    Pending Review
                  </Link>
                </Button>
              </ListSubheader>
              <ListSubheader className={classes.subheader2}>
                <Button className={classes.link}>
                  <Link className={classes.link} to={'/admin/approved'}>
                    Approved
                  </Link>
                </Button>
              </ListSubheader>
              <ListSubheader className={classes.subheader}>
                <Button className={classes.link}>
                  <Link className={classes.link} to={'/admin/published'}>
                    Published
                  </Link>
                </Button>
              </ListSubheader>
              <ListSubheader className={classes.subheader2}>
                <Button className={classes.link}>
                  <Link className={classes.link} to={'/admin/pendingedits'}>
                    Pending Edits
                  </Link>
                </Button>
              </ListSubheader>
              <ListSubheader className={classes.subheader}>
                <Button className={classes.link}>
                  <Link className={classes.link} to={'/admin/rejected'}>
                    Rejected
                  </Link>
                </Button>
              </ListSubheader>
            </div>
            {this.renderSites(/*this.paginationStart()*/0,5)}
          </List>
        </Paper>

      </div>
      );
  }
}

AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps({ sites }) {
  return { sites };
}


export default connect(mapStateToProps, { fetchSitesSuccess })(withStyles(styles)(AdminDashboard));

