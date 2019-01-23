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
import {Field, reduxForm} from 'redux-form';
import * as crudAction from '../../actions/crudAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchSitesSuccess } from '../../actions/sitesAction';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {SITES} from '../../constants/entity';
import Input from '@material-ui/core/Input';
import SummaryBox from './SummaryBox';
import Product from './Product';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        paddingTop: 0
    },
    even_space: {
      display: '-webkit-flex'
    },
    subheader: {
      fontSize: 24,
      backgroundColor: '#212246',
      color: '#FFFFFF'
    },
    auto_width:{
      width: 'auto'
    },
    search_root: {
      fontSize: 24,
      backgroundColor: '#FFFFFF',
      borderRadius: '5px',
      margin: '50px 0px 50px 2%',
      width: '95%',
      alignItems: 'center',
      verticalAlign: 'middle',
      justifyContent: 'space-around'
    },
    search_header: {
      fontSize:'42px',
      textAlign:'center',
      paddingTop: '50px',
      color: '#212246'
    },
    search_field: {
      minWidth: '200px'
    },
    search_button: {
      backgroundColor: '#212246',
      color: '#fff'
    },
    float_right: {
      float: 'right'
    },
    site_loader: {
      textAlign: 'center',
      justifyContent: 'space-around',
      paddingBottom: '55px'
    },
    align_right: {
      textAlign: 'right'
    },
    spinner: {
      minHeight: '400px'
    }
});

class SitesDashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filter_value: '',
      count: 10
    };
  }

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
    if (this.state) {
      this.setState({count: this.state.count + 10});
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderSites(start, stop) {
    const props = this.props;
    const classes = props.classes;
    let sites = this.props.sites.data;
    let newSites;

    if (sites) {
      newSites = sites.filter(site => site.approved_status == 1);
    }

    if (!sites) {
      return (
        <div className={classes.spinner}>
            <img className={classes.spinner} src="/img/Spinner.gif" />
        </div>
      );
    }
    if (!newSites) {
      return (
        <div className={classes.spinner}>
            <img className={classes.spinner} src="/img/Spinner.gif" />
        </div>
      );
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
        <div key={id}>
          <Grid container>
            <ListItem>
              <Grid item xl={1} lg={1}>
                <ListItemIcon>
                  <Avatar>
                    <Wallpaper />
                  </Avatar>
                </ListItemIcon>
              </Grid>
              <Grid item xl={2} lg={2}>
                <Link to={'/sites/' + id}>
                  <ListItemText
                    primary="Listing Title:"
                    secondary={site_title} 
                  />
                </Link>
              </Grid>
              <Grid item xl={3} lg={3}>
                <ListItemText
                  primary="Asking Price:"
                  secondary={currency_type + " " + asking_price}
                />
              </Grid>
              <Grid item xl={2} lg={2}>
                <ListItemText
                  primary="Listing Visitors:"
                  secondary={visitors} 
                />
              </Grid>
              <Grid item xl={3} lg={3}>
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
              </Grid>
              <Grid className={classes.align_right} item xl={1} lg={1}>
              <svg className="star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
              </Grid>
            </ListItem>
          </Grid>
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
        <h1 className={classes.search_header}> SEARCH FOR LISTINGS</h1>
        <Grid container className={classes.search_root} spacing={24}>
          <Grid item>
            <InputLabel htmlFor="filter-helper">Search By..</InputLabel>
            <Select onChange={this.handleChange} input={<Input name="filter_value" id="filter-helper" />} className={classes.search_field}  name="filter_value" value={this.state.filter_value}>
              {/* <MenuItem value="" selected disabled>
                Search By..
              </MenuItem> */}
              <MenuItem value="asking_price">Asking Price</MenuItem>
              <MenuItem value="visitors">Visitors</MenuItem>
              <MenuItem value="category">Catergory</MenuItem>
              <MenuItem value="revenue">Revenue</MenuItem>
            </Select>            
          </Grid>
          <Grid item xs={6}>
            <input style={{minWidth:'100%', lineHeight:'30px', fontSize:'20px'}} name="filter_value" label="Category">
            </input>            
          </Grid>
          <Grid item>
          
            <Button name="add_filter" className={classes.search_button} label="Add">Search

            </Button>            
          </Grid>
        </Grid>


        <Paper>
          <List className={classes.root}>
            <ListSubheader className={classes.subheader}>Listings For Sale</ListSubheader>
              {this.renderSites(/*this.paginationStart()*/0, this.state.count || 10)}
          </List>
        </Paper>
        <br />
        <br />
        <div className={classes.site_loader}>
          <Button className={classes.site_loader} onClick={() => this.getPagination()}>Load More Listings</Button>
        </div>

        <Grid container>
        </Grid>

      </div>
      );
  }
}

SitesDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps({ sites }) {
  return { sites };
}


export default connect(mapStateToProps, { fetchSitesSuccess })(withStyles(styles)(SitesDashboard));

