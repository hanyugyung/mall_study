import React, {Component} from "react"; 
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import {Container} from "react-bootstrap";

class HeaderComponent extends Component {
    getLogout(){
        // if(window.confirm("정말 로그아웃 하시는 건가요?")){
        //     axios({
        //         data: {
        //             "email": localStorage.getItem("email")
        //         },
        //         method: "post",
        //         url: "http://localhost:8080/api/user/logout",
        //         headers: {"content-type" : "application/json"}
        //     }).then(response => {
        //         console.log(response.data);
        //         if(response.data == "200"){
        //             this.props.onLogoutResult();
        //         }else{
        //             alert("LOGOUT EXCEPTION!!!");
        //         }
        //     }).catch(function (error)
        //         {console.log(error); 
        //     });
        // }else{
        //   //취소버튼 눌렀기 때문에 아무것도 실행되지 않음
        // }
    }
    render(){
      if(localStorage.getItem("id") != null){
        return(
          <Container>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/cs">고객센터</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="#">로그아웃</Nav.Link>
              </Nav.Item>
          </Nav>
          </Container>
        );
      }else{
        return(
          <Container>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/account/signup">회원가입(+2000)</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/cs">고객센터</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/account/login">로그인</Nav.Link>
              </Nav.Item>
          </Nav>
          </Container>
        );
      }
        
    }
}
export default HeaderComponent;