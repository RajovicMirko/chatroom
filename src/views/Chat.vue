<template>
  <div class="chat d-flex">
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
  overflow: hidden;
}

.drawer {
  position: relative;
  min-width: 300px;
  max-width: 300px;
  left: 0;
  transition: left 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  overflow: hidden;
}

.drawer-closed {
  position: relative;
  left: -300px;
  display: hidden;
  overflow: hidden;
}

.messages {
  padding: 1rem 1rem 0 1rem;
  flex: 1;
  overflow: hidden;
}
</style>
