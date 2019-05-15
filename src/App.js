import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Fragment} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import Home from './components/Home';
import Stream from './components/Stream';
import '../src/content/css/styles.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <Fragment>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/streams/:channelId" component={Stream} />
            </div>
      </Fragment>
  </Router>
  );
}

export default App;