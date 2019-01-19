import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {cyan, pink, purple, orange, red} from '@material-ui/core/colors';
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
import { fetchMessagesSuccess } from '../../actions/messagesAction';
import {getUser} from '../../utils/storageUtil';


import {SITES} from '../../constants/entity';


const styles = theme => ({
    root: {
      marginTop: 15,
      paddingTop: 0,
      paddingBottom: 15
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
    subsubheader: {
      fontSize: 24,
      backgroundColor: '#212246',
      color: '#FFFFFF',
      flexBasis: '50%',
      textAlign: 'center',
      padding: 0
    },
    subsubheader2: {
      fontSize: 24,
      backgroundColor: '#899FB7',
      color: '#FFFFFF',
      flexBasis: '50%',
      textAlign: 'center',
      padding: 0,
      border: '4px solid #5e9fe5',
      textDecoration: 'underline',
      textDecorationColor: '#5e9fe5'
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

class MessageDashboard extends Component {

  async componentDidMount() {
    this.props.fetchMessagesSuccess();
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


  renderMessages(start, stop) {
    console.log(this.props);
    let curUser = getUser();
    let messages = this.props.messages.data;
    let newMessages;

    if (messages) {
      newMessages = messages.filter(message => message.recipient_id == curUser);
      // let page = this.getPagination();
    }
    if (!messages) {
      return null;
    }

    if (!newMessages) {
      return null;
    }

    return newMessages.reverse().slice(start,stop).map(({ subject, body, id, sender_id, recipient_id, site_id }) => {

      let newTo = {
        pathname: '/account/messages/' + id,
        subject: subject,
        body: body,
        sender_id: sender_id,
        recipient_id: recipient_id,
        site_id: site_id
      };

      let messageId = id;

      return (
        <div key={id}>
          <ListItem>
            <ListItemIcon>
              <Avatar>
                <Wallpaper />
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary="Subject"
              secondary={subject}
            />
            
            <Button><Link to={newTo}>View Message</Link></Button>
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
          <List className={classes.root}>
            <div className={classes.tabs}>
              <ListSubheader className={classes.subsubheader2}>
                <Button className={classes.link}>
                  <Link className={classes.link} style={{textDecorationColor: '#5e9fe5'}} to={'/account/messages'}>
                    My Messages
                  </Link>
                </Button>
              </ListSubheader>
              <ListSubheader className={classes.subsubheader}>
                <Button className={classes.link}>
                  <Link className={classes.link} to={'/account/messages/sent'}>
                    My Sent Messages
                  </Link>
                </Button>
              </ListSubheader>
            </div>
            {this.renderMessages(/*this.paginationStart()*/0,5)}
          </List>
        </Paper>

      </div>
      );
  }
}

MessageDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps({ messages }) {
  return { messages };
}


export default connect(mapStateToProps, { fetchMessagesSuccess })(withStyles(styles)(MessageDashboard));

