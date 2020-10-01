import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import Row from "react-bootstrap/Row";
import * as PROPTERTIES from "../../Properties";
import * as RTCODE from "../../RtCode";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.checked = false;
    this.state = {};
  }
  userLoginHandler(e) {
    axios({
      data: {
        userId: e.target.userId.value,
        password: e.target.passWord.value,
      },
      method: "post",
      url: PROPTERTIES.getBackendUrl("user") + "/login",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        const res = response.data;
        if(res.rtCode == RTCODE.RT_SUCCESS) {
          localStorage.setItem("userId", res.data.userId);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("uuid", res.data.uuid);
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
                  <Form.Control type="text" id="userId" placeholder="아이디" />
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
