<template>
  <li
    id="msg"
    class="list-group-item list-group-item-action d-flex align-items-center"
    :class="msg.type"
  >{{msg.text}}</li>
</template>

<script>
export default {
  props: {
    msg: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
#msg {
  width: 50%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 759px) {
  #msg {
    width: 70%;
  }
}

.send {
  align-self: flex-end;
}

.recived {
  color: rgb(255, 255, 255);
  background-color: #007bff;
}
</style>