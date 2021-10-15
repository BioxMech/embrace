// import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

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

import AuthRoute from './util/AuthRoute';
import { AuthProvider } from './context/auth';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/about" component={About} />
          <Route exact path="/subscribe" component={Subscribe} /> 
          <Route exact path="/support" component={Support} /> 
          <AuthRoute exact path="/register" component={Register} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/payment" component={Payment} userLoggedIn={true} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/tracker" component={Tracker} />
          <AuthRoute exact path="/profile" component={Profile} userLoggedIn={true} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
