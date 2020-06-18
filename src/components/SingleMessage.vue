<template>
  <div id="msg" :class="msg.type" @click="msgClick">
    <small class="time-stamp">18:20</small>
    <li class="txt list-group-item list-group-item-action d-flex align-items-center">{{msg.text}}</li>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Object,
      required: true
    }
  },

  methods: {
    msgClick() {
      console.log("Msg is clicked");
    }
  }
};
</script>

<style>
#msg > * {
  margin: 0;
  padding: 0;
}

#msg {
  width: 45%;
  margin-bottom: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
}

@media only screen and (max-width: 1024px) {
  #msg {
    width: 50%;
  }
}

@media only screen and (max-width: 759px) {
  #msg {
    width: 80%;
  }
}

#msg.send {
  align-self: flex-end;
  border: 1px solid rgba(128, 128, 128, 0.05);
  background-color: rgba(128, 128, 128, 0.05);
}

#msg.recived {
  background-color: rgba(0, 123, 255, 1);
  color: rgb(255, 255, 255);
}

#msg .time-stamp {
  margin: 0;
  padding: 0;
  font-size: 10px;
}

#msg.send .time-stamp {
  float: left;
}
#msg.recived .time-stamp {
  float: right;
}

#msg.recived .txt {
  color: rgb(255, 255, 255);
}

#msg .txt {
  border: 0;
  background: transparent;
}
</style>