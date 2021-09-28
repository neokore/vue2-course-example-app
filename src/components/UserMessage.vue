<template>
  <div class="messages-container">
    <p
      v-for="message in messages"
      :key="message.text.slice(0, 3)"
      class="message"
      :class="{
        info: message.type === 'info',
        error: message.type === 'error'
      }"
    >
      {{ message.text }}
    </p>
    <button v-if="messages.length" @click="discardOldestMessage()">
      Remove latest message
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('messages');

export default {
  name: 'UserMessage',
  computed: {
    ...mapState(['messages'])
  },
  methods: {
    ...mapMutations(['discardOldestMessage'])
  }
};
</script>

<style lang="scss" scoped>
.messages-container {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;

  .message {
    padding: 8px 16px;
    border-radius: 4px;
    margin: 8px 0;
    background-color: #8886;

    &.info {
      background-color: #77ea;
    }

    &.error {
      background-color: #e77a;
    }
  }
}
</style>
