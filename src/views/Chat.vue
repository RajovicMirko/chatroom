<template>
  <div class="chat">
    <div class="drawer bg-primary"></div>
    <div class="messages">Test message</div>
  </div>
</template>

<script>
export default {
  name: "Chat"
};
</script>

<style>
.chat {
  position: relative;
  display: flex;
  overflow: hidden;
}

.drawer {
  position: relative;
  flex: 1.3;
  transition: all 0.5s ease-out;
}

.drawer.closed {
  flex: 0;
}

.messages {
  padding: 1rem 1rem 0 1rem;
  flex: 5;
}
</style>
