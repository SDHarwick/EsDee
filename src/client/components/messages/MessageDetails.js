import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {teal} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as crudAction from '../../actions/crudAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getUser} from '../../utils/storageUtil';
import {USERS} from '../../constants/entity';

// Import custom components
import renderText from '../common/form/renderText';

const styles = {
    root: {
      minWidth: 320,
      maxWidth: 800,
      minHeight: 1250,
      top: '15%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    card: {
      padding: 20,
      overflow: 'auto'
    },
    cardHeader: {
      paddingTop: '35px',
      paddingBottom: '15px',
      fontSize: '48px',
      textAlign: 'center',
      color: '#899FB7'
    },
    btnDiv: {
      textAlign: 'center'
    },
    btn: {
      marginTop: 21,
    },
    teal: {
      color: '#899FB7'
    },
    field: {
      fontSize: '24px',
      paddingBottom: '20px'
    },
    spinner: {
      minHeight: '400px'
    }
};


class MessageDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {};

    }


    render() {
        const props = this.props;
        const classes = props.classes;
        console.log(this.props);


        if (!this.props.location) {
            return(
                <div className={classes.spinner}>
                    <img className={classes.spinner} src="/img/Spinner.gif" />
                </div>
            );
        } else {
          let siteId = this.props.location.site_id;
          let userId = this.props.location.recipient_id;
          let senderId = this.props.location.sender_id;
          // let userEmail = this.state.site.contact_email;

          let newTo = {
            pathname: '/account/messages/' + this.props.match.params.id + '/reply',
            siteId: siteId,
            userId: userId,
            senderId: senderId
            // userEmail: userEmail
          };

            return (
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <div className={classes.cardHeader}>
                          Your Message
                        </div>
                        <CardContent>
                            <p className={classes.field}><span className={classes.teal}> Subject: </span> {this.props.location.subject}</p>
                            <div> 
                                <p className={classes.field}><span className={classes.teal}>Message Body: </span></p> 
                                <p dangerouslySetInnerHTML={{__html: this.props.location.body}} className={classes.field}></p> 
                            </div>
                                <Link to={'/account/messages'}><Button>Back to Message Dashboard</Button></Link>
                                <Link to={newTo}><Button style={{float:'right'}}>Reply To Sender</Button></Link>
                            

                            { /*<p className={classes.field}><span className={classes.teal}>Contact the seller: </span> {this.state.site.contact_email}</p>
                            <Button>
                                <Link to={'/sites'}>Back to Marketplace</Link>
                            </Button>
                            <Button style={{float:'right'}}>
                                <Link to={newTo}>Message the Seller</Link>
                            </Button>*/ }
                        </CardContent>

                    </Card>
                </div>
            );
        }
    }
}




MessageDetails.propTypes = {
    classes: PropTypes.object.isRequired
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(MessageDetails));



