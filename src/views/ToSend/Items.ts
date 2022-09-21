
export interface FormSchema {
  type: string;
  label: string;
  key: string;
  option?: any;
  mode?: string;
}

export const searchFormItems = (): FormSchema[] => {
  return [
    {
      type: 'Input',
      label: '按单号查询',
      key: 'waybillNoList',
    },
    {
      type: 'RangePicker',
      label: '扫描时间',
      key: 'time',
    },
    {
      type: 'Radio', // 单选按钮模式的组件
      key: 'selectType',
      label: '单号类型',
      option: [
        { value: 20, label: '主单' },
        { value: 10, label: '子单' },
        { value: 30, label: '回单' },
      ],
    },
    {
      type: 'Input', //员工模糊查询
      key: 'scanCode', // 传给后台的
      label: '扫描人',
    },
    {
      type: 'Select', // 下拉select 样式的组件
      key: 'productTypeCodeList',
      label: '产品类型',
      // allowClear: true, //可清除
      mode: 'multiple',
      option: [
        { value: '', label: '全部' },
        { value: 10, label: '公司车' },
        { value: 20, label: '网点车' },
      ],
    },
  ];
};
