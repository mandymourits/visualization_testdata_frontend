// @flow

import React, { PureComponent } from 'react';
import TaskBar from './Main';



import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';

type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};
type State = any;

class About extends PureComponent<Props, State> {
  render() {
    return (
      <div>
        <br/>
        <h1>Virtualization Tool</h1>
        <br/>
        <TaskBar/>
      </div>
    );
  }
}

export default About;
