<template>
  <div class="msg-input position-sticky fixed-bottom">
    <input
      v-model="messageText"
      class="form-control"
      name="messageText"
      type="text"
      id="messageText"
      placeholder="Message Text"
      @keypress="handleInput"
    />
    <button type="button" class="btn btn-outline-primary" @click="handleSendMessage">
      <i class="far fa-paper-plane"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageText: ""
    };
  },

  methods: {
    handleInput(e) {
      if (e.keyCode === 13) {
        this.handleSendMessage();
      }
    },

    handleSendMessage() {
      this.$emit("sendMessage", this.messageText);
      this.messageText = "";
    }
  }
};
</script>

<style>
.messages .msg-input {
  display: flex;
}

.messages .msg-input button {
  margin: 0 0 0.3rem 0.3rem;
}

.messages .msg-input > input {
  flex: 1;
}
</style>