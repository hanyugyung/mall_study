import React, { Component} from "react";


class itemOrderComponent extends Component {

    constructor(props) {
        super(props);
        this.prodSizeRefs = React.createRef();
        this.prodColorRefs = React.createRef();
    
        this.state = {
            sizeOptions : []        // size selectBox
            , choiceItemObject : [] // 추가한 상품 리스트
            , totalOrderPrice : 0   // 총 주문금액
            , totalOrderCount : 0   // 총 주문수량
        }

        this.getColorList = this.getColorList.bind();           // color select box
        this.getSizeList = this.getSizeList.bind();             // size select box
        this.addProductList = this.addProductList.bind();       // 선택한 상품 리스트
        this.orderCountHandler = this.orderCountHandler.bind(); // 수량 증가 이벤트
    }

    getColorList = () => {
        let colorArr = new Array();
        for(let key in this.props.prodColor) {
            colorArr.push(
                <option key={this.props.prodColor[key].prodColorCd} value={this.props.prodColor[key].prodColorCd}>{this.props.prodColor[key].prodColorNm}</option>
            )
        }
        return colorArr;
    }

    getSizeList = (event) => {
        let color = event.target.value;
        let sizeArr = new Array();

        for(let key in this.props.prodSize) {
            if(this.props.prodSize[key].prodColorCd === color) {
                sizeArr.push(
                    <option key={this.props.prodSize[key].prodSize} value={this.props.prodSize[key].prodSize}>({color}) {this.props.prodSize[key].prodSize}</option>
                )
            }
        }

        this.prodSizeRefs.current.value = "";   // size selectbox 초기화
        this.setState({
            sizeOptions : sizeArr
        });
    }
    
    addProductList = (event) => {
        let choiceItemArray = this.state.choiceItemObject;
        let choiceItem = new Object();

        choiceItem.orderCount = 1;
        choiceItem.orderPrice = parseInt(this.props.prodInfo.sellPrice);
        choiceItem.colorCode = this.prodColorRefs.current[this.prodColorRefs.current.selectedIndex].value;
        choiceItem.colorName = this.prodColorRefs.current[this.prodColorRefs.current.selectedIndex].label;
        choiceItem.sizeCode = this.prodSizeRefs.current[this.prodSizeRefs.current.selectedIndex].value;
        choiceItem.sizeName = this.prodSizeRefs.current[this.prodSizeRefs.current.selectedIndex].label;
        
        choiceItemArray.push(choiceItem);
        this.prodColorRefs.current.value = "";   // color selectbox 초기화

        this.setState({
            choiceItemObject: choiceItemArray
            , sizeOptions : []
            , totalOrderPrice : parseInt(this.state.totalOrderPrice) + parseInt(this.props.prodInfo.sellPrice)
            , totalOrderCount : parseInt(this.state.totalOrderCount) + 1
        });
    }

    orderCountHandler = (event, idx) => {
        let choiceItemArray = this.state.choiceItemObject;
        let totalOrderPrice = this.state.totalOrderPrice;
        let totalOrderCount = this.state.totalOrderCount;
        
        switch(event.target.name) {
            case "up" :
                choiceItemArray[idx].orderCount += 1;
                choiceItemArray[idx].orderPrice = parseInt(choiceItemArray[idx].orderPrice) + parseInt(this.props.prodInfo.sellPrice);
    
                totalOrderPrice += parseInt(this.props.prodInfo.sellPrice)
                totalOrderCount += 1;
            break;
            case "down" :
                if(choiceItemArray[idx].orderCount-1 < 1) {
                    alert('최소수량은 1개 이하일 수 없습니다.');
                    return false;
                }
                choiceItemArray[idx].orderCount -= 1;
                choiceItemArray[idx].orderPrice = parseInt(choiceItemArray[idx].orderPrice) - parseInt(this.props.prodInfo.sellPrice);
    
                totalOrderPrice -= parseInt(this.props.prodInfo.sellPrice)
                totalOrderCount -= 1;
            break;
            case "cancel" :
                totalOrderCount -= parseInt(choiceItemArray[idx].orderCount)
                totalOrderPrice -= parseInt(choiceItemArray[idx].orderPrice);
    
                choiceItemArray.splice(idx,1);
            break;
        }

        this.setState({
            choiceItemObject : choiceItemArray
            , totalOrderCount : totalOrderCount
            , totalOrderPrice : totalOrderPrice
        });
    }

