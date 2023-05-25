<template>
  <div class="p-4">
    <div class="my-4 flex justify-between">
      <p class="text-[20px]">Available users</p>
      <button class="px-6 py-4" @click="toggleComp">
        {{ activeComp === "userCardComp" ? "Add" : "Show" }} user
      </button>
    </div>

    <div class="">
      <component
        :is="activeComp"
        :usersData="usersData"
        :toggleComp="toggleComp"
        :followingArray="followingArray"
      ></component>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
import { isUserLoggedIn, getUserID } from "../utils/helpers";
import { ref, push, query, onValue } from "@firebase/database";
import userCardComp from "../components/userCardComp.vue";
import addUserComp from "../components/addUserComp.vue";

export default {
  data() {
    return {
      usersData: [],
      activeComp: "userCardComp",
      followingArray: [],
    };
  },
  components: { userCardComp, addUserComp },
  beforeRouteEnter(to, from, next) {
    if (isUserLoggedIn()) {
      next();
    } else {
      next({ name: "login" });
    }
  },
  methods: {
    adddata() {
      const chatref = ref(db, "chatApp/users");
      [...userlist].map(async (el) => {
        await push(chatref, {
          ...el,
        });
      });
    },
    toggleComp() {
      if (this.activeComp === "userCardComp") {
        this.activeComp = "addUserComp";
      } else {
        this.activeComp = "userCardComp";
      }
    },
  },
  async created() {
    const usersRef = query(ref(db, "chatApp/users"));
    onValue(
      usersRef,
      async (snapshot) => {
        if (snapshot.exists()) {
          const data = await snapshot.val();
          const data2 = Object.keys(data).map((key) => ({
            ...data[key],
            id: key,
          }));
          this.usersData = data2;
        }
      },
      { onlyOnce: true }
    );

    const uid = getUserID();

    const followingRefs = query(ref(db, "chatApp/followings/" + uid));
    onValue(followingRefs, async (snapshot) => {
      if (snapshot.exists()) {
        const data = await snapshot.val();
        this.followingArray = data;
      }
    });
  },
};
</script>
<style></style>
