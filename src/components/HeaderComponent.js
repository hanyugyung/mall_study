import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import * as PROPTERTIES from "../Properties";
import * as RTCODE from "../RtCode";

class HeaderComponent extends Component {
  getLogout() {
    if (window.confirm("정말 로그아웃 하시는 건가요?")) {
      axios({
        data : {
          userId : localStorage.getItem("userId")
        },
        method: "post",
        url: PROPTERTIES.getBackendUrl("user") + "/logout",
        headers: { 
          "content-type": "application/json",
          "X-BACKEND-TOKEN" : localStorage.getItem("token")
        },
      })
      .then((response) => {
        const res = response.data;
        if(res.rtCode == RTCODE.RT_SUCCESS) {
          localStorage.removeItem("userId");
          localStorage.removeItem("token");
          localStorage.removeItem("uuid");
          window.location.href = "/";
        }else{
          alert(res.rtMsg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      //취소버튼 눌렀기 때문에 아무것도 실행되지 않음
    }
  }
  render() {
    if (localStorage.getItem("uuid") != null) {
      return (
        <Container>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/users/mypage">
                {localStorage.getItem("userId")} 님 안녕하세요!
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/cs">
                고객센터
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/stat">
                통계
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="#" onClick={this.getLogout}>
                로그아웃
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      );
    } else {
      return (
        <Container>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/users/signup">
                회원가입(+2000)
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/cs">
                고객센터
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/stat">
                통계
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login">
                로그인
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      );
    }
  }
}
export default HeaderComponent;
