import Vue from 'vue';

Vue.filter('titleCase', function (value, numeritoAlFinal = '') {
  return value.length
    ? `${value[0].toUpperCase()}${value
        .slice(1)
        .toLowerCase()}${numeritoAlFinal}`
    : '';
});
