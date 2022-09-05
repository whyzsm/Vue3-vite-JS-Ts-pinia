import { defineStore } from 'pinia'
const data={iptName:'input',seltName:'全部'}
export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => ({
    name: '张三',
    formdata: {...data},
  }),
  actions: {
    updateName(name: string) {
      this.name = name;
    },
    iptUpadataName() {
      this.formdata =data ;
    }
  }

})