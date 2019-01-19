import React, {Component} from 'react';

// Import custom components
import SitesDashboard from '../../components/sites/SitesDashboard';
import * as authService from '../../services/authService';

class SitesContainer extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <SitesDashboard/>
        );
    }

}

export default SitesContainer;



// import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import * as authService from '../../services/authService';

// // Import custom components
// import LoginForm from '../../components/auth/LoginForm';

// class LoginContainer extends Component {

//     constructor(props) {
//         super(props);

//         this.submitForm = this.submitForm.bind(this);
//     }


//     /**
//      * Submit the form.
//      *
//      * @param {object} formProps
//      */
//     submitForm(formProps) {

//         this.props.actions.login(formProps);
//     }

//     render() {
//         return (
//             <LoginForm
//                 onSubmit={this.submitForm}
//             />
//         );
//     }

// }

// /**
//  * Map the state to props.
//  */
// const mapStateToProps = state => ({
//     token: state.auth.token,
//     isAuthenticated: state.auth.isAuthenticated
// });

// /**
//  * Map the actions to props.
//  */
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(Object.assign({}, authService), dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);