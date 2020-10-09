import axios from 'axios';
import qs from 'qs';

const baseUrl = "http://localhost:8080/v1/api";

// 
export function getCountOfEachProduct(productCode) {
    return axios({
       method : 'get'
       , url : baseUrl + '/stat/countOfEachProduct'
    });
}