import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './component/header.component';
import Home from './page/home.page';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
