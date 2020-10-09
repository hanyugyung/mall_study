import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Grid } from 'gridjs-react';
import "../../css/gridjs.css";
import * as statService from "../../service/statService";

class StatComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridData: null
    }
}


  getCountOfEachProduct = async() => {
    const response = await statService.getCountOfEachProduct();
  
    var dataList = response.data.data;
    var resultList = [];
    for(let dataObject of dataList){
      let dataObjectList = [];
      for(let key in dataObject){
        dataObjectList.push(dataObject[key]);
      }
      resultList.push(dataObjectList)
    }

    this.setState({
      gridData: resultList
    });
  } 

  render() {
    console.log(this.getCountOfEachProduct());
    
    var grid = null;
    if(this.state.gridData){
      grid = <Grid
      data={this.state.gridData}
      columns={['제품명', '갯수']}
    />;
    }

     

    return (
      <div className="sub-page">
        <Container>
          {grid}
        </Container>
      </div>
    );
  }
}
export default StatComponent;
