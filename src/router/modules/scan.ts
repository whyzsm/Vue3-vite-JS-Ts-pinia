import { DEFAULT_LAYOUT } from '../base'
const Scan = {
  path: '/scan',
  redirect: '/scan',
  name: 'Scan',
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: '/toSend',
      name: 'ToSend',
      component: () => import('@/views/ToSend/index.vue'),
      meta: {
        title: '到件扫描',
        keepAlive: false
      }
    }
  ],
};

export default Scan;
