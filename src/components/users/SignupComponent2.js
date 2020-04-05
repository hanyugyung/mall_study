import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as PROPTERTIES from "../../Properties";

class SignupComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  userSignUPHandler(e) {
    if (e.target.accountPw.value !== e.target.accountPwChk.value) {
      alert("비밀번호를 다시 확인해주세요.");
    } else {
      axios({
        data: {
          accountAddress: e.target.accountAddress.value,
          accountBirth: e.target.accountBirth.value,
          accountContactNumber: e.target.accountContactNumber.value,
          accountEmail: e.target.accountEmail.value,
          accountId: e.target.accountId.value,
          accountName: e.target.accountName.value,
          accountPw: e.target.accountPw.value,
        },
        method: "post",
        url: PROPTERTIES.getBackendUrl() + "/v1/api/account/create",
        headers: { "content-type": "application/json" },
      })
        .then((response) => {
          alert("success create account!");
          window.location.href = "/";
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
                      id="accountId"
                      placeholder="4-20자: 영문 소문자, 숫자조합"
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
                      id="accountPw"
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
                      id="accountPwChk"
                      placeholder="6-20자: 영문,숫자,특수문자조합"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    이름
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" id="accountName" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    **휴대전화
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      id="accountContactNumber"
                      placeholder="-빼고 입력"
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
                      id="accountBirth"
                      placeholder="주민번호앞6자리"
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
                      id="accountEmail"
                      placeholder="타사이트이메일"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="form-group-row-bottom-aria">
                  <Form.Label column sm={2}>
                    **주소
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      id="accountAddress"
                      placeholder="주소인데 주소플러그인예정?"
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
