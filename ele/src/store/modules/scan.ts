import { defineStore } from "pinia";
import { toRaw, reactive, ref } from "vue";
import { waybillNo, selectPage,getQueryMaxNumber } from "../../api/scan";
import dayjs from "dayjs";
interface FormState {
  waybillNoList: string;
  time: string[];
  scanSiteCode: string;
  prevSiteCode: string;
  scanCode: string;
  productTypeCodeList: number[];
  selectType: number;
}
const paramsForm: FormState = {
  waybillNoList: "",
  time: [
    dayjs(new Date()).format("YYYY-MM-DD 00:00:00"),
    dayjs(new Date()).format("YYYY-MM-DD 23:59:59")
  ],
  scanSiteCode: "",
  prevSiteCode: "",
  scanCode: "",
  productTypeCodeList: [],
  selectType: 20
};
export const useScanStore = defineStore({
  id: "app-scan", // id必填，且需要唯一
  state: () =>
    reactive({
      name: "张三",
      searchParams: { ...paramsForm },
      pageSize: 20,
      page: 2,
      reachData: []
    }),
  getters: {
    getUpdate(): FormState {
      return (this.searchParams = paramsForm);
    }
  },
  actions: {
    async getData(payload: any) {
      console.log("payload", payload);
      const param = {
        // waybillNoList:[payload.waybillNoList],
        pageSize: this.pageSize,
        page: this.page,
        ...this.searchParams,
        pageTotalSwitch: 20,
        selectType: 20
      };
      console.log("param", param);
      const payloadData = { ...param, ...payload, scanSiteCode: null };
      console.log("time", payloadData.time[0]);
      payloadData.waybillNoList = payloadData.waybillNoList
        ? payloadData.waybillNoList
            .replace(/[，, ]+/g, " ")
            .replace(/[\n, ]+/g, " ")
            .trim()
            .split(" ")
        : []; //单号
      payloadData["scanSiteCode"] = payloadData.scanSiteCode ? payloadData.scanSiteCode.code : ""; //扫描网点
      payloadData["scanCode"] = payloadData.scanCode ? payloadData.scanCode.lbUserCode : ""; //扫描人
      payloadData["prevSiteCode"] = payloadData.prevSiteCode ? payloadData.prevSiteCode.code : ""; //上一网点
      payloadData["beginDate"] = payloadData?.time[0];
      payloadData["endDate"] = payloadData?.time[1];
      var data: any = [];
      if (payloadData.waybillNoList.length !== 0) {
        // 运单查询
        data = await waybillNo({
          waybillNoList: payloadData.waybillNoList,
          page: 1,
          pageSize: payloadData.pageSize,
          selectType: payloadData.selectType
        });
      } else {
        // 分页查询
        data = await selectPage(payloadData);
      }
      if (data && data?.code === 1) {
        if (data.data.rows) {
          console.log("res.data.rows", data.data.rows);
          this.reachData = data.data.rows;
        }
      }
    },
    async  PostQueryMaxNumber(payload:any){
      console.log('payload',payload)
      var data = await getQueryMaxNumber(payload);
      if(data&& data?.code===1){
        console.log('data',data.data)
      }
    },
  }

  // 点击按钮清除搜索表单
  // *searchClean(_, { put }) {
  //   yield put({ type: 'updateState', payload: { searchParams: { ...paramsForm } } });
  //   // yield put({ type: 'getData' });
  // },
});
