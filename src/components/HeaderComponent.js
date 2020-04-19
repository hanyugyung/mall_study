import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import * as PROPTERTIES from "../Properties";

class HeaderComponent extends Component {
  getLogout() {
    if (window.confirm("정말 로그아웃 하시는 건가요?")) {
      axios({
        data: {
          userId: localStorage.getItem("id"),
        },
        method: "DELETE",
        url:
          PROPTERTIES.getBackendUrl() +
          "/v1/api/user/logout?userId=" +
          localStorage.getItem("id"),
        headers: { "content-type": "application/json" },
      })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("id");
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            window.location.href = "/";
          } else {
            alert("LOGOUT EXCEPTION!!!");
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
    if (localStorage.getItem("id") != null) {
      return (
        <Container>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/users/mypage">
                {localStorage.getItem("name")} 님 안녕하세요!
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/cs">
                고객센터
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
