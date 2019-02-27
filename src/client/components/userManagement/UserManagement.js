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
import { fetchUsersSuccess } from '../../actions/userActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {USERS} from '../../constants/entity';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import DeleteUser from './DeleteUser';

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

class UserManagement extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filter_value: '',
      filter_val: '',
      count: 10
    };
  }

  async componentDidMount() {
    this.props.fetchUsersSuccess();
    window.scrollTo(0, 0)
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

  renderUsers(start, stop) {
    const props = this.props;
    const classes = props.classes;
    console.log(this.props);
    let users = this.props.users.data;
    let newUsers;

    if (users) {
      newUsers = users.filter(user => user.status == 0);
    }

    if (this.state.filter_value && this.state.filter_val) {
      let filter = this.state.filter_value
      let val = this.state.filter_val
      console.log(filter);
      newUsers = newUsers.filter(user => {
        console.log(user[filter]);
        user[this.state.filter_value] == val
      })
    }

    if (this.state.filter_val) {
      let filter = this.state.filter_val
      console.log(filter);
      // newUsers = newUsers.filter(user => user.filter == )
    }

    if (!users) {
      return (
        <div className={classes.spinner}>
            <img className={classes.spinner} src="/img/Spinner.gif" />
        </div>
      );
    }
    if (!newUsers) {
      return (
        <div className={classes.spinner}>
            <img className={classes.spinner} src="/img/Spinner.gif" />
        </div>
      );
    }

    return newUsers.reverse().slice(start,stop).map(({ id, first_name, last_name, email }) => {


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
              <Grid item xl={3} lg={3} md={3}>
                <ListItemText
                  primary="Fist Name:"
                  secondary={first_name} 
                />
              </Grid>
              <Grid item xl={3} lg={3} md={3}>
                <ListItemText
                  primary="Last Name:"
                  secondary={last_name} 
                />
              </Grid>
              <Grid item xl={3} lg={3} md={3}>
                <ListItemText
                  primary="Email:"
                  secondary={email} 
                />
              </Grid>
              <Grid className={classes.align_right} item xl={1} lg={1}>
                <DeleteUser userId={id} />
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
        <h1 className={classes.search_header}> SEARCH FOR USERS</h1>
        <Grid container className={classes.search_root} spacing={24}>
          <Grid item>
            <InputLabel htmlFor="filter-helper">Search By..</InputLabel>
            <Select onChange={this.handleChange} input={<Input name="filter_value" id="filter-helper" />} className={classes.search_field}  name="filter_value" value={this.state.filter_value}>
              {/* <MenuItem value="" selected disabled>
                Search By..
              </MenuItem> */}
              <MenuItem value="first_name">First Name</MenuItem>
              <MenuItem value="last_name">Last name</MenuItem>
              <MenuItem value="email">Email</MenuItem>
            </Select>            
          </Grid>
          <Grid item xs={6}>
            <input onChange={this.handleChange} style={{minWidth:'100%', lineHeight:'30px', fontSize:'20px'}} name="filter_val" label="Category">
            </input>            
          </Grid>
          <Grid item>
          
            <Button name="add_filter" className={classes.search_button} label="Add">Search

            </Button>            
          </Grid>
        </Grid>


        <Paper>
          <List className={classes.root}>
            <ListSubheader className={classes.subheader}>User List</ListSubheader>
              {this.renderUsers(/*this.paginationStart()*/0, this.state.count || 10)}
          </List>
        </Paper>
        <br />
        <br />
        <div className={classes.site_loader}>
          <Button className={classes.site_loader} onClick={() => this.getPagination()}>Load More Users</Button>
        </div>

        <Grid container>
        </Grid>

      </div>
      );
  }
}

UserManagement.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsersSuccess })(withStyles(styles)(UserManagement));



