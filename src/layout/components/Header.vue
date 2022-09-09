<template>
  <a-layout-header class="Tiny-header">
    <div class="Tiny-logo">
      <!-- <img src="@/assets/images/logo.png" alt="Logo" /> -->
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" class="Tiny_memu">
      <a-menu-item key="1"><template #icon>
          <icon-apps></icon-apps>
        </template>首页</a-menu-item>
      <a-menu-item key="2"><template #icon>
          <icon-bug></icon-bug>
        </template>销售管理</a-menu-item>
      <a-menu-item key="3">采购管理</a-menu-item>
      <a-menu-item key="4">仓储管理</a-menu-item>
      <a-menu-item key="5">运营管理</a-menu-item>
      <a-menu-item key="6">工单中心</a-menu-item>
      <a-menu-item key="7">财务管理</a-menu-item>
      <a-menu-item key="8">审批管理</a-menu-item>
      <a-menu-item key="9">基础档案</a-menu-item>
      <a-menu-item key="10">系统设置</a-menu-item>
    </a-menu>
    <a-space class="Tiny-system">
      <!-- 消息通知 -->
      <a-popover position="br" trigger="click" class="Tiny-systemIcon">
        <a-badge :count="9" dot>
          <a-button size="mini" class="Tiny_hover_btn">
            <template #icon>
              <icon-notification :size="18" />
            </template>
          </a-button>
        </a-badge>
        <template #content>
          <Message></Message>
        </template>
      </a-popover>
      <!-- 全屏切换组件 -->
      <a-tooltip content="全屏切换" position="bottom">
        <a-button size="mini" class="gi_hover_btn" @click="onToggleFullScreen">
          <template #icon>
            <icon-fullscreen :size="18" v-if="!isFullScreen" />
            <icon-fullscreen-exit :size="18" v-else />
          </template>
        </a-button>
      </a-tooltip>
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
    </a-space>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Modal } from '@arco-design/web-vue'
import { useRouter } from 'vue-router'
import { useFullScreen } from '@/hooks'
const router = useRouter();
const selectedKeys = ref<string[]>(['2']);
const { isFullScreen, onToggleFullScreen } = useFullScreen()

// 跳转个人中心
const toUser = () => {
  router.push('/system/user-center')
}

// 退出登录
const logout = () => {
  Modal.warning({
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
  box-shadow: 1px 1px 2px 0px rgba(82, 90, 102, 0.04), 2px 2px 8px 0px rgba(82, 90, 102, 0.08);
  cursor: pointer;
  user-select: none;
  .arco-menu-light .arco-menu-item.arco-menu-selected {
    background: #2861BD;
    color: #fff;
  }
  .arco-menu-light .arco-menu-item.arco-menu-selected .arco-icon,
  .arco-menu-light .arco-menu-item.arco-menu-selected .arco-menu-icon {
    color: #ffffff;
  }
}
.Tiny_memu{ line-height: 45px;  }
.Tiny-system {
  display: flex;
  align-items: center;
  width: 200px;
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