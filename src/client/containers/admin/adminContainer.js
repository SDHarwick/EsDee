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
            <AdminDashboard/>
        );
    }

}

export default AdminContainer;