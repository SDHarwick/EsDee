import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {SITES} from '../../constants/entity'
import * as crudAction from '../../actions/crudAction'

// Import custom components
import SiteEditForm from '../../components/sites/SiteEditForm';

class SiteEditContainer extends Component {

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
        console.log(this.props.match.params.id)
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
            <SiteEditForm
                onSubmit={this.submitForm}
                siteId={this.props.match.params.id}
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

export default connect(null, mapDispatchToProps)(SiteEditContainer);