    manualOrderCountHanlder = (event, idx) => {
        if(event.target.value < 1) {
            alert('최소수량은 1개 이하일 수 없습니다.');
            return false;
        }
        let choiceItemArray = this.state.choiceItemObject;
        let totalOrderPrice = this.state.totalOrderPrice;
        let totalOrderCount = this.state.totalOrderCount;

        totalOrderPrice = this.state.totalOrderPrice - parseInt(choiceItemArray[idx].orderPrice) + parseInt(this.props.prodInfo.sellPrice * event.target.value);
        totalOrderCount = this.state.totalOrderCount - parseInt(choiceItemArray[idx].orderCount) + parseInt(event.target.value);

        choiceItemArray[idx].orderCount = parseInt(event.target.value);
        choiceItemArray[idx].orderPrice = parseInt(this.props.prodInfo.sellPrice * event.target.value);


        this.setState({
            choiceItemObject : choiceItemArray
            , totalOrderPrice : totalOrderPrice
            , totalOrderCount : totalOrderCount
        });
    }

    render() {
        return (
            <div className="item_order">
                <div className="item_order_info">
                    <span>{this.props.prodInfo.prodName}[{this.props.prodInfo.prodCode}]</span>
                    <br/>
                    <table>
                        <tbody>
                            <tr className="sell">
                                <td>판매가</td>
                                <td>{this.props.prodInfo.sellPrice}원</td>
                            </tr>
                            <tr className="lines"></tr>
                            <tr>
                                <td>color</td>
                                <td>
                                    <select ref={this.prodColorRefs} className="form-control" onChange={this.getSizeList}>
                                        <option value="">[필수] 옵션을 선택해주세요.</option>
                                        {this.getColorList()}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>
                                    <select ref={this.prodSizeRefs} className="form-control select_style" onChange={this.addProductList}>
                                        <option value="">[필수] 옵션을 선택해주세요.</option>
                                        {this.state.sizeOptions}
                                    </select>
                                </td>
                            </tr>
                            <tr className="lines"></tr>
                            <tr>
                                <td colSpan="2">
                                (최소주문수량 1개 이상)<br/>
                                <span className="warning">위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <div className="item_choice_info">
                        {
                            this.state.choiceItemObject.map((item, index) =>(
                                <div key={index} className="row">
                                    <div className="col-5">
                                        <span>{this.props.prodInfo.prodName}</span><br/>
                                        <span className="option">- {item.colorName} / {item.sizeName}</span>
                                    </div>
                                    <div className="col">
                                        <div className="order_count_area">
                                            <div className="order_left">
                                                <input type="text" className="form-control form-control-sm order_count" value={item.orderCount} onChange={(event)=>this.manualOrderCountHanlder(event, index)} />
                                            </div>
                                            <div className="order_right">
                                                <div className="order_btn" onClick={(event) => this.orderCountHandler(event, index)}>
                                                    <img src={require("../../img/btn_count_up.gif")} name="up" />
                                                </div>
                                                <div className="order_btn" onClick={(event) => this.orderCountHandler(event, index)}>
                                                    <img src={require("../../img/btn_count_down.gif")} name="down"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="item_order_price_area">
                                            <div className="item_order_price_area">
                                                <span>{item.orderPrice}원</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="order_btn del" onClick={(event) => this.orderCountHandler(event, index)}>
                                            <img src={require("../../img/btn_price_delete.gif")} name="cancel" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="container payment">
                    <div className="row right">
                        총 상품금액 (수량) : <span>{this.state.totalOrderPrice}원 ({this.state.totalOrderCount} 개)</span>
                    </div>
                </div>
                <div className="container">
                    <div className="row btn_area">
                        <div className="col-6">
                            <button type="button" className="btn btn-dark btn-block">Cart</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-success btn-block">BUY</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default itemOrderComponent;
