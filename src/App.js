import React, { Component } from "react";
import "./App.css";
import "./css/product.css"
import MainComponent from "./components/MainComponent";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMainComponent from "./components/TopMainComponent";
import SignupComponent from "./components/users/SignupComponent";
import SignupComponent2 from "./components/users/SignupComponent2";
import FooterComponent from "./components/FooterComponent.js";
import CsComponent from "./components/cs/CsComponent";
import LoginComponent from "./components/login/LoginComponent";

//소녀나라 참고
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <HeaderComponent />
          <TopMainComponent />

          <Route path="/account/signup" component={SignupComponent} />
          <Route path="/account/signup2" component={SignupComponent2} />
          <Route path="/cs" component={CsComponent} />
          <Route path="/account/login" component={LoginComponent} />
          <Route exact path="/" component={MainComponent} />
          <Switch>
            <Route path="/item/:type" component={MainComponent} />
          </Switch>
{
  /*
          <Route path="/item/tops" component={MainComponent} />
          <Route path="/item/shirts" component={MainComponent} />
          <Route path="/item/trainings" component={MainComponent} />
          <Route path="/item/basics" component={MainComponent} />
          <Route path="/item/onepieces" component={MainComponent} />
          <Route path="/item/skirts" component={MainComponent} />
          <Route path="/item/pants" component={MainComponent} />
          <Route path="/item/bags" component={MainComponent} />
          <Route path="/item/shoeses" component={MainComponent} />
          <Route path="/item/accs" component={MainComponent} />
          */
}
          <FooterComponent />
        </Router>
      </>
    );
  }
}

export default App;
