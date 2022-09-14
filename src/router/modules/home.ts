import { DEFAULT_LAYOUT } from '../base'

const Home = {
  path: '/home',
  name: 'Home',
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'home',
        keepAlive: false
      }
    }
  ]
}

export default Home
