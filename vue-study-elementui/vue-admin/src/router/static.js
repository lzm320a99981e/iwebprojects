import Login from '@/views/Login'

const routers = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  }
];

export default routers
