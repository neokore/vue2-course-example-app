import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/fruits',
    name: 'fruits',
    components: {
      default: () =>
        import(/* webpackChunkName: "fruits" */ '@/views/Fruits/Fruits.vue'),
      header: () => import('@/components/AppHeader.vue')
    },
    props: {
      default: (route) => ({
        filter: {
          name: route.query.name,
          description: route.query.description
        }
      })
    },
    children: [
      {
        path: ':name',
        name: 'fruit-detail',
        component: () =>
          import(
            /* webpackChunkName: "fruits" */ '@/views/Fruits/FruitDetail.vue'
          ),
        props: true
      },
      {
        path: 'create',
        name: 'fruit-create',
        components: {
          dialog: () => import('@/views/Fruits/components/FruitForm.vue')
        }
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
