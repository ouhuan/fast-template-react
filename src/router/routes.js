// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/main',
    component: require('@/views/home').default,
  },
  {
    path: '/main/home',
    component: require('@/views/home').default,
  },
  {
    path: '/main/detail',
    component: require('@/views/detail').default,
  },
]
