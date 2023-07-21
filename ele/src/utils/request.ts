import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosRequestHeaders,
} from "axios";
// import { Message, Notification } from "@arco-design/web-vue";
import {ElNotification,MessageBox, ElMessage,Loading} from 'element-plus'

import { getToken } from "@/utils/auth";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false }); // NProgress Configuration
console.log('process.env',import.meta.env)
interface ICodeMessage {
  [propName: number]: string;
}
/* 服务器返回数据的的类型，根据接口文档确定 */
export interface Result<T=any> {
  code: number,
  message: string,
  data: T
}

const StatusCodeMessage: ICodeMessage = {
  200: "服务器成功返回请求的数据",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）",
  204: "删除数据成功",
  400: "请求错误(400)",
  401: "未授权，请重新登录(401)",
  403: "拒绝访问(403)",
  404: "请求出错(404)",
  406: "请求的格式错误",
  408: "请求超时(408)",
  410: "资源被永久删除",
  422: "验证错误",
  500: "服务器错误(500)",
  501: "服务未实现(501)",
  502: "网络错误(502)",
  503: "服务不可用(503)",
  504: "网络超时(504)",
};

const service: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 600000,
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start(); // 进度条
    console.log('config.method',config.method )
    console.log("headers", config.headers );
    if (config.method === "post" || config.method === "put") {
      if (config.headers?.reqType === "json") {
        config.headers = {
          "Accept": 'application/json',
          "Content-Type": "application/json", // 配置请求头
        };
      } else {
        console.log('go')
        config.headers = {
          "Accept": 'application/json',
          "Content-Type": "application/x-www-form-urlencoded", // 配置请求头
        };
      }
    }
    // 上传
    if(config.method === "upload"){
      console.log('upload')
      config.method='post';
      config.headers={
       ...config.headers
      }
    }
    // get
    if(config.method === "get"){
      console.log('get')
      config.headers = {
        "Content-Type": "application/x-www-form-urlencoded", // 配置请求头
      };
    }

    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    const { data } = response;
    const { message, code } = data;
    console.log('message',message)
    if (code === -1) {
      NProgress.done();
      ElMessage.error(message || "服务器端错误");
      return Promise.reject(new Error("Error"));
    }
    NProgress.done();
    return response.data;
  },
  (error) => {
    NProgress.done();
    // Message.clear();
    const response = Object.assign({}, error.response);
    response &&
    ElMessage.error(
        StatusCodeMessage[response.status] ||
          "系统异常, 请检查网络或联系管理员！"
      );
    return Promise.reject(error);
  }
);

const request = <T = unknown>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    service
      .request<T>(config)
      .then((res: AxiosResponse) => resolve(res.data))
      .catch((err: { message: string }) => reject(err));
  });
};

// request.get = <T = unknown>(url: string, params?: object, headers?: AxiosRequestHeaders): Promise<T> => {
//   return request({
//     method: 'get',
//     url,
//     params,
//     headers
//   })
// }

// request.post = <T = unknown>(url: string, params?: object, headers?: AxiosRequestHeaders): Promise<T> => {
//   return request({
//     method: 'post',
//     url,
//     data: params,
//     headers
//   })
// }

export default service;
