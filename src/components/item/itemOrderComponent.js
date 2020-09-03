import React, { Component} from "react";
import Select from "react-select";

class itemOrderComponent extends Component {

    constructor(props) {
        super(props);
        this.prodSizeRefs = React.createRef();
        this.prodColorRefs = React.createRef();

        this.state = {
            sizeOptions : []
        }

        this.getColorList = this.getColorList.bind();
        this.getSizeList = this.getSizeList.bind();
        this.addProduct = this.addProduct.bind();
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
    
    addProduct = (event) => {
        console.log(this.prodSizeRefs.current.value)
        console.log(this.prodColorRefs.current.value)
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
                                    <select ref={this.prodSizeRefs} className="form-control" onChange={this.addProduct}>
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
                <div className="payment">
                    총 상품금액(수량) : <span>{this.props.prodInfo.sellPrice}</span>
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
