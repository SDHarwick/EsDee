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


import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

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


class SiteDetails extends Component {

    constructor(props) {

        super(props);
        this.getUserById = this.getUserById.bind(this);

        this.state = {};

    }



    async getUserById() {
        let site = this.props.siteId;
        console.log(site);

        if (site) {
            const userProfile = await this.props.actions.fetchById('sites', site);

            return userProfile;            
        }
        else {
            return null;
        }

    }

    async componentDidMount() {
        let site = await this.getUserById();
        this.setState({site});

    }




    render() {
        const props = this.props;
        const classes = props.classes;

        if (this.state.site) {
          if (this.state.site.currency_type === "GBP"){
            // this.setState({site.currency_type: '£'})
            this.state.site.currency_type = '£';
          }
          if (this.state.site.currency_type === "USD"){
            this.state.site.currency_type = '$';
          }
          if (this.state.site.currency_type === "EUR"){
            this.state.site.currency_type = '€';
          }
        }

        if (!this.state.site) {
            return(
                <div className={classes.spinner}>
                    <img className={classes.spinner} src="/img/Spinner.gif" />
                </div>
            );
        } else {
          let siteId = this.state.site.id;
          let userId = this.state.site.user_id;
          let userEmail = this.state.site.contact_email;

          let newTo = {
            pathname: '/sites/' + siteId + '/message',
            siteId: siteId,
            userId: userId,
            userEmail: userEmail
          };

            return (
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <div className={classes.cardHeader}>
                          {this.state.site.site_title}
                        </div>
                        <CardContent>
                            <p className={classes.field}><span className={classes.teal}> Asking Price: </span> {this.state.site.currency_type} {this.state.site.asking_price}</p>
                            <p className={classes.field}><span className={classes.teal}> Income: </span> {this.state.site.currency_type} {this.state.site.income}</p>
                            <p className={classes.field}><span className={classes.teal}> Visitors: </span> {this.state.site.visitors} </p>
                            <p className={classes.field}><span className={classes.teal}> Page Views: </span> {this.state.site.page_views} </p>
                            <p className={classes.field}><span className={classes.teal}> URL: </span> {this.state.site.website_url} </p>
                            <p className={classes.field}><span className={classes.teal}> Website Category: </span> {this.state.site.category} </p>

                            <div> 
                                <p className={classes.field}><span className={classes.teal}>Website Description: </span></p> 
                                <div id="description" dangerouslySetInnerHTML={{__html: this.state.site.website_description}} className={classes.field}></div> 
                            </div>

                            <p className={classes.field}><span className={classes.teal}>Contact the seller: </span> {this.state.site.contact_email}</p>
                            <Button>
                                <Link to={'/sites'}>Back to Marketplace</Link>
                            </Button>
                            <Button style={{float:'right'}}>
                                <Link to={newTo}>Message the Seller</Link>
                            </Button>
                        </CardContent>

                    </Card>
                </div>
            );
        }
    }
}




SiteDetails.propTypes = {
    classes: PropTypes.object.isRequired
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(SiteDetails));



