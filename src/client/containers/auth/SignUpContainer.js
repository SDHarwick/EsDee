import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../components/common/header/Header';
import Footer from '../../components/common/footer/Footer';

import {USERS} from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';
import * as authService from '../../services/authService';

// Import custom components
import SignUpForm from '../../components/auth/SignUpForm';

class SignUpContainer extends Component {

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

        this.props.actions.submitForm(USERS, formProps);
        this.props.login.login(formProps);
    }

    render() {

        return (
            <div>
                <div>
                    <SignUpForm
                        onSubmit={this.submitForm}
                    />
                </div>
            </div>

            
        );
    }

}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
    login: bindActionCreators(Object.assign({}, authService), dispatch)
});

export default connect(null, mapDispatchToProps)(SignUpContainer);
