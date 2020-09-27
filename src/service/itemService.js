import axios from 'axios';
import qs from 'qs';

const baseUrl = "http://localhost:8080/v1/api";

// 상품 리스트 조회
export function getProductList(productCode) {
    return axios({
       method : 'get'
       , url : baseUrl + '/product/list'
       , params : {
            prodCode : productCode
       }
    });
}

/* 상품 상세 정보 */
export function getProductInfo(productCode) {
    return axios({
        method : 'get'
        , url : baseUrl +  '/product/info'
        , params : {
            prodCode :productCode
        }
    });
}

/* 장바구니 저장 */
export function postCart(productCode, totalPrice, totalCount, itemList) {
    var data = {
        "userId" : "kmg1123ck"
        , "totalPrice" : totalPrice
        , "totalCount" : totalCount
        , "itemList" : itemList
    };

    return axios({
        url: baseUrl + "/cart/" + productCode,
        method : "post",
        data : data,
        headers : {
            'X-BACKEND-TOKEN': 'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjAwMzEwMDQzNjMzLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTm8iOiI2MTYxMjMyMTAiLCJleHBpcmVkRGF0ZSI6MTYwMDM5NjQ0MzYzMiwidXNlcklkIjoia21nMTEyM2NrIn0.Js_dBqShOp8gJ7B3xFScHnsbYPyPGpg4plx60f_BTEA'
            , 'content-type' : 'application/json'
        }
    });
}