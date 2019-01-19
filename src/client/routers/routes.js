import React from 'react';

// Import routing components
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

// Import custom components
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
import LoginForm from '../containers/auth/LoginContainer';
import SignUpForm from '../containers/auth/SignUpContainer';
import SiteCreateForm from '../containers/sites/SiteCreateContainer';
import MessageCreateForm from '../containers/messages/MessageCreateContainer';
import MessageReplyForm from '../containers/messages/MessageReplyContainer';
import Dashboard from '../containers/dashboard/DashboardContainer';
import AccountDashboard from '../containers/account/AccountDashboardContainer';
import MessageDashboard from '../containers/messages/MessageContainer';
import AboutUsDashboard from '../containers/about/AboutUsContainer';
import Sites from '../containers/sites/SitesContainer';
import SiteDetails from '../containers/sites/SiteDetailsContainer';
import Admin from '../containers/admin/adminContainer';
import SiteEditContainer from '../containers/sites/SiteEditContainer';
import SiteEditForm from '../components/sites/SiteEditForm';
import MessageDetails from '../components/messages/MessageDetails';
import AuthenticatedRoute from './AuthenticatedRoute';

const Router = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/login" component={LoginForm}/>
                <Route path="/signup" component={SignUpForm}/>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/about" component={AboutUsDashboard}/>
                <MainLayout>
                    <Switch>
                        <Route exact path="/sites" component={Sites}/>
                        <Route exact path="/sites/:id" component={SiteDetails}/>
                        <Route path="/sites/:id/message" component={MessageCreateForm}/>
                        <Route path="/edit/:id" component={SiteEditContainer}/>
                        <AuthenticatedRoute path="/new" component={SiteCreateForm}/>
                        <AuthenticatedRoute path="/admin" component={Admin}/>
                        <AuthenticatedRoute exact path="/account" component={AccountDashboard}/>
                        <AuthenticatedRoute exact path="/account/messages" component={MessageDashboard}/>
                        <AuthenticatedRoute exact path="/account/messages/:id" component={MessageDetails}/>
                        <AuthenticatedRoute path="/account/messages/:id/reply" component={MessageReplyForm}/>
                    </Switch>
                </MainLayout>

                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>

    </BrowserRouter>
);

export default Router;


// <AuthenticatedRoute path="/sites/new" component={SiteCreateForm}/>
