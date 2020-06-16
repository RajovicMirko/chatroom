<template>
  <div class="chat">
    <div class="drawer bg-primary">
      <component :is="$getComponent('Drawersearch')"></component>
      <component :is="$getComponent('Drawerlist')"></component>
    </div>
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
}

.drawer {
  position: relative;
  min-width: 350px;
  max-width: 350px;
  transition: all 0.2s ease-out;
}

@media only screen and (max-width: 1024px) {
  .drawer {
    min-width: 250px;
    max-width: 250px;
  }
}

@media only screen and (max-width: 759px) {
  .drawer {
    min-width: 70px;
    max-width: 70px;
  }
}

.drawer.closed {
  min-width: 0;
  max-width: 0;
}

.drawer.closed > * {
  min-width: 0;
  max-width: 0;
  display: none;
}

.messages {
  padding: 1rem 1rem 0 1rem;
}
</style>
