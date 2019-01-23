import React, {Component} from 'react';

// Import custom components
import AdminDashboard from '../../components/admin/AdminDashboard';
import * as authService from '../../services/authService';

class AdminContainer extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
            	<p>Normally a mailer service would send you an email so that you could verify your email and the account would be created. But I didn't set up a mailer so instead please navigate to login and enter your login creds.</p>
            </div>
        );
    }

}

export default AdminContainer;