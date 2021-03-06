import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import LoginFormComponent from './LoginFormComponent';

let jrcLogo = require('../../images/jr_white.svg');
require('../../styles/login/LoginPage.scss');

class LoginPage extends React.Component {

  render() {
    return (
      <div className="login-container">
        <Grid>
          <Col sm={6} smOffset={3} md={4} mdOffset={4} xs={8} xsOffset={2} className="login-form">
            <Row>
              <img src={jrcLogo} alt="JrC Logo" className="img-responsive" id="logo" />
            </Row>
            <Row>
              <LoginFormComponent next={this.props.location.query.next || '/'}/>
            </Row>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
