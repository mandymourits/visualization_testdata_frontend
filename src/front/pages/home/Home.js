import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import HomeInfo from './styled/HomeInfo';
import Background from './ventus.jpg';
import {Card, Button, Container, CardTitle, CardText, Row, Col, Media, UncontrolledPopover} from 'reactstrap';
import keywordDrivenFramework from "./KeywordDriven.png";
import hybridDrivenFramework from "./HybridDriven.png";
import construction from "./Construction.png";
import targets from "./targets.png";




// #region flow types
export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};
let style = {
  'backgroundColor': '#D3D3D3',
  'backgroundImage': `url(${Background})`,
  'color': 'white',
  'backgroundSize': 'cover',
};

export type State = any;
// #endregion

class Home extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <br/>
        <Jumbotron fluid style={style}>
          <Container fluid>
            <h1 className="display-3">Manage Test Data & Page Object Models</h1>
            <p className="lead">The purpose of this tool is to manage test data from one place, maintain, mainipulate and share with everyone.</p>
            <h1>Starter</h1>
            <p>
              <Link className="btn btn-outline-warning btn-lg" to={'/about'}>
                <i className="fa fa-info" />
                &nbsp; go to Demo
              </Link>
            </p>
          </Container>
        </Jumbotron>
        <Row>
          <Col sm="6">
            <br/>
            <Card body>
              <CardTitle className="text-warning">What?</CardTitle>
              <CardText>This tool is created to bring testers, technical testers and developers together by sharing testdata. The simple user interface is designed to add data to the frame in a way that it is useful for framework designers or for data manipulation. The backend creates a new design based on this input. The output can be downloaded or can be retrieved by a rest call.</CardText>
            </Card>
          </Col>
          <Col sm="6">
            <br/>
            <Card body>
              <CardTitle className="text-warning">Who?</CardTitle>
              <CardText>This tool is original created for devops teams with technical complex test frameworks. But it can do a lot more. The demo represents two complex test automation frameworks. The hybrid driven framework and the keyword driven framework.To show what is possible.</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <br/>
            <Card body>
              <CardTitle className="text-warning">Tool construction</CardTitle>
              <CardText>The front end of the application is specially designed for data input. The backend is able to generate complex content and is able to deliver it in any format<img width="100%" height="100%" src={construction} alt="Logo"/></CardText>
            </Card>
          </Col>
          <Col sm="6">
            <br/>
            <Card body>
              <CardTitle className="text-warning">Automated Frameworks</CardTitle>
              <CardText>On the left side is an example of a simple webpage. The right site is showing the tool. In the tool we create the targets first and when we are finished we create input based on those created target.
                <img width="100%" height="100%" src={targets} alt="Logo"/></CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <br/>
            <Card body>
              <CardTitle className="text-warning">Hybrid Driven Frameworks</CardTitle>
              <CardText>This is an example of the complete data flow. The visualizer is included in this picture.<img width="100%" height="100%" src={hybridDrivenFramework} alt="Logo"/></CardText>
            </Card>
          </Col>
          <Col sm="6">
            <br/>
            <Card body>
              <CardTitle className="text-warning">Keyword Driven Framework</CardTitle>
              <CardText>This is an example of the complete data flow. The visualizer is included in this picture.<img width="100%" height="100%" src={keywordDrivenFramework} alt="Logo"/></CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
  // #endregion
}

export default Home;
