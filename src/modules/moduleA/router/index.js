import ModuleA from '../ModuleA.vue';

export default {
  path: '/module-a',
  component: ModuleA,
  children: [
    {
      path: ''
    }
  ]
};
