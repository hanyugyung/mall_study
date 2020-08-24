import React, { Component } from "react";
import * as itemService from "../../service/itemService";

class itemDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData : []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    상품상세 및 구매할 수 있는 정보를 그리면 됨.
                </div>
            </div>
        );
    };
};

export default itemDetailComponent;