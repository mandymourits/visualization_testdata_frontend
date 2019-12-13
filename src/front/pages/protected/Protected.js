// @flow

// #region imports
import React, { PureComponent,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from '../../components/sidebar/SideBar';
import { Row,Col } from 'reactstrap';
import TaskBar from '../login/Main';
import {
  type Match,
  type Location,
  type RouterHistory, BrowserRouter as Router,
} from 'react-router-dom';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};

type State = any;
// #endregion


class Protected extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = {
      toggles: true,
      toggleC: true,
    };
  }

  toggleSideBar(event) {
    this.setState({
      toggleS: !this.state.toggleS,
    });
  }
  toggleContent(event) {
    this.setState({
      toggleC: !this.state.toggleC,
    });
  }
  // #region lifecycle
  render() {
    return (
      <Router>
      <div className="App wrapper">
        <Row>
          <Col xs="2">
            <SideBar toggle={this.toggleSideBar} isOpen={this.state.toggleS}/>
          </Col>
          <Col xs="10">
            <TaskBar/>
          </Col>
        </Row>
          </div>
      </Router>

        );
  }
  // #endregion
}

export default Protected;
