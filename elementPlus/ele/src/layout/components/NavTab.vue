<template>
  <div class="Tiny_nav" v-if="appStore.tab">
    <el-tabs
    v-model="route.path"
    closable
    type="card"
    class="demo-tabs"
    @tab-click="onClick"
    @tab-remove="onClose"
  >
    <el-tab-pane
      v-for="item in navtabStore.tagList"
      :key="item.path"
      :label="item.name"
      :name="item.path"
    />
  </el-tabs>
  </div>
</template>

<script setup lang="ts" name="NavTab">
import { watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import {useNavTabStore} from '../../store/modules/navtab'
import {useAppStore} from '../../store/modules/app'
import type { TabsPaneContext } from 'element-plus'


const route = useRoute()
const router = useRouter()
const navtabStore = useNavTabStore()
const appStore = useAppStore()
const { autoLeftWidth } = storeToRefs(appStore);

onMounted(() => {
handleNavTab()
})

// 监听路由变化
watch(
() => route.path,
() => {
handleNavTab()
}
)

const handleNavTab = () => {
// console.log('路由变化', newVal)
// console.log('路由对象', route)
navtabStore.addTagItem({
name: route.meta.title || '未命名',
path: route.path,
componentName: route.name
} as NavTabItem)
if (route.meta.keepAlive) {
navtabStore.addCacheItem(String(route.name))
}
}

// 点击页签
const onClick = (tab: TabsPaneContext, event: Event) => {
// console.log('点击前', navtabStore.cacheList, key)
router.push({ path: tab.props.name.toString() })
}

// 关闭页签
const onClose = (targetName: string, action: 'remove'| 'add' ) => {
  if(action==='remove'){
    console.log('targetName',targetName)
    navtabStore.tagList.map(item=>{
      console.log('item',item)
    })
  }
const item = navtabStore.tagList.find((i) => i.path === targetName)
navtabStore.removeTagItem(targetName.toString())
if (item?.componentName) {
navtabStore.removeCacheItem(item.componentName)
}
}

// 关闭所有页签
const onCloseAll = () => {
navtabStore.clearTagList()
}
</script>

<style lang="scss" scoped>
.Tiny_nav{ position: relative; width: 100%; background:#fff; height: 37px;}
:deep(.el-tabs--card>.el-tabs__header){
  height: 37px;
}
:deep(.el-tabs--card>.el-tabs__header .el-tabs__nav){ height: 31px;margin-top: 6px;}
:deep(.el-tabs__item){ line-height: 31px; }
:deep(.el-tabs--card>.el-tabs__header .el-tabs__item){background:#EEEEEE;}
:deep(.el-tabs--card>.el-tabs__header .el-tabs__item.is-active){
  background: #fff;
  border: 1px solid #7197D2;
}
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(90deg);
  }

  100% {
    -webkit-transform: rotate(180deg);
  }
}
</style>
