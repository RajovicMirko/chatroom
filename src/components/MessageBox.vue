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
        { text: "Test message text", type: "send" },
        { text: "Test message text", type: "recived" },
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
        { text: "Test message text", type: "send" }
      ]
    };
  }
};
</script>

<style >
.messages .box {
  height: 100%;
}

.messages .box .message-list {
  display: flex;
}

.messages .box .list-group .list-group-item {
  /* border: 0; */
}
</style>