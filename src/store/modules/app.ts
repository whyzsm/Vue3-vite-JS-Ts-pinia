import { defineStore } from "pinia";
const activePath = localStorage.getItem("ActivePath") as string;
export const useAppStore = defineStore({
  id: "app", // id必填，且需要唯一
  state: () => ({
    systemName: "GI数据采集管理系统", // 系统名称
    activePath: JSON.parse(activePath) || "/home", // 当前激活的路径
    menuList: [
      {
        icon: "iconfangjian",
        id: "GZT",
        name: "工作台",
        path: "/home",
<<<<<<< HEAD
        meta: {
          title: '其他',
          locale: 'menu.other',
          requiresAuth: false,
          icon: 'icon-settings',
          order: 4
        },
=======
>>>>>>> parent of 820e23c... zsm
      },
      {
        icon: "iconshuju2",
        id: "ZBGL",
        name: "指标管理",
        path: "/indicator-manage",
<<<<<<< HEAD
        meta: {
          title: '其他',
          locale: 'menu.other',
          requiresAuth: false,
          icon: 'icon-bookmark',
          order: 4
        },
=======
>>>>>>> parent of 820e23c... zsm
      },
      {
        icon: "iconfenlei",
        id: "ZBGL",
        name: "个人中心",
        path: "/user",
<<<<<<< HEAD
        meta: {
          title: '其他',
          locale: 'menu.other',
          requiresAuth: false,
          icon: 'icon-layers',
          order: 4
        },
=======
>>>>>>> parent of 820e23c... zsm
      },
    ],
    memuWidth: 200,
  }),
  getters: {
    storeGetMenuList(state) {
      return state.menuList;
    },
     // 动态菜单
     asyncMenus(): any {
      return this.serverMenu
    }
  },
  actions: {
    update(memuWidth: number) {
      console.log("memuWidth", memuWidth);
      this.memuWidth = memuWidth;
      console.log("this.memuWidt", this.memuWidth);
    },
    // storeSetActivePath(state, path) {
    //   state.activePath = path;
    //   localStorage.setItem("ActivePath", JSON.stringify(path));
    // },
  },
});
