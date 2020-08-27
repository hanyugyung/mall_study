import React, { Component } from "react";
import * as itemService from "../../service/itemService";

class itemListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData : []
            , beforeItemType: ""
        }

        this.makeItemViewData = this.makeItemViewData.bind();
        this.getProductList = this.getProductList.bind();
        this.itemDetail = this.itemDetail.bind();
    }
    
    
    componentWillReceiveProps(nextProps) {

    }

    getProductList = async(prodCode) => {
        const items = await itemService.getProductList(prodCode);
        this.makeItemViewData(items.data);
    } 

    makeItemViewData = (result) => {
        let itemData = result.data;
        let joinData = new Array();
        for(let key in itemData) {
            joinData.push(
                <div className="col-md-4" key={key}>
                    <div className="thumbnail">
                        <div className="item" style={{backgroundImage: "url(http://localhost:8080" + itemData[key].prodMasterImagePath + "/" + itemData[key].prodMasterImageName + ")"}} onClick={() => this.itemDetail(itemData[key])}>
                        </div>
                        <div className="caption" onClick={() => this.itemDetail(itemData[key])}>
                            <div className="item_name">{itemData[key].prodName}</div>
                            <div className="item_price">
                                <span className="item_cost_price">{itemData[key].costPrice}원</span>
                                <span className="item_sell_price">{itemData[key].costPrice}원</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        this.setState({
            itemData : joinData
            ,beforeItemType : this.props.itemType
        });
    }

    itemDetail = (rowData) => {
        window.location.href = "http://localhost:3000/" + this.props.itemType + "/item/info?prodcode=" + rowData.prodCode;
    }

    render() {
        if(this.props.itemType != this.state.beforeItemType) {
            this.getProductList(this.props.itemType)
        }
        return (
            <div className="container">
                <div className="row">
                    {this.state.itemData}
                </div>
            </div>
        );
    };
};

export default itemListComponent;