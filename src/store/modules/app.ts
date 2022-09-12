import { defineStore } from "pinia";
import type { TabModeType, animateModeType } from "../../config/option";
import defaultSettings from '../../config/setting.json'
import { Notification } from '@arco-design/web-vue'
import type { NotificationReturn } from '@arco-design/web-vue'

interface ThemeState {
  theme: "light" | "dark";
  themeColor: string;
  header: boolean;
  footer: boolean;
  menu: boolean;
  hideMenu: boolean;
  menuWidth: number;
  menuCollapse: boolean;
  tab: boolean;
  tabMode: TabModeType;
  animate: boolean;
  animateMode: animateModeType;
  menuFromServer: boolean;
  serverMenu: any[];
  menuList: any[];
  autoLeftWidth: number;
}
// activePath: JSON.parse(activePath) || "/home", // 当前激活的路径
// const activePath = localStorage.getItem("ActivePath") as string;

const storageAppSetting = JSON.parse(
  localStorage.getItem("ActivePath") || "{}"
);

export const useAppStore = defineStore({
  id: "app", // id必填，且需要唯一
  state: (): ThemeState => ({
    ...defaultSettings,
    ...storageAppSetting,
    autoLeftWidth: 200,
    menuList: [
      {
        icon: "IconRobot",
        id: "GZT",
        name: "工作台",
        path: "/home",
        meta: {
          title: '其他',
          locale: 'menu.other',
          requiresAuth: false,
          icon: 'menu-nav',
          order: 4
        },
      },
      {
        icon: "IconCopyright",
        id: "ZBGL",
        name: "指标管理",
        path: "/indicator-manage",
        meta: {
          title: '其他',
          locale: 'menu.other',
          requiresAuth: false,
          icon: 'menu-nav',
          order: 4
        },
      },
      {
        icon: "IconSettings",
        id: "ZBGL",
        name: "个人中心",
        path: "/user",
        meta: {
          title: '其他',
          locale: 'menu.other',
          requiresAuth: false,
          icon: 'menu-nav',
          order: 4
        },
      },
    ],
  }),
  getters: {
    storeGetMenuList(state) {
      return state.menuList;
    },
  },
  actions: {
    // 动态更新main的宽度
    update(autoLeftWidth: number) {
      console.log("autoLeftWidth", autoLeftWidth);
      this.autoLeftWidth = autoLeftWidth;
      console.log("this.memuWidt", this.autoLeftWidth);
    },
    // 改变菜单来源方式
    changeMenuFromServer(value: boolean) {
      this.menuFromServer = value;
    },
     // 获取动态菜单
     async getServerMenus() {
      let notifyInstance: NotificationReturn | null = null
      try {
        notifyInstance = Notification.info({
          id: 'menuNotice', // Keep the instance id the same
          content: '动态菜单加载中',
          closable: true
        })
        // const { data } = await getMenuList()
        // this.serverMenu = data
        this.serverMenu=this.menuList
        notifyInstance = Notification.success({
          id: 'menuNotice',
          content: '加载成功',
          closable: true
        })
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        notifyInstance = Notification.error({
          id: 'menuNotice',
          content: '加载失败',
          closable: true
        })
      }
    },
    // 清除服务菜单
    clearServerMenu() {
      this.serverMenu = []
    },
  },
});
