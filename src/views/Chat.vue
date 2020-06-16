<template>
  <div class="chat">
    <div class="drawer bg-primary">
      <component :is="$getComponent('Drawersearch')" :query.sync="query"></component>
      <component :is="$getComponent('Drawerlist')" :contacts="search"></component>
    </div>
    <div class="messages">Test message</div>
  </div>
</template>

<script>
export default {
  name: "Chat",

  data() {
    return {
      query: "",

      contacts: [
        {
          id: 1,
          name: "Mirko Rajovic",
          status: "online",
          img:
            "https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.0-9/32089503_10216105870424518_2833207354701381632_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=gh_1OnBpV7MAX-qagIm&_nc_ht=scontent.fbeg5-1.fna&oh=3d615e4244fb4f322ae132e9c0da8938&oe=5F0F4643",
          messages: []
        },
        { id: 2, name: "Ime 2", status: "offline", messages: [] },
        { id: 3, name: "Ime 3", status: "", messages: [] },
        { id: 4, name: "Ime 4", status: "", messages: [] },
        { id: 5, name: "Ime 5", status: "", messages: [] }
      ]
    };
  },

  computed: {
    search: {
      get: function() {
        const queryLower = this.query.toLowerCase();

        return this.contacts.filter(
          contact =>
            contact.name
              .toString()
              .toLowerCase()
              .indexOf(queryLower.toLowerCase()) > -1
        );
      }
    }
  }
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
