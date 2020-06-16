<template>
  <div class>
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action d-flex align-items-center"
        v-for="contact in contacts"
        :key="contact.id"
        @click="handleContactClick(contact)"
      >
        <div class="avatar d-flex justify-content-center align-items-center">
          <img v-if="contact.img" :src="contact.img" alt :class="contact.status" />
          <span v-else :class="contact.status">{{getInitialFromName(contact.name)}}</span>
        </div>
        <div class="content-list-item">
          <span class="name">{{contact.name}}</span>
          <small>Text poslednje poruke...</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DrawerList",
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Mirko Rajovic",
          status: "online",
          img:
            "https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.0-9/32089503_10216105870424518_2833207354701381632_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=gh_1OnBpV7MAX-qagIm&_nc_ht=scontent.fbeg5-1.fna&oh=3d615e4244fb4f322ae132e9c0da8938&oe=5F0F4643"
        },
        { id: 2, name: "Ime 2", status: "offline" },
        { id: 3, name: "Ime 3" },
        { id: 4, name: "Ime 4" },
        { id: 5, name: "Ime 5" }
      ]
    };
  },

  methods: {
    getInitialFromName(name) {
      const nameArr = name.split(" ");
      let initial = "DD";
      if (name) initial = nameArr[0][0] + nameArr[nameArr.length - 1][0];
      return initial.toUpperCase();
    },

    handleContactClick(contact) {
      console.log(contact.id);
    }
  }
};
</script>

<style>
.list-group {
  padding: 0 5px;
}
.list-group .list-group-item {
  border-radius: 0;
  padding: 0;
  border-radius: 5px;
  margin: 5px 0;
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

/* .list-group .list-group-item:hover {
  background-color: rgba(255, 255, 255, 0.5);
  color: white !important;
} */
</style>