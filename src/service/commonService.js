import axios from 'axios';

//const baseUrl = "http://210.219.182.85:22000/v1/api/common/";
const baseUrl = "http://localhost:8080/v1/api/common/";

/* 메뉴 리스트 조회 */
export function getItemList() {
    return axios({
       method : 'get'
       , url : baseUrl + "menu/list"
    });
}


