<template>
  <el-header class="Tiny-header">
    <div class="Tiny-logo">
      <img src="@/assets/images/logo.png" alt="Logo" />
    </div>
    <el-menu v-model:selectedKeys="selectedKeys" mode="horizontal" class="Tiny_memu">
      <MenuItem v-for="item in headMenuTree"  :key="item.name" :data="item"  @click="handleClickItem"></MenuItem>
    </el-menu>
    <el-space class="Tiny-system">
      <!-- 消息通知 -->
      <el-popover position="br" trigger="click" class="Tiny-systemIcon">
        <el-badge :value="9" dot>
          <a-button size="mini" class="Tiny_hover_btn">
            <template #icon>
              <!-- <icon-notification :size="18" /> -->
            </template>
          </a-button>
        </el-badge>
        <template #content>
          <Message></Message>
        </template>
      </el-popover>
      <!-- 全屏切换组件 -->
      <el-tooltip content="全屏切换" placement="bottom">
        <el-button size="small" class="gi_hover_btn" @click="onToggleFullScreen">
          <template #icon>
            <icon-fullscreen :size="18" v-if="!isFullScreen" />
            <icon-fullscreen-exit :size="18" v-else />
          </template>
        </el-button>
      </el-tooltip>
      <!-- 管理员账户 -->
      <a-dropdown trigger="hover">
        <a-row align="center" class="user">
          <!-- 管理员头像 -->
          <a-avatar :size="32">
            <!-- <img :src="userStore.userInfo.avatar" /> -->
          </a-avatar>
          <span class="username">张三</span>
          <!-- <span class="username">{{ userStore.userName }}</span> -->
          <icon-down />
        </a-row>
        <template #content>
          <a-doption @click="toUser">
            <template #icon>
              <span class="doption-icon" style="background: rgba(var(--primary-6))">
                <icon-user />
              </span>
            </template>
            <template #default>个人中心</template>
          </a-doption>
          <a-divider style="margin: 0" />
          <a-doption @click="logout">
            <template #icon>
              <span class="doption-icon" style="background: rgba(var(--warning-6))">
                <icon-export />
              </span>
            </template>
            <template #default>退出登录</template>
          </a-doption>
        </template>
      </a-dropdown>
    </el-space>
  </el-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { useFullScreen } from '../../hooks'
import { storeToRefs } from 'pinia'
import {useMenuStore} from  '../../store/modules/menu'
import MenuItem from './MenuItem.vue'


const router = useRouter();
const selectedKeys = ref<string[]>(['2']);
const { isFullScreen, onToggleFullScreen } = useFullScreen();
const menuStore=useMenuStore();
const {headMenuTree}= storeToRefs(menuStore);
const getMenuKeys = (params: MenuItem[]) => {
  const data: string[] = []
  function forTree(arr: MenuItem[]) {
    arr.forEach((item: MenuItem) => {
      if (item.path) {
        data.push(item.path)
      }
      if (item.children?.length) {
        forTree(item.children)
      }
    })
  }
  forTree(params)
  return data
}
const menuKeyList = getMenuKeys(menuStore.headMenuTree)
const activeKey = ref('Home');

const handleClickItem = (item: MenuItem) => {
  if (!item.path) return
  if (item.path === '/file') {
    router.push({ path: item.path, query: { fileType: 0 } })
  } else {
    router.push({ path: item.path })
  }
  if (menuKeyList.includes(item.path)) {
    activeKey.value = item.path
  }
}

// 跳转个人中心
const toUser = () => {
  router.push('/system/user-center')
}

// 退出登录
const logout = () => {
  ElMessageBox.confirm({
    title: '提示',
    content: '确认退出登录？',
    hideCancel: false,
    onOk: () => {
      // userStore.logout()
      // appStore.clearServerMenu()
      router.replace('/login')
    }
  })
}

</script>
<style  lang="scss" scoped>
.Tiny-header {
  position: 'fixed';
  z-index: 10;
  width: '100%';
  display: flex;
  background: #fff;
  align-items: center;
  box-shadow: 1px 1px 2px 0px rgba(82, 90, 102, 0.04),2px 2px 8px 0px rgba(82, 90, 102, 0.08);
  cursor: pointer;
  user-select: none;
  justify-content:space-between;
  border-bottom: 1px solid #d9d9d9;
  .el-menu--horizontal{ border-style:none;}
}
.Tiny_memu{ line-height: 45px; width: 80%;}
.Tiny-system {
  display: flex;
  align-items: center;
  width: 220px;
  background: #fff;
}


.Tiny-logo {
  width: 180px;
  height: 20px;
  margin: 20px;

  img {
    width: 100%;
    height: 20px;
  }
}

.Tiny_hover_btn {
  border: 0 !important;
  background-color: transparent !important;

  &:hover {
    background: var(--color-secondary-hover) !important;
  }

  &:active {
    background: var(--color-secondary-active) !important;
  }
}

.Tiny-systemIcon {
  margin-right: 15px;
}

.user {
  color: var(--color-text-2);
  cursor: pointer;

  .username {
    margin-left: 10px;
  }

  .arco-icon-down {
    transition: all 0.3s;
    margin-left: 2px;
  }
}
</style>
