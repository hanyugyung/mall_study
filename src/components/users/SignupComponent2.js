import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as PROPTERTIES from "../../Properties";
import * as RTCODE from "../../RtCode";

class SignupComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  userSignUPHandler(e) {
    if (e.target.password.value !== e.target.passwordCheck.value) {
      alert("비밀번호를 다시 확인해주세요.");
    } else {
      axios({
        data: {
          userBirth: e.target.userBirth.value,
          phoneNumber: e.target.phoneNumber.value,
          email: e.target.email.value,
          userId: e.target.userId.value,
          name: e.target.name.value,
          password: e.target.password.value,
        },
        method: "post",
        url: PROPTERTIES.getBackendUrl("user") + "/signUp",
        headers: { "content-type": "application/json" },
      })
        .then((response) => {
          const res = response.data;
          if(res.rtCode == RTCODE.RT_SUCCESS) {
            window.location.href = "/";
          }else{
            alert(res.rtMsg);
          }
        })
        .catch(function (error) {
          alert("internal error occurs!");
        });
    }
  }
  //move to login when disagree button clicked
  moveToLogin() {
    window.location.href = "/account/login";
  }

  render() {
    return (
      <div className="sub-page">
        <Container>
          <center>
            <h2 className="sign-up-main-text">
              <strong>JOIN US</strong>
            </h2>
            <Form
              onSubmit={function (e) {
                e.preventDefault();
                this.userSignUPHandler(e);
              }.bind(this)}
            >
              <div className="join-us-form-aria">
                <Form.Group as={Row} className="form-group-row-top-aria">
                  <Form.Label column sm={2}>
                    **아이디
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      id="userId"
                      placeholder="Login ID"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    **비밀번호
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="6-20자: 영문,숫자,특수문자조합"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    **비밀번호 확인
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="password"
                      id="passwordCheck"
                      placeholder="6-20자: 영문,숫자,특수문자조합"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    이름
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control 
                      type="text" 
                      id="name" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    **휴대전화
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      id="phoneNumber"
                      placeholder="010-xxxx-xxxx"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    생일
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      id="userBirth"
                      placeholder="yyyy-MM-dd 주민번호앞6자리"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    **이메일
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="email"
                    />
                  </Col>
                </Form.Group>
              </div>
              <div>
                <span className="button-box">
                  <button className="basic-button" type="submit">
                    가입
                  </button>
                  <button
                    className="basic-grey-button second"
                    onClick={() => this.moveToLogin()}
                  >
                    취소
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
export default SignupComponent2;
