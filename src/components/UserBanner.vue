<template>
  <div class="badge badge-info">
    <div class="user">
      <div class="avatar d-flex justify-content-center align-items-center">
        <img v-if="user.img" :src="user.img" alt :class="user.status" />
        <span v-else :class="user.status">{{$getInitialFromName(user.name)}}</span>
      </div>
      <div class="content-list-item">
        <span class="name">{{user.name}}</span>
      </div>
    </div>

    <div class="user2">
      <div class="avatar d-flex justify-content-center align-items-center">
        <img v-if="userTwo.img" :src="userTwo.img" alt :class="userTwo.status" />
        <span v-else :class="userTwo.status">{{$getInitialFromName(userTwo.name)}}</span>
      </div>
      <div class="content-list-item">
        <span class="name">{{userTwo.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBanner",
  props: {
    user: {
      type: Object,
      required: true
    },
    userTwo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.badge {
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.badge .user {
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.badge .user2 {
  font-size: 2rem;
  display: flex;
  align-items: center;
}

.badge .avatar {
  margin: 0.3rem 0.3rem;
}

.badge .avatar > * {
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
</style>