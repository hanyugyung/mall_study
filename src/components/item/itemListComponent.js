import React, { Component } from "react";
import * as itemService from "../../service/itemService";

class itemListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData : []
        }

        this.makeItemViewData = this.makeItemViewData.bind();
        this.itemDetail = this.itemDetail.bind();
    }

    componentWillMount = async() => {
       const items = await itemService.getItemList(this.props.itemType);
       this.makeItemViewData(items);
    }   

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.itemType);
    }

    makeItemViewData = (data) => {
        let itemData = data.data.list;
        let joinData = new Array();
        for(let key in itemData) {
            joinData.push(
                <div className="col-md-4" key={key}>
                    <div className="thumbnail">
                        <div className="item" style={{backgroundImage: "url(http://210.219.182.85:22000/" + itemData[key].prod_MASTER_IMG_PATH + "/" + itemData[key].prod_MASTER_IMG_NM + ")"}} onClick={() => this.itemDetail(itemData[key])}>
                        </div>
                        <div className="caption">
                            <div className="item_name">{itemData[key].prod_NM}</div>
                            <div className="item_price">
                                <span className="item_cost_price">{itemData[key].cost_PRICE}원</span>
                                <span className="item_sell_price">{itemData[key].sell_PRICE}원</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        this.setState({
            itemData : joinData
        });
    }

    itemDetail = (rowData) => {
        console.log(rowData);
    }

    render() {
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