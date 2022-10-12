import { defineStore } from 'pinia';
import { toRaw,reactive,ref } from 'vue';
import {waybillNo } from '../../api/scan'
interface FormState {
  waybillNoList: string;
  time: string;
  scanSiteCode: string;
  prevSiteCode: string;
  scanCode: string;
  productTypeCodeList: number[];
  selectType: number;
}
const paramsForm: FormState = {
  waybillNoList: '',
  time: '',
  scanSiteCode: '',
  prevSiteCode: '',
  scanCode: '',
  productTypeCodeList: [],
  selectType: 20,
};
export const useScanStore = defineStore({
  id: 'app-scan', // id必填，且需要唯一
  state: () => reactive({
    name: '张三',
    searchParams: { ...paramsForm },
    pageSize: 20,
    page: 1,
    reachData:[],
  }),
  getters: {
    getUpdate():FormState {
      return this.searchParams=paramsForm;
    },
  },
  actions: {
    async getData(payload:any){
      console.log('payload',payload)
      const param={
        waybillNoList:[payload.waybillNoList],
        pageSize: this.pageSize,
        page:this.page,
        selectType:20
      }
      console.log('param',param)
    const res=  await waybillNo(param);
    console.log('res',res)
    if(res&&res.code===1){
      console.log('11111')
      if(res.data.rows){
        console.log('res.data.rows',res.data.rows)
        this.reachData=res.data.rows;
      }
    }
    }

  },

  // 点击按钮清除搜索表单
  // *searchClean(_, { put }) {
  //   yield put({ type: 'updateState', payload: { searchParams: { ...paramsForm } } });
  //   // yield put({ type: 'getData' });
  // },
});
