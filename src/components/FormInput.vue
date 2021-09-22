<template>
  <label>
    {{ label }}:
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <pre v-if="error.length">{{ error }}</pre>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
label {
  display: block;

  pre {
    color: red;
  }
}
</style>
