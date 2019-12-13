import React from 'react';
import FileReader from 'filereader';
import fs from 'fs';
import {
  createUser,
} from '../../services/API/Api';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import Row from 'reactstrap/lib/Row';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handlesOnEmailChange = this.handlesOnEmailChange.bind(this);
    this.handlesOnPasswordChange = this.handlesOnPasswordChange.bind(this);
    this.handlesOnLogin = this.handlesOnLogin.bind(this);
    this.renderAccountCreated = this.renderAccountCreated.bind(this);
    this.state = {
      responseAccountCreated: 'Submit',
    };
  }


  render() {
    return (
      <div className="content">
        <Row id="test">
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <form className="form-horizontal" noValidate>
              <fieldset  id="test">
                <legend>Create account</legend>
                {this.renderAccountCreated()}
                <div className="form-group">
                  <label
                    htmlFor="inputEmail"
                    className="col-lg-2 control-label"
                  >
                    Email
                  </label>
                  <Col lg={12}>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      autoComplete="username email"
                      onChange={this.handlesOnEmailChange}
                    />
                  </Col>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="inputPassword"
                    className="col-lg-2 control-label"
                  >
                    Password
                  </label>
                  <Col lg={12}>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      autoComplete="current-password"
                      onChange={this.handlesOnPasswordChange}
                    />
                  </Col>
                </div>
                <div className="form-group">
                  <Col lg={{ size: 12 }}>
                    <Button
                      className="login-button btn-block"
                      color="warning"
                      onClick={this.handlesOnLogin}
                    >
                        <span>
                          <i className="fa fa-spinner fa-pulse fa-fw" />
                        </span>
                        <span>Submit</span>
                    </Button>
                  </Col>
                </div>
              </fieldset>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <div className="pull-right">
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  // #region form inputs change callbacks
  handlesOnEmailChange = (event) => {
    if (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      sessionStorage.setItem('USERNAME', event.target.value.trim());
      this.setState({ email: event.target.value.trim() });
    }
  };

  renderAccountCreated() {
    if (this.state.renderSomething !== '') {
      return (
        <div placeholder={this.state.responseAccountCreated} value={this.state.responseAccountCreated} name="pagename" type="input">{this.state.responseAccountCreated}</div>
      );
    }
  }

  handlesOnPasswordChange = (event) => {
    if (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      sessionStorage.setItem('PASSWORD', event.target.value.trim());
      this.setState({ password: event.target.value.trim() });
    }
  };

  async handlesOnLogin(event) {
    if (event) {
      event.preventDefault();

      const userLogin =
        {
          username:sessionStorage.getItem('USERNAME'),
          password: sessionStorage.getItem('PASSWORD'),
        };

      console.log(userLogin)
      const response = await createUser('http://localhost:9009/',userLogin);
      console.log(JSON.stringify(response));
      this.state.responseAccountCreated = response.toString();
      // should add some validator before setState in real use cases
    }
  };
  // #endregion
}

export default Main;
