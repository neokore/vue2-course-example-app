import Vue from 'vue';

Vue.filter('titleCase', function (value, suffix = '') {
  return value.length
    ? `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}${suffix}`
    : '';
});

Vue.filter('count', function (value) {
  return value?.length;
});
