const activePath = localStorage.getItem('ActivePath') as string
const state = {
  systemName: 'GI数据采集管理系统', // 系统名称
  activePath: JSON.parse(activePath) || '/home', // 当前激活的路径
  menuList: [
    {
      icon: 'IconRobot',
      id: 'GZT',
      name: '工作台',
      path: '/home'
    },
    {
      icon: 'IconCopyright',
      id: 'ZBGL',
      name: '指标管理',
      path: '/indicator-manage'
    },
    {
      icon: 'IconSettings',
      id: 'ZBGL',
      name: '个人中心',
      path: '/user'
    }
  ]
}

// 获取菜单
const getters = {
  storeGetMenuList(state) {
    return state.menuList
  }
}
// 设置菜单
const mutations = {
  // 设置激活路径地址
  storeSetActivePath(state, path) {
    state.activePath = path
    localStorage.setItem('ActivePath', JSON.stringify(path))
  }
}
// 暴露模块
export default {
  namespaced: true,
  state,
  getters,
  mutations
}
