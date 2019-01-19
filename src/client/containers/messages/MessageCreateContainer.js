import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {MESSAGES} from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

// Import custom components
import MessageCreateForm from '../../components/messages/MessageCreateForm';

class MessageCreateContainer extends Component {

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    /**
     * Submit the form.
     *
     * @param {object} formProps
     */
    submitForm(formProps) {

        this.props.actions.submitForm(MESSAGES, formProps);
    }

    render() {

        return (
            <MessageCreateForm
                onSubmit={this.submitForm}
                siteId={this.props.location.siteId}
                recipientId={this.props.location.userId}
            />
        );
    }

}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(MessageCreateContainer);