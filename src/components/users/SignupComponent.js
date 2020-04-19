import React, { Component } from "react";
import { Container } from "react-bootstrap";

class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.checked = false;
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
      window.location.href = "/users/signup2";
    }
  }
  //move to login when disagree button clicked
  moveToLogin() {
    window.location.href = "/login";
  }
  render() {
    return (
      <div className="sub-page">
        <Container>
          <center>
            <h2 className="sign-up-main-text">
              <strong>JOIN US</strong>
            </h2>
            <input type="checkbox" onChange={() => this.handleCheck()} />
            <label htmlFor="agree">
              이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
            </label>
            <div>
              <span className="button-box">
                <button
                  className="basic-button"
                  onClick={() => this.moveToNextSignUpStep()}
                >
                  동의
                </button>
                <button
                  className="basic-grey-button second"
                  onClick={() => this.moveToLogin()}
                >
                  비동의
                </button>
              </span>
            </div>
          </center>
        </Container>
      </div>
    );
  }
}
export default SignupComponent;
