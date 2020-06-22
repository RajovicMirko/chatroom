<template>
  <div class="box">
    <ul class="message-list list-group overflow-auto" ref="msgContainer" v-if="messages.length">
      <component
        :is="$getComponent('SingleMessage')"
        v-for="(message, i) in messages"
        :key="i"
        :msg="message"
      ></component>
    </ul>

    <div v-else class="no-user-selected" ref="msgContainer">Select user to chat</div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },

  mounted() {
    this.scrollMessageListToBottom();
  },

  watch: {
    messages: function() {
      this.$nextTick(function() {
        this.scrollMessageListToBottom();
      });
    }
  },

  methods: {
    scrollMessageListToBottom() {
      var container = this.$refs.msgContainer;
      container.scrollTop = container.scrollHeight + 100;
    }
  }
};
</script>

<style >
.messages .box {
  height: 86%;
  padding: 0.5rem 1rem 0 1rem;
}

.messages .box .message-list {
  display: flex;
  height: 100%;
}
.messages .box .message-list::-webkit-scrollbar {
  display: none;
}

.no-user-selected {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
</style>