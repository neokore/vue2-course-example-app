const routes = [
  { path: '/', redirect: '/fruits' },
  {
    path: '/fruits',
    name: 'fruits',
    components: {
      default: () =>
        import(/* webpackChunkName: "fruits" */ '@/views/Fruits/Fruits.vue'),
      header: () =>
        import(/* webpackChunkName: "header" */ '@/components/Header.vue')
    },
    children: [
      {
        path: ':id',
        name: 'fruit-detail',
        component: () =>
          import(
            /* webpackChunkName: "fruits-detail" */ '@/views/Fruits/FruitDetail.vue'
          ),
        props: true
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/NotFound.vue')
  }
];

export default routes;
