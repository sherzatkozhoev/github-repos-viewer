import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import GithubState from './context/github/GithubState';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ReposDetail from './pages/ReposDetail';

function App() {
  return (
    <GithubState>
      <Navbar/>

      <div className="container py-4">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/repos/:owner/:repo" component={ReposDetail} exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </GithubState>
  );
}

export default App;
