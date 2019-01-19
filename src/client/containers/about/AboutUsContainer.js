import React, {Component} from 'react';

// Import custom components
import AboutUs from '../../components/about/AboutUs';
import Header2 from '../../components/common/header/Header2';
import Footer from '../../components/common/footer/Footer';

class AboutUsContainer extends Component {

    constructor(props) {
        super(props);

    }




    render() {
        
        return (
            <div>
                <div>
                    <AboutUs/>
                </div>
            </div>
        );
    }

}

export default AboutUsContainer;
