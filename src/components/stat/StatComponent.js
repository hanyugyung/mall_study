import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Grid } from 'gridjs-react';
import "../../css/gridjs.css";

class StatComponent extends Component {
  render() {
    return (
      <div className="sub-page">
        <Grid
          data={[
            ['John', 'john@example.com'],
            ['Mike', 'mike@gmail.com']
          ]}
          columns={['Name', 'Email']}
          search={true}
          pagination={{
            enabled: true,
            limit: 1,
          }}
        />
      </div>
    );
  }
}
export default StatComponent;
