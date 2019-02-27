import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { deleteUserSuccess } from '../../actions/userActions';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      backgroundColor:'red',
      color:'white'
    }
});

class DeleteUser extends Component {

  constructor(props) {
    super(props);
     
  }

  deleteUserSuccess(userId) {
    this.props.deleteUserSuccess(userId);
    location.reload();
  }


  render() {
    const props = this.props;
    const classes = props.classes;

    return (
      <Button onClick={() => this.deleteUserSuccess(props.userId)} className={classes.root}>Remove User</Button>
    );
  }
}

DeleteUser.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(null, {deleteUserSuccess})(withStyles(styles)(DeleteUser));
