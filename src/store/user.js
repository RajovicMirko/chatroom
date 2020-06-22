const state = {
  user: {
    id: 1,
    name: "Mirko Rajovic",
    status: "online",
    img:
      "https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.0-9/32089503_10216105870424518_2833207354701381632_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=gh_1OnBpV7MAX-qagIm&_nc_ht=scontent.fbeg5-1.fna&oh=3d615e4244fb4f322ae132e9c0da8938&oe=5F0F4643",
    contacts: [
      {
        id: 2,
        name: "Ime 2",
        status: "online",
        messages: [
          {
            text: "Test message text Test message text Test message text",
            type: "send",
          },
          {
            text: "Test message text Test message text Test message text",
            type: "recived",
          },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
          { text: "Test message text", type: "send" },
          { text: "Test message text", type: "recived" },
        ],
      },
      {
        id: 3,
        name: "Ime 3",
        status: "offline",
        messages: [
          { text: "Test message from user Ime 3", type: "recived" },
          { text: "Test message from user Ime 3", type: "recived" },
          { text: "Test message from user Ime 3", type: "recived" },
          { text: "Test message text", type: "send" },
        ],
      },
      {
        id: 4,
        name: "Ime 4",
        status: "offline",
        messages: [
          { text: "Test message from user Ime 4", type: "recived" },
          { text: "Test message from user Ime 4", type: "recived" },
          { text: "Test message from user Ime 4", type: "recived" },
          { text: "Test message from user Ime 4", type: "recived" },
          { text: "Test message text", type: "send" },
        ],
      },
      {
        id: 5,
        name: "Ime 5",
        status: "offline",
        messages: [
          { text: "Test message from user Ime 5", type: "recived" },
          { text: "Test message from user Ime 5", type: "recived" },
          { text: "Test message from user Ime 5", type: "recived" },
          { text: "Test message from user Ime 5", type: "recived" },
          { text: "Test message from user Ime 5", type: "recived" },
          { text: "Test message text", type: "send" },
        ],
      },
    ],
  },
  userTwo: {},
};

const mutations = {
  setUserTwo(state, userId) {
    const userTwo = state.user.contacts.find(
      (contact) => contact.id === userId
    );
    state.userTwo = userTwo;
  },

  setAddMessage(state, message) {
    state.userTwo.messages.push(message);
  },
};

const actions = {
  setUserTwo({ commit }, userId) {
    commit("setUserTwo", userId);
  },

  setAddMessage({ commit }, message) {
    commit("setAddMessage", message);
  },
};

const getters = {
  getUser(state) {
    return state.user;
  },
  getUserTwo(state) {
    return state.userTwo;
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
};
