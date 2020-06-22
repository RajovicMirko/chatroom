<template>
  <div class="box overflow-auto">
    <ul class="message-list list-group overflow-auto">
      <component
        :is="$getComponent('SingleMessage')"
        v-for="(message, i) in messages"
        :key="i"
        :msg="message"
      ></component>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          text:
            "Test message text Test message text Test message text Test message text Test message text Test message text Test message text",
          type: "send"
        },
        {
          text:
            "Test message text Test message text Test message text Test message text Test message text Test message text Test message text",
          type: "recived"
        },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "recived" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "send" },
        { text: "Last message text", type: "send" }
      ]
    };
  }
};
</script>

<style >
.messages .box {
  /* height: 100%; */
  padding: 0.5rem 1rem;
}

.messages .box .message-list {
  display: flex;
}
.messages .box .message-list::-webkit-scrollbar {
  display: none;
}
</style>