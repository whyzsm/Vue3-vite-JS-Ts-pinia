import { DEFAULT_LAYOUT } from '../base'

const Home = {
  path: '/',
  redirect: '/home',
  name: 'Home',
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'),
      meta: {
        title: 'home',
        keepAlive: false
      }
    }
  ]
}

export default Home
