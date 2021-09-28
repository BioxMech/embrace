import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './component/header.component';
import Home from './page/home/home.page';
import Payment from './page/payment/payment.page';
import Support from './page/support/support.page';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/payment" component={Payment} /> 
        <Route exact path="/support" component={Support} /> 
        <Route path="/" component={Home} /> 
      </Switch>
    </div>
  );
}

export default App;
