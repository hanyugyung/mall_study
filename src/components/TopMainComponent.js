import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

class TopMainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      //span 과 div 차이
      //1. div -> 태그끼리 줄바꿈, span-> 옆으로 붙음(inline 속성을 가진다는 의미)
      //2. 영역 지정 방식 차이 div -> 사각형 박스로 구역 설정, span -> 문장단위로 지정
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "15px",
          background: "white",
          borderTop: "1px solid #BDBDBD",
          borderBottom: "1px solid #BDBDBD",
        }}
      >
        <Container>
          <h1 className="text-center">Shopping Mall</h1>
          <p className="text-center">REACT study 2020</p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="ex) 롱패딩"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">검색</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Nav className="top-main-component-nav">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/outers">
                아우터
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/tops">
                상의
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/shirts">
                셔츠/블라우스
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/trainings">
                트레이닝
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/basics">
                베이직
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/onepieces">
                원피스
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/skirts">
                스커트
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/pants">
                팬츠
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/bags">
                가방
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/shoeses">
                신발
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/item/accs">
                악세사리
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    );
  }
}
export default TopMainComponent;
