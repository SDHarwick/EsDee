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
import EditorField from '../common/editor/EditorField';

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
    },
    editor: {
        border: '5px solid #212246',
        borderRadius: '5px',
        padding: '5px 5px 45px 5px',
        marginTop: '40px',
        marginBottom: '40px'
    }
};


class MessageReplyForm extends Component {

    constructor(props) {
        super(props);
        this.getUserById = this.getUserById.bind(this);

    }

    async getUserById() {
        let user = getUser();
        const userProfile = await this.props.actions.fetchById('users', user);

        return userProfile;
    }

    async componentDidMount() {
        let RID = this.props.senderId;
        let SiteId = this.props.siteId;
        let SID = parseInt(getUser());
        this.props.initialize({recipient_id: RID, sender_id: SID, site_id: SiteId});
        let user = await this.getUserById();
        this.setState({user});
        window.scrollTo(0, 0);
    }


    render() {
        const props = this.props;
        const {handleSubmit, onSubmit} = props;
        const classes = props.classes;


        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.cardHeader}
                        title="Send A Message"
                    />
                    <CardContent>
                        <form method="post" onSubmit={handleSubmit(onSubmit)}>
                            <br />
                            <Field
                                type="text"
                                name="subject"
                                component={renderText}
                                label="Message Subject"
                            />
                            <div className={classes.editor}>
                                <h1>Message Body</h1>
                                <EditorField
                                    key="field"
                                    name="body"
                                    id="inputEditorText"
                                    disabled={false}
                                />
                            </div>
                            <br />
                            <div className={classes.btnDiv}>
                                <Button className={classes.btn} type="submit" variant="raised" color="primary">Reply</Button>
                            </div>
                        </form>
                    </CardContent>

                </Card>
            </div>
        );
    }
}

const validateMessageCreate = values => {
    const errors = {};

    const requiredFields = [
        'sender_id',
        'recipient_id',
        'subject',
        'body'
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

MessageReplyForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

MessageReplyForm = connect(null, mapDispatchToProps)(withStyles(styles)(MessageReplyForm));

export default reduxForm({
    form: 'MessageReplyForm', // a unique identifier for this form
    validate: validateMessageCreate // ←Callback function for client-side validation
})(MessageReplyForm);

