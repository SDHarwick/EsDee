import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {SITES} from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

// Import custom components
import SiteDetails from '../../components/sites/SiteDetails';

class SiteDetailsContainer extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <SiteDetails
                siteId={this.props.match.params.id}
            />
        );
    }

}



export default SiteDetailsContainer;