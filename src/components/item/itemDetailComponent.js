import React, { Component } from "react";
import ORDER from './itemOrderComponent';
import * as itemService from "../../service/itemService";

class itemDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodInfo : ""
            , imageData : []
            , beforeProdCode : ""
        }
        this.getProdInfoDataList = this.getProdInfoDataList.bind();
        this.makeProdInfoView = this.makeProdInfoView.bind();
    }

    getProdInfoDataList = async() => {
        const prodCode = new URLSearchParams(this.props.location.search).get("prodcode");
        const items = await itemService.getProductInfo(prodCode);

        this.makeProdInfoView(items, prodCode);
    }

    makeProdInfoView = (result, prodCode) => {
        let prodDetailInfo = result.data.data;
        let prodDetailImageData = result.data.listData;
        let joinData = new Array();

        for(let key in prodDetailImageData) {
            let imgSrc = "http://localhost:8080" + prodDetailImageData[key].prodIntroImagePath + "/" + prodDetailImageData[key].prodIntroImageNm;
            joinData.push(
                <div key={key} style={{position:"relative", left:"50%"}}>
                <img src= {imgSrc} key={key} style={{marginLeft:"-450px"}}/>
                </div>
            );
        }

        this.setState({
            prodInfo : prodDetailInfo
          , imageData : joinData
          , beforeProdCode : prodCode
        });
    }

    render() {
        if(new URLSearchParams(this.props.location.search).get("prodcode") != this.state.beforeProdCode) {
            this.getProdInfoDataList(this.props.itemType)
        }
        return (
            <div className="container">
                    <div className="item_detail">
                        <div className="item_detail_main_left">
                            <img src={"http://localhost:8080" + this.state.prodInfo.prodMasterImagePath + "/" + this.state.prodInfo.prodMasterImageName}></img>
                        </div>
                        <div className="item_detail_main_right">
                           <ORDER prodData = {this.state.prodInfo}></ORDER>
                        </div>
                    </div>
                <div>
                    {this.state.imageData}
                </div>
            </div>
        );
    };
};

export default itemDetailComponent;