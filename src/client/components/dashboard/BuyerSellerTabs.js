import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component='div' style={{ padding: 10, backgroundColor:'#212246'}}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div style={{border:'0px', boxShadow:'none'}}>
      <p style={{color:'#FFF',width:'100%',backgroundColor:'#212246',textAlign:'center', marginBottom:'0px',paddingTop:'105px',fontSize:'37px',fontWeight:'800'}}>Which one are you?</p>
        <AppBar position='static' style={{backgroundColor:'#212246', border:'0px', display: 'flex', paddingTop:'38px', boxShadow:'none'}}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab style={{ width: '100%', marginRight: '90px', marginLeft: 'auto'}} label="I'm a Buyer" />
            <Tab style={{ width: '100%', marginRight: 'auto', marginLeft: '90px'}} label="I'm a Seller" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <div style={{textAlign:'center',paddingBottom:'75px',color:'#F8F8F8'}}>
              <div style={{padding:'1%', display: 'inline-block', width: '29.5%'}}>
                <h3>dolorum praesentium</h3>
                <p style={{lineHeight:2, textAlign:'justify'}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
                  architecto et eum numquam sequi dolorum praesentium deserunt soluta
                  est? Cumque corporis blanditiis pariatur nesciunt facere nostrum
                  ratione eos cupiditate distinctio?
                </p>
              </div>
              <div style={{padding:'1%', display: 'inline-block', width: '29.5%'}}>
                <h3>dolorum praesentium</h3>
                <p style={{lineHeight:2, textAlign:'justify'}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
                  architecto et eum numquam sequi dolorum praesentium deserunt soluta
                  est? Cumque corporis blanditiis pariatur nesciunt facere nostrum
                  ratione eos cupiditate distinctio?
                </p>
              </div>
              <div style={{padding:'1%', display: 'inline-block', width: '29.5%'}}>
                <h3>dolorum praesentium</h3>
                <p style={{lineHeight:2, textAlign:'justify'}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
                  architecto et eum numquam sequi dolorum praesentium deserunt soluta
                  est? Cumque corporis blanditiis pariatur nesciunt facere nostrum
                  ratione eos cupiditate distinctio?
                </p>
              </div>
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <div style={{textAlign:'center',paddingBottom:'75px',color:'#F8F8F8'}}>
              <div style={{padding:'1%', display: 'inline-block', width: '29.5%'}}>
                <h3>praesentium dolorum</h3>
                <p style={{lineHeight:2, textAlign:'justify'}}>
                  Cumque corporis blanditiis pariatur nesciunt facere nostrum ratione eos cupiditate distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt architecto et eum numquam sequi dolorum praesentium deserunt soluta est?
                </p>
              </div>
              <div style={{padding:'1%', display: 'inline-block', width: '29.5%'}}>
                <h3>praesentium dolorum</h3>
                <p style={{lineHeight:2, textAlign:'justify'}}>
                  Cumque corporis blanditiis pariatur nesciunt facere nostrum ratione eos cupiditate distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt architecto et eum numquam sequi dolorum praesentium deserunt soluta est?
                </p>
              </div>
              <div style={{padding:'1%', display: 'inline-block', width: '29.5%'}}>
                <h3>praesentium dolorum</h3>
                <p style={{lineHeight:2, textAlign:'justify'}}>
                  Cumque corporis blanditiis pariatur nesciunt facere nostrum ratione eos cupiditate distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt architecto et eum numquam sequi dolorum praesentium deserunt soluta est?
                </p>
              </div>
            </div>
          </TabContainer>
        )}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);