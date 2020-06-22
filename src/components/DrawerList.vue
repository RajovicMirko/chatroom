<template>
  <div class="drawer-list">
    <ul class="list-group overflow-auto">
      <li
        class="list-group-item list-group-item-action d-flex align-items-center"
        v-for="(contact, i) in contacts"
        :key="i"
        :class="{'active-user': contact.id === userTwo.id}"
        @click="handleContactClick(contact)"
      >
        <div class="avatar d-flex justify-content-center align-items-center">
          <img v-if="contact.img" :src="contact.img" alt :class="contact.status" />
          <span v-else :class="contact.status">{{$getInitialFromName(contact.name)}}</span>
        </div>
        <div class="content-list-item">
          <span class="name">{{contact.name}}</span>
          <small class="last-msg-text">Text poslednje poruke...</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DrawerList",

  props: {
    contacts: {
      type: Array,
      required: true
    },
    userTwo: {
      type: Object,
      required: true
    }
  },

  methods: {
    handleContactClick(contact) {
      this.$emit("userToView", contact.id);
    }
  }
};
</script>

<style>
.drawer-list {
  margin-top: 1rem;
}

.list-group {
  padding: 0 5px;
  height: 800px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
}

.list-group::-webkit-scrollbar {
  display: none;
}

.list-group .list-group-item {
  border-radius: 0;
  padding: 0;
  border-radius: 10px;
  margin-bottom: 5px;
}

.list-group-item .avatar {
  margin: 0.3rem 1rem;
}

.list-group-item .avatar > * {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 3px solid gray;
  font-weight: bold;
  font-size: 1.2rem;
}

.name {
  font-weight: bold;
}

.online {
  border-color: green;
}

.offline {
  border-color: red;
}

.content-list-item {
  display: flex;
  flex-direction: column;
}

.content-list-item small {
  color: rgba(128, 128, 128, 0.5);
}

@media only screen and (max-width: 759px) {
  .list-group-item .avatar {
    margin: 5px;
  }
  .content-list-item {
    display: none;
  }
}

.active-user {
  background-color: rgba(255, 255, 255, 0.3);
}

.active-user > * {
  color: white !important;
}

.active-user .last-msg-text {
  color: white;
}

.active-user:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>