const routes = [
  { path: '/', redirect: '/fruits' },
  {
    path: '/fruits',
    name: 'fruits',
    // alias: '/',
    components: {
      default: () =>
        import(/* webpackChunkName: "fruits" */ '@/views/Fruits/Fruits.vue'),
      header: () => import('@/components/AppHeader.vue')
    },
    props: (route) => ({ name: route.query.name }),
    children: [
      {
        path: ':name',
        name: 'fruit-detail',
        component: () =>
          import(
            /* webpackChunkName: "fruits" */ '@/views/Fruits/FruitDetail.vue'
          ),
        props: true
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: () =>
      import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue')
  }
];

export default routes;
