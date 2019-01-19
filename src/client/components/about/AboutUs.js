import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';





const AboutUs = props => {

    const classes = props.classes;

    return (
        <div style={{paddingTop: '60px'}}>
            <div style={{fontFamily:'sans-serif',fontSize:'17px',lineHeight:'2',backgroundColor:'#f8f8f8', paddingTop:'126px', paddingBottom:'35px',textAlign:'center'}}>
                <div>
                    <h1 style={{fontSize: '57px', paddingBottom:'25px',textAlign:'center',margin:'0',fontWeight:'bold', color:'#212246'}}>Lorem Ipsum Dolor</h1>
                    <div style={{width:'72%',margin:'0 auto',textAlign:'center'}}>
                        <p>
                            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit lorem ipsum dolor sit amet et delectus.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 style={{fontSize: '37px', paddingTop:'65px',paddingBottom:'25px',textAlign:'center',margin:'0',fontWeight:'bold', color:'#212246'}}>Dolor Ipsum Lorem?</h2>
                    <div style={{width:'72%',margin:'0 auto',textAlign:'justify',paddingBottom:'25px'}}>
                        <p>
                            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit lorem ipsum dolor sit amet et delectus. e his consul copiosae legendos at vix ad putent delectus. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit lorem ipsum dolor sit amet et delectus. e his consul copiosae legendos at vix ad putent delectus. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit lorem ipsum dolor sit amet et delectus. e his consul copiosae legendos at vix ad putent delectus. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit lorem ipsum dolor sit amet et delectus. e his consul copiosae legendos at vix ad putent delectus. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit lorem ipsum dolor sit amet et delectus. e his consul copiosae legendos at vix ad putent delectus. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit lorem ipsum dolor sit amet et delectus. e his consul copiosae legendos at vix ad putent delectus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default AboutUs