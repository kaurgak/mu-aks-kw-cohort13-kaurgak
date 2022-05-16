import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import HomePage from './components/HomePage';
import EmployeesPage from './components/EmployeesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/employees" exact component={EmployeesPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
