import axios from 'axios';

//const baseUrl = "http://210.219.182.85:22000/v1/api/product/";
const baseUrl = "http://localhost:8080/v1/api/product/";

// 상품 리스트 조회
export function getProductList(productCode) {
    return axios({
       method : 'get'
       , url : baseUrl + 'list'
       , params : {
            prodCode : productCode
       }
    });
}

/* 상품 상세 정보 */
export function getProductDetail(productCode) {
    return axios({
        method : 'get'
        , url : baseUrl +  'info'
        , params : {
            productCode :productCode
        }
    });
}