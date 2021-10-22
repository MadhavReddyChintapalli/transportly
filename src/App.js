//Import Modules
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import Components
import Order from './components/Order';
import ViewOrderOnFlight from './components/ViewOrderOnFlight';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/orders' component={Order} />
          <Route
            exact
            path='/vieworders/:flight_number/:arrival_city/:departure_city'
            component={ViewOrderOnFlight}
          />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
