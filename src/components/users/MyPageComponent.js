import React, { Component } from "react";
import { Container } from "react-bootstrap";

class MyPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //handle event when check box clicked
  handleCheck() {
    this.checked = !this.checked;
  }
  //move to next sign up step when agree button clicked
  moveToNextSignUpStep() {
    console.log(this.checked);
    if (!this.checked) {
      alert("이용약관에 동의해주세요.");
    } else {
      window.location.href = "/account/signup2";
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
            마이페이지
          </center>
        </Container>
      </div>
    );
  }
}
export default MyPageComponent;
