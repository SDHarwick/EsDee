import React, {Component} from 'react';

// Import custom components
import AccountDashboard from '../../components/account/AccountDashboard';
import AccountNav from '../../components/account/AccountNav';

class AccountDashboardContainer extends Component {

    constructor(props) {
        super(props);

    }




    render() {
        
        return (
            <div>
                <AccountNav/>
                <AccountDashboard/>
            </div>
        );
    }

}

export default AccountDashboardContainer;
