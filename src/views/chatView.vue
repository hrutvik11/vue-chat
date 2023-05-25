<template>
  <div class="p-10">
    <div class="w-full h-full rounded-3xl flex flex-row gap-6">
      <div class="w-1/5 shrink-0 shadow-2xl rounded-3xl flex flex-col">
        <div
          class="text-white p-4 text-[22px] uppercase bg-primary-color rounded-t-3xl shrink-0"
        >
          Active Chats
        </div>

        <div class="flex-1 divide-y-2 p-1">
          <div
            v-for="user in followingArray"
            class="px-5 py-6 hover:bg-primary-color hover:text-white cursor-pointer"
            :class="
              activeUser && activeUser.name === user.name
                ? 'bg-primary-color text-white'
                : ''
            "
            @click="showActiveuser(user)"
          >
            {{ user.name }}
          </div>
        </div>
      </div>
      <div class="flex-1 shadow-2xl rounded-3xl flex flex-col">
        <div
          class="text-white p-4 text-[22px] uppercase bg-gray-500 rounded-t-3xl shrink-0"
        >
          user
        </div>
        <div class="flex-1 flex flex-col gap-1" v-show="activeUser">
          <div class="flex-1 w-full">
            <div v-for="chat in chatArray" class="p-3 w-full">
              <div
                v-if="chat.userid === thisuserid"
                class="bg-violet-300 w-full p-3"
              >
                {{ chat.message }}
              </div>
              <div v-else class="bg-gray-300 w-full p-3">
                {{ chat.message }}
              </div>
            </div>
          </div>
          <div class="flex gap-4 p-2">
            <input type="text" v-model="userChat" />
            <button class="px-10" @click="sendChat">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserID, isUserLoggedIn } from "../utils/helpers";
import { db } from "../firebase";
import { ref, query, onValue, child } from "@firebase/database";

export default {
  data() {
    return {
      followingArray: [],
      activeUser: null,
      userChat: "",
      chatArray: [],
      thisuserid: null,
    };
  },
  methods: {
    sendChat() {
      this.chatArray.push({ userid: this.thisuserid, message: this.userChat });
      this.chatArray.push({
        userid: this.activeUser.id,
        message: "ok acknowledge",
      });
      this.userChat = "";
    },
    showActiveuser(activeuser) {
      this.activeUser = activeuser;
      this.chatArray = [];
    },
  },
  async created() {
    const uid = getUserID();
    this.thisuserid = uid;

    const followingRefs = query(ref(db, "chatApp/followings/" + uid));
    onValue(followingRefs, async (snapshot) => {
      if (snapshot.exists()) {
        const data = await snapshot.val();
        const tempUserData = [];

        await Promise.all(
          [...data].map((uid) => {
            const userRef = ref(db, "chatApp/users/" + uid);

            onValue(userRef, async (snap) => {
              if (snap.exists()) {
                const val = await snap.val();
                tempUserData.push(val);
              }
            });
          })
        );

        console.log(tempUserData);

        this.followingArray = tempUserData;
      }
    });
  },
  beforeRouteEnter(to, from, next) {
    if (isUserLoggedIn()) {
      next();
    } else {
      next({ name: "login" });
    }
  },
};
</script>
<style></style>
