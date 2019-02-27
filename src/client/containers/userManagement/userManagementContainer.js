import React, {Component} from 'react';

// Import custom components
import UserManagement from '../../components/userManagement/UserManagement';
import * as authService from '../../services/authService';

class UserManagementContainer extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
            	<UserManagement />
            </div>
        );
    }

}

export default UserManagementContainer;