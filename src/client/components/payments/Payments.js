import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/userActions';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey='pk_test_9A1mdbCxdeXEp5Tj9JCkbqvJ'
                name="List A Site"
                description="Pay for 30 days of Listing Time"
            >
                <button className="btn add-creds-btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);
