import request from '../../src/utils/request'
export async function waybillNo(params:any) {
  return request({
    url: '/api/site/reach/waybillNo',
    method: 'post',
    data: params
  })
}