<template>
  <div class="chat">
    <div class="drawer bg-info">
      <component :is="$getComponent('Drawersearch')" :query.sync="query"></component>
      <component :is="$getComponent('Drawerlist')" :contacts="search" @userToView="userToView"></component>
    </div>
    <div class="messages">
      <component :is="$getComponent('UserBanner')" :user="user" :userTwo="userTwo"></component>
      <component :is="$getComponent('Messagebox')" :messages="userTwo.messages"></component>
      <component :is="$getComponent('MessageInput')" @sendMessage="handleSendMessage"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",

  data() {
    return {
      query: ""
    };
  },

  computed: {
    user() {
      return this.$store.getters["getUser"];
    },

    userTwo() {
      const userTwo = this.$store.getters["getUserTwo"];
      if (userTwo) return userTwo;
      return {};
    },

    search: {
      get: function() {
        const queryLower = this.query.toLowerCase();

        return this.user.contacts.filter(
          contact =>
            contact.name
              .toString()
              .toLowerCase()
              .indexOf(queryLower.toLowerCase()) > -1
        );
      }
    }
  },

  methods: {
    userToView(userId) {
      this.$store._actions["setUserTwo"][0](userId);
    },

    handleSendMessage(value) {
      const msgTemplate = { text: value, type: "send" };
      this.$store._actions["setAddMessage"][0](msgTemplate);
    }
  }
};
</script>

<style>
.chat {
  position: relative;
  display: flex;
  height: 90%;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
}

.messages > *::-webkit-scrollbar {
  display: none;
}
</style>
