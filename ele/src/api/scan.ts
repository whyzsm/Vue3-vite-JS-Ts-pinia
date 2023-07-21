import request from "../../src/utils/request";
import type { waybillNo} from './types'

export async function waybillNo(params: waybillNo) {
  console.log('params+++',params)
  return request({
    url: "/api/site/reach/waybillNo",
    method: "post",
    data: params,
    headers:{ //post需求加reqType：json就是application/json
      reqType: 'json',
      // module: 'encrypt', //跨模块
    }
  });
}

export async function selectPage(params:any) {
  return request('/api/site/reach/condition', {
    method: 'POST',
    data: params,
    headers:{
      reqType: 'json',
    }
  });
}

export const getQueryMaxNumber = (params:any) => {
  return request('/api/dictionary/info/selectByTypeCode', {
    method: 'POST',
    data: params,
    // headers:{
    //   reqType: 'json',
    // }
  });
};

export const getReping = (params:any) => {
  return request('api/163reping', {
    method: 'POST',
    data: params,
    headers:{
      reqType: 'json',
    }
  });
};
