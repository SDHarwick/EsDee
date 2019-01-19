import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
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
        textAlign: 'center'
    },
    btnDiv: {
        textAlign: 'center'
    },
    btn: {
        marginTop: 21,
    }
};


class SiteEditForm extends Component {

    constructor(props) {

        super(props);
        this.getUserById = this.getUserById.bind(this);

        this.state = {};

    }



    async getUserById() {
        let user = getUser();
        let site = this.props.siteId;
        console.log(site);
        const userProfile = await this.props.actions.fetchById('sites', site);

        return userProfile;
    }

    async componentDidMount() {
        let site = await this.getUserById();
        this.setState({site});

        // if (this.state.site) {
        //     contactEmail = this.state.site.contact_email
        //     console.log(contactEmail);
        // }

        // if (contactEmail) {
        //     this.props.initialize({ contact_email: contactEmail });
        // }
    }

    // componentDidUpdate() {
    //     if (this.state.site) {
    //         contactEmail = this.state.site.contact_email
    //         console.log(contactEmail);
    //     }

    //     if (contactEmail) {
    //         this.props.initialize({ contact_email: contactEmail });
    //     }
    // }


    render() {
        const props = this.props;
        console.log(this.props);
        console.log(this.state);
        let contactEmail;

        const {handleSubmit, onSubmit} = props;
        const classes = props.classes;




        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.cardHeader}
                        title="Sell Your Website"
                    />
                    <CardContent>
                        <form method="post" onSubmit={handleSubmit(onSubmit)}>
                            <br />
                            <Field
                                type="text"
                                name="contact_email"
                                component={renderText}
                                label="Contact Email"
                                value={ contactEmail }
                            />
                            <Field
                                type="text"
                                name="site_title"
                                component={renderText}
                                label="Site Title"
                            />
                            <br />
                            <Field
                                type="text"
                                name="website_url"
                                component={renderText}
                                label="Site URL"
                            />
                            <p>Category   </p>
                            <Field component="select" name="category" label="Category">
                              <option value="app">App</option>
                              <option value="apparel">Apparel</option>
                              <option value="arts_culture">Arts & Culture</option>
                              <option value="blog">Blog</option>
                            </Field>
                            
                            <br />
                            <p>Currency   </p>
                            <Field component="select" name="currency_type" label="Select Currency">
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="GBP">GBP</option>
                            </Field>
                            <h1> Visitors</h1>
                            <Field
                                type="text"
                                name="visitors"
                                component={renderText}
                                label="Vistors"

                            /> Daily
                            <br />
                            <h1> Page Views</h1>
                            <Field
                                type="text"
                                name="page_views"
                                component={renderText}
                                label="Page Views"

                            /> Daily
                            <br />
                            <h1> Income</h1>
                            <Field
                                type="text"
                                name="income"
                                component={renderText}
                                label="Income"

                            /> USD Per Month
                            <br />
                            <h1> Asking Price</h1>
                            <Field
                                type="text"
                                name="asking_price"
                                component={renderText}
                                label="Asking Price"

                            />
                            <Field component="textarea" rows="10" type="text" name="website_description" label="Business Description" />
                            <br />
                            <div className={classes.btnDiv}>
                                <Button className={classes.btn} type="submit" variant="raised" color="primary">Continue</Button>
                            </div>
                        </form>
                    </CardContent>

                </Card>
            </div>
        );
    };
};

const validateSiteCreate = values => {
    const errors = {};

    const requiredFields = [
        'site_title',
        'website_url',
        'contact_email',
        'asking_price'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = '(The ' + field + ' field is required.)';
        }
    });

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '(Invalid email address.)';
    }

    return errors;
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

SiteEditForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

SiteEditForm = connect(null, mapDispatchToProps)(withStyles(styles)(SiteEditForm));

export default reduxForm({
    initialValues: {
        date_listed: new Date().toJSON().slice(0, 10),
        user_id: getUser()        
    },
    form: 'SiteCreateForm', // a unique identifier for this form
    validate: validateSiteCreate // ←Callback function for client-side validation
})(SiteEditForm);

