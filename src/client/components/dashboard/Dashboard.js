import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {cyan, pink, purple, orange} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {AddShoppingCart, ThumbUp, Assessment, Face} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import SummaryBox from './SummaryBox';
import Product from './Product';
import BuyerSellerTabs from './BuyerSellerTabs';
import theme from '../../index';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  wholeBody: {
    margin: "auto",
    fontFamily: "sans-serif",
    fontSize: 17,
    color: theme.palette.primary.dark,
  },
  introSection: {
    padding: '200px 0px 50px 0px',
  },
  businessByModel:{
    backgroundColor:'#FFFFFF',
    paddingBottom: theme.spacing.unit * 6,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6
  },
  lightBgSection: {
    backgroundColor: "#F8F8F8",
    color: theme.palette.primary.main,
    padding: theme.spacing.unit * 6
  },
  darkBgSection: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 6
  },
  darkBGSectionHeader: {
    color: "#f8f8f8",
    paddingTop: 40,
    paddingBottom: 15
  },
  sectionHeader: {
    paddingTop: 40,
    paddingBottom: 15
  },
  autoMargin: {
    margin: "auto"
  },
  button: {
    margin: theme.spacing.unit,
    minWidth: 200
  },
  bottomBorder:{
    borderBottom:'5px solid `${theme.palette.primary.dark}`',
    margin:'auto'
  },
  paddingBottom: {
    paddingBottom: theme.spacing.unit * 6
  },
  card: {
    minWidth: 275,
    margin: 5
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: '{theme.spacing.unit * 3}px'
  },
  paper: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.primary.dark,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
});


const Dashboard = props => {

    const classes = props.classes;
    const bullet = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.wholeBody}>
        <section className={classes.lightBgSection}>
          <Grid
            container
            spacing={40}
            align="center"
            className={classes.introSection}
          >
            <Grid item xs={12}>
              <Typography variant="display4" color="secondary">
                Lorem Ipsum
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" color="primary.dark">
                Culpa earum qui, dolorem que quas iste voluptatem reiciendis
                pariatur rem aut nobis?
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.autoMargin}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
              >
                Buy a Business
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
              >
                Sell Your Business
              </Button>
            </Grid>
            <Grid item xs={12} sm={9} className={classes.bottomBorder}>
              <Typography variant="p" color="secondary">
                Corporis hic nostrum quo nihil aut tempore.
              </Typography>
            </Grid>
          </Grid>
        </section>

        <section>
            <Grid
              rounded
              container
              align="center"
              spacing={16}
              className={classes.businessByModel}
            >
              <Grid item xs={12}>
                <Typography
                  className={classes.sectionHeader}
                  variant="display3"
                  color="primary"
                >
                  Business by Model
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                  <Typography variant="p" align="justify">
                    Ipsum
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                  <Typography variant="p" align="justify">
                    Nobis
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                  <Typography variant="p" align="justify">
                    Culpa
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                  <Typography variant="p" align="justify">
                    Voluptatem
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                  <Typography variant="p" align="justify">
                    Quas
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                  <Typography variant="p" align="justify">
                    Quas
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
        </section>

        <BuyerSellerTabs />

        <Grid
          container
          align="left"
          spacing={40}
          className={classes.lightBgSection}
        >
          <Grid item xs={12}>
            <Typography
              className={classes.sectionHeader}
              variant="display3"
              color="primary"
              align="center"
            >
              Featured Listings
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} spacing={40} color="primary.dark">
            <Typography component="p" variant="headline" color="secondary">
              Lorem Ipsum
            </Typography>
            <Typography component="p" variant="subheading" color="secondary">
              $99,999
            </Typography>
            <Typography component="p" variant="body1" align="justify">
              Culpa earum qui, doloremque quas iste voluptatem reiciendis pariatur rem aut nobis? Culpa earum qui, doloremque quas iste voluptatem reiciendi pariatur rem aut nobis?
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} color="primary.dark">
            <Typography component="p" variant="headline" color="secondary">
              Lorem Ipsum
            </Typography>
            <Typography component="p" variant="subheading" color="secondary">
              $99,999
            </Typography>
            <Typography component="p" variant="body1" align="justify">
              Culpa earum qui, doloremque quas iste voluptatem reiciendis pariatur rem aut nobis? Culpa earum qui, doloremque quas iste voluptatem reiciendi pariatur rem aut nobis?
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} color="primary.dark">
            <Typography component="p" variant="headline" color="secondary">
              Lorem Ipsum
            </Typography>
            <Typography component="p" variant="subheading" color="secondary">
              $99,999
            </Typography>
            <Typography component="p" variant="body1" align="justify">
              Culpa earum qui, doloremque quas iste voluptatem reiciendis pariatur rem aut nobis? Culpa earum qui, doloremque quas iste voluptatem reiciendi pariatur rem aut nobis?
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} color="primary.dark">
            <Typography component="p" variant="headline" color="secondary">
              Lorem Ipsum
            </Typography>
            <Typography component="p" variant="subheading" color="secondary">
              $99,999
            </Typography>
            <Typography component="p" variant="body1" align="justify">
              Culpa earum qui, doloremque quas iste voluptatem reiciendis pariatur rem aut nobis? Culpa earum qui, doloremque quas iste voluptatem reiciendi pariatur rem aut nobis?
            </Typography>
          </Grid>

        </Grid>

        <Grid
          rounded
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={24}
          className={classes.darkBgSection}
        >
          <Grid item xs={12} className={classes.darkBgSection}>
            <Typography
              className={classes.darkBGSectionHeader}
              variant="display3"
              align="center"
            >
              Testimonials
            </Typography>
          </Grid>

          <Grid item sm={11} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography component="p" align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam neque exercitationem delectus laudantium maxime at, a
                  sed distinctio doloremque placeat eos magni fugiat minima,
                  animi obcaecati! Deserunt vitae dignissimos similique.
                </Typography>
                <Typography variant="headline" align="right" color="secondary">
                  Name {bullet} Position {bullet} Company
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={11} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography component="p" align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam neque exercitationem delectus laudantium maxime at, a
                  sed distinctio doloremque placeat eos magni fugiat minima,
                  animi obcaecati! Deserunt vitae dignissimos similique.
                </Typography>
                <Typography variant="headline" align="right" color="secondary">
                  Name {bullet} Position {bullet} Company
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={11} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography component="p" variant="body1" align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam neque exercitationem delectus laudantium maxime at, a
                  sed distinctio doloremque placeat eos magni fugiat minima,
                  animi obcaecati! Deserunt vitae dignissimos similique.
                </Typography>
                <Typography variant="headline" align="right" color="secondary">
                  Name {bullet} Position {bullet} Company
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

        <Grid container align="center" className={classes.paddingBottom}>
          <Grid item xs={12} className={classes.sectionHeader}>
            <Typography
              variant="h6"
              color="primary.dark"
              className={classes.sectionHeader}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus animi culpa doloremque reiciendis quam cum commodi!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
            >
              Sell My Business
            </Button>
          </Grid>
        </Grid>
    </div>
)};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard); 

