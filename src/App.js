import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import routes from './routes';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
        <div>
          {this.props.location.pathname !== '/' ?
          <Nav /> :
          null}
          {routes}
        </div>
    );
  }
}

export default withRouter(App);
