import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import Row from "react-bootstrap/Row";
import * as PROPTERTIES from "../../Properties";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.checked = false;
    this.state = {};
  }
  userLoginHandler(e) {
    axios({
      data: {
        loginId: e.target.loginId.value,
        passWord: e.target.passWord.value,
      },
      method: "post",
      url: PROPTERTIES.getBackendUrl() + "/v1/api/user/login",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        const res = response.data;
        if(res.rtCode == "A200000") {
          localStorage.setItem("id", res.rtData.userId);
          localStorage.setItem("token", res.rtData.token);
          window.location.href = "/";
        }else{
          alert(res.rtMsg);
        }
      })
      .catch(function (error) {
        alert("internal error occurs!");
      });
  }
  render() {
    return (
      <div className="sub-page">
        <Container>
          <center>
            <h2 className="sign-up-main-text">
              <strong>Login</strong>
            </h2>
            <Form
              onSubmit={function (e) {
                e.preventDefault();
                this.userLoginHandler(e);
              }.bind(this)}
            >
              <div className="login-form-aria">
                <Form.Group as={Row}>
                  <Form.Control type="text" id="loginId" placeholder="아이디" />
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Control
                    type="password"
                    id="passWord"
                    placeholder="비밀번호"
                  />
                </Form.Group>
              </div>
              <div className="join-us-form-button-aria">
                <span className="button-box">
                  <button className="basic-button" type="submit">
                    로그인
                  </button>
                </span>
              </div>
            </Form>
          </center>
        </Container>
      </div>
    );
  }
}
export default LoginComponent;
