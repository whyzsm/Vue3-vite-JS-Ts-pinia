<template>
  <a-layout-header>
    <section class="sys-name">管理系统</section>
    <section class="sys-head">
      <!-- 改变主题色 -->
      <a-button size="mini" @click="changeTheme" :style="{ marginRight: '10px' }">
        <template #icon>
          <icon-sun-fill v-if="light" />
          <icon-moon-fill v-else />
        </template>
      </a-button>
      <!-- 头像 -->
      <a-avatar :size="32" :style="{ marginRight: '8px' }">A</a-avatar>
      <a-dropdown trigger="hover">
        <a-button type="text">admin</a-button>
        <template #content>
          <a-doption>
            <template #icon><icon-user /></template><span style="margin-left: 4px">个人中心</span>
          </a-doption>
          <a-doption >
            <template #icon><icon-export /></template><span style="margin-left: 4px">退出登录</span>
          </a-doption>
        </template>
      </a-dropdown>
    </section>
  </a-layout-header>
</template>

<script lang="ts" setup>
  import { computed, ref } from '@vue/reactivity'
  import { Modal } from '@arco-design/web-vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  let light = ref('')
  
  const changeTheme = () => {
    let theme = document.body.getAttribute('arco-theme')
    // light.value = theme
    if(!theme) {
      // 设置暗黑主题
      document.body.setAttribute('arco-theme', 'dark')
    } else {
      document.body.removeAttribute('arco-theme')
    }
  }
  </script>