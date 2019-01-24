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
                <Link to={'/faq'}><Button>FAQ</Button></Link>
                <Link to={'/testimonials'}><Button>Testimonials</Button></Link>
                <div className="copyright">
                    © 2018 <a href="javascript:void(0);">The EsDee Corp. - Stephen Daniel Harwick</a>
                </div>
                <Link to={'/blog'}><Button>Blog</Button></Link>
                <Link to={'/about'}><Button>About Us</Button></Link>
            </div>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer)