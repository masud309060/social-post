import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <div className="main">
              <Header/>
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path = {`/posts/:postDetailId`}>
                <PostDetail/>
            </Route>

            <Route path="*">
              <NoMatch/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
