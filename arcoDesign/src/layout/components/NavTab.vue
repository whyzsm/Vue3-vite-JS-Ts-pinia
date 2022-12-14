<template>
  <div class="nav-tab Tiny_nav" v-if="appStore.tab">
    <a-tabs editable hide-content size="medium" :type="appStore.tabMode" :active-key="route.path" @tab-click="onClick"
      @delete="onClose">
      <a-tab-pane v-for="item of navtabStore.tagList" :key="item.path" :title="item.name"
        :closable="item.path !== '/home'"></a-tab-pane>
      <!-- 右侧按钮 -->
      <template #extra>
        <a-dropdown trigger="hover">
          <a-button type="primary" size="mini" class="extra-btn">
            <template #icon>
              <icon-settings :size="18" />
            </template>
          </a-button>
          <template #content>
            <a-doption @click="onClose(route.path)">
              <template #icon>
                <icon-minus-circle-fill :size="20" style="color: rgb(var(--warning-6))" />
              </template>
              <template #default>关闭当前页签</template>
            </a-doption>
            <a-doption @click="onCloseAll">
              <template #icon>
                <icon-close-circle-fill :size="20" style="color: rgb(var(--danger-6))" />
              </template>
              <template #default>关闭所有页签</template>
            </a-doption>
          </template>
        </a-dropdown>
      </template>
    </a-tabs>
  </div>
</template>

<script setup lang="ts" name="NavTab">
import { watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import {useNavTabStore} from '../../store/modules/navtab'
import {useAppStore} from '../../store/modules/app'

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
const onClick = (key: string | number) => {
// console.log('点击前', navtabStore.cacheList, key)
router.push({ path: key.toString() })
}

// 关闭页签
const onClose = (key: string | number) => {
const item = navtabStore.tagList.find((i) => i.path === key)
navtabStore.removeTagItem(key.toString())
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
.Tiny_nav{ position: relative;}
:deep(.arco-tabs-tab) {
  border-bottom-color: transparent !important;

  svg {
    width: 0;
    transition: all 0.15s;
  }

  &:hover {
    svg {
      width: 1em;
    }
  }
}

:deep(.arco-tabs-tab-active) {
  background-color: rgba(var(--primary-6), $alpha: 0.05);

  &:hover {
    background-color: rgba(var(--primary-6), $alpha: 0.05);
  }

  .arco-tabs-tab-close-btn {
    &:hover {
      &::before {
        background-color: rgba(var(--primary-6), $alpha: 0.1) !important;
      }
    }
  }
}

.nav-tab {
  padding-top: 5px;
  background: var(--color-bg-1);
}

.extra-btn {
  width: 28px;
  height: 28px;
  margin-right: 14px;
  margin-bottom: 5px;

  &:hover {
    svg {
      animation: turn 0.5s linear;
      transform-origin: center;
    }
  }
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
