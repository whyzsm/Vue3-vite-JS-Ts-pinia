import request from "../../src/utils/request";
export async function waybillNo(params: any) {
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
