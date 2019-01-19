import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {SITES} from '../../constants/entity'
import * as crudAction from '../../actions/crudAction'

// Import custom components
import SiteCreateForm from '../../components/sites/SiteCreateForm';

class SiteCreateContainer extends Component {

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

        this.props.actions.submitForm(SITES, formProps);
    }

    render() {

        return (
            <SiteCreateForm
                onSubmit={this.submitForm}
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

export default connect(null, mapDispatchToProps)(SiteCreateContainer);