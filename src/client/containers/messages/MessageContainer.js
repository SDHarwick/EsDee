import React, {Component} from 'react';

// Import custom components
import MessageDashboard from '../../components/messages/MessageDashboard';
import AccountNav from '../../components/account/AccountNav';
import * as authService from '../../services/authService';

class MessageContainer extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <AccountNav/>
                <MessageDashboard/>
            </div>
        );
    }

}

export default MessageContainer;