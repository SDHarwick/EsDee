import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    legal: {
        clear: 'both',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        bottom: 0,
        borderTop: '1px solid #eee',
        padding: '15px',
        overflow: 'hidden',
        textAlign: 'center',
    }
});
class Footer extends Component {

    render() {
        const {classes} = this.props;

        return (

            <div className={classes.legal}>
                <Button><Link to={'/faq'}>FAQ</Link></Button>
                <Button><Link to={'/testimonials'}>Testimonials</Link></Button>
                <div className="copyright">
                    © 2018 <a href="javascript:void(0);">The EsDee Corp. - Stephen Daniel Harwick</a>
                </div>
                <Button><Link to={'/blog'}>Blog</Link></Button>
                <Button><Link to={'/about'}>About Us</Link></Button>
            </div>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer)