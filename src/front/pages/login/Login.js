// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import auth from '../../services/auth';
import { type UserAuthActions } from '../../types/redux/userAuth';
import {loginUser} from '../../services/API/Api';
// #endregion

// #region flow types
export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // userAuth:
  isAuthenticated: boolean,
  isFetching: boolean,
  isLogging: boolean,
} & UserAuthActions;

export type State = {
  email: string,
  password: string,
};
// #endregion

class Login extends PureComponent<Props, State> {
  static defaultProps = {
    isFetching: false,
    isLogging: false,
  };

  state = {
    email: '',
    password: '',
  };

  // #region lifecycle methods
  componentDidMount() {
    const { disconnectUser } = this.props;

    disconnectUser(); // diconnect user: remove token and user info
  }

  render() {
    const { email, password } = this.state;

    const { isLogging } = this.props;

    return (
      <div className="content">
        <Row id="test">
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <form className="form-horizontal" noValidate>
              <fieldset  id="test">
                <legend>Login</legend>

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
                      value={email}
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
                      value={password}
                      onChange={this.handlesOnPasswordChange}
                    />
                  </Col>
                </div>

                <div className="form-group">
                  <Col lg={{ size: 12 }}>
                    <Button
                      className="login-button btn-block"
                      color="warning"
                      disabled={isLogging}
                      onClick={this.handlesOnLogin}
                    >
                      {isLogging ? (
                        <span>
                          login in... &nbsp;
                          <i className="fa fa-spinner fa-pulse fa-fw" />
                        </span>
                      ) : (
                        <span>Login</span>
                      )}
                    </Button>
                  </Col>
                  <Button
                    color="link"
                    onClick={this.handleButtonCreateAccount}
                  >Create account</Button>
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
  // #endregion

  //Create account
  // #region on login button click callback
  handleButtonCreateAccount = async (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
    }
    const { history } = this.props;
    history.push({ pathname: '/account' }); // back to Home
  };
  // #region form inputs change callbacks
  handlesOnEmailChange = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ email: event.target.value.trim() });
    }
  };

  handlesOnPasswordChange = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ password: event.target.value.trim() });
    }
  };
  // #endregion

  // #region on login button click callback
  handlesOnLogin = async (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
    }

    const { history } = this.props;

    const { email, password } = this.state;

    const userLogin = {
      login: email,
      password: password,
    };

    try {
      let body = {
        username:'testuser998',
        password: 'welkom',
      };
      console.log(userLogin.login);
      console.log(userLogin.password);

      sessionStorage.setItem('USERNAME', userLogin.login);
      sessionStorage.setItem('PASSWORD', userLogin.password);
      const response = await loginUser('http://localhost:9009/users/token',sessionStorage.getItem('USERNAME'),sessionStorage.getItem('PASSWORD'));
      console.log(response);
      auth.setToken(response.token);
      auth.setUserInfo(response.id);
      history.push({ pathname: '/protected' }); // back to Home
    } catch (error) {
      /* eslint-disable no-console */
      console.log('login went wrong..., error: ', error);
      /* eslint-enable no-console */
    }
  };
  // #endregion

  // #region on go back home button click callback
  goHome = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
    }

    const { history } = this.props;

    history.push({ pathname: '/' });
  };
  // #endregion
}

export default Login;
