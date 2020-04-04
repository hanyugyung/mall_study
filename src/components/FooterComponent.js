import React, {Component} from "react"; 
import {Container} from "react-bootstrap";

class FooterComponent extends Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
     render() { 
        return (
            <footer className="navbar-fixed-bottom">
            <div style={{background: 'white', 
                        borderTop: '1px solid #BDBDBD',
                        borderBottom: '1px solid #BDBDBD',
                        paddingTop: '20px',
                        paddingBottom: '20px'
                        }}>
                <Container>
                    <h1>this is footer aria</h1>
                </Container>
            </div>
            <div style={{
                        background: 'black', 
                        border: '1px solid #000000',
                        color: 'white',
                        paddingTop: '20px',
                        paddingBottom: '20px'
                        }}>
                <Container>
                    <p><strong>react study 2020</strong></p>
                    <p>상호: 한욱옹(주) | 사업장소재지: 성산동 21-20 | 대표이사: 한욱옹</p>
                </Container>
            </div>
            </footer>
        ); 
    } 
} 
export default FooterComponent;