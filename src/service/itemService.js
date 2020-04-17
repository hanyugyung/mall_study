import axios from 'axios';

const baseUrl = "http://210.219.182.85:22000/v1/api/product/";

// 상품 리스트 조회
export function getItemList(itemType) {
    return axios({
       method : 'get'
       , url : baseUrl + itemType + "/list"
       , params : {
            itemType : itemType
       }
    });
}