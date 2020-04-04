import React, {Component} from "react"; 
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import {Container} from "react-bootstrap";

class CsComponent extends Component {    
    render(){
        return(
            <div className="sub-page">
                <Container>
                    고객센터
                </Container>
            </div>
      
        );  
    }
}
export default CsComponent;