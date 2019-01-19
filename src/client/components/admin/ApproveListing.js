import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { approveListing } from '../../actions/adminActions';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      backgroundColor:'#3a8e39',
      color:'white'
    }
});

class ApproveListing extends Component {

  constructor(props) {
    super(props);
     
  }

  approveListing(siteId) {
    this.props.approveListing(siteId);
    location.reload();
  }


  render() {
    const props = this.props;
    const classes = props.classes;

    return (
      <Button onClick={() => this.approveListing(props.siteId)} className={classes.root}>Approve Listing</Button>
    );
  }
}

ApproveListing.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(null, {approveListing})(withStyles(styles)(ApproveListing));
