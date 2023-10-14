import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/issues" exact component={IssueList} />
        <Route path="/issues/:id" component={IssueDetail} />
      </Switch>
    </Router>
  );
}

export default App;