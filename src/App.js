// import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './component/header/header.component';
import Home from './page/home/home.page';
import Subscribe from './page/subscribe/subscribe.page';
import Support from './page/support/support.page';
import Footer from './component/footer/footer.component';
import About from './page/about/about.page';
import Register from './page/register/register.page';
import Login from './page/login/login.page';
import Payment from './page/payment/payment.page';
import Donate from './page/donate/donate.page';
import Tracker from './page/tracker/tracker.page';
import Profile from './page/profile/profile.page';
import PersonalBloodFlow from './page/personalBloodFlow/personalBloodFlow.page';
import PersonalMood from './page/personalMood/personalMood.page';
import PersonalCalendar from './page/personalCalendar/personalCalendar.page';
import Reminder from './page/reminder/reminder.page';

import AuthRoute from './util/AuthRoute';
import { AuthProvider } from './context/auth';

function App() {

  return (
    <AuthProvider>
      <Router className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/about" component={About} />
          <Route exact path="/subscribe" component={Subscribe} /> 
          <Route exact path="/support" component={Support} /> 
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/tracker" component={Tracker} />
          <AuthRoute exact path="/register" component={Register} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/payment" component={Payment} userLoggedIn={true} />
          <AuthRoute exact path="/profile" component={Profile} userLoggedIn={true} />
          <AuthRoute exact path="/personalBloodFlow" component={PersonalBloodFlow} userLoggedIn={true} />
          <AuthRoute exact path="/personalMood" component={PersonalMood} userLoggedIn={true} />
          <AuthRoute exact path="/personalCalendar" component={PersonalCalendar} userLoggedIn={true} />
          <AuthRoute exact path="/reminder" component={Reminder} userLoggedIn={true} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
