import React, { Component } from "react";

class itemOrderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.prodData);
        return (
            <div className="item_order">
                <div className="item_order_info">
                    <span>{this.props.prodData.prodName}[{this.props.prodData.prodCode}]</span>
                    <br/>
                    <table>
                        <tr className="sell">
                            <td>판매가</td>
                            <td>{this.props.prodData.sellPrice}원</td>
                        </tr>
                        <tr className="lines"></tr>
                        <tr>
                            <td>color</td>
                            <td>select Box로</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>select Box로</td>
                        </tr>
                        <tr className="lines"></tr>
                        <tr>
                            <td colSpan="2">
                            (최소주문수량 1개 이상)<br/>
                            <span className="warning">위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="payment">
                    총 상품금액(수량) : <span>{this.props.prodData.sellPrice}</span>
                </div>
                <div>
                    <button>Cart</button>
                    <button>BUY</button>
                </div>
            </div>
        );
    };
};

export default itemOrderComponent;