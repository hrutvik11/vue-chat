<template>
  <div class="flex gap-6 flex-wrap">
    <div
      class="w-[260px] h-fit p-4 rounded-2xl shadow-xl cursor-pointer"
      v-for="user in usersData"
      :key="user.id"
      @click="showUserDetails(user.id)"
    >
      <div class="h-[200px] px-5 w-full rounded-full">
        <img
          :src="user.image"
          class="w-full h-full object-cover rounded-full"
        />
      </div>
      <div>
        <p class="text-[18px] capitalize text-center my-4">{{ user.name }}</p>
        <div class="text-[14px]">
          <span class="flex gap-6 justify-between">
            <p>Mail</p>
            <p class="capitalize">{{ user.email }}</p>
          </span>
          <span class="flex gap-6 justify-between">
            <p>Phone</p>
            <p class="capitalize">{{ user.phone }}</p>
          </span>
          <span class="flex gap-6 justify-between">
            <p>Website</p>
            <p class="">{{ user.website }}</p>
          </span>
        </div>
      </div>
      <div class="mt-4">
        <button
          class="w-full px-4 py-3"
          @click.stop="onUserFollow(user.id)"
          :disabled="isFollowDisabled(user.id)"
        >
          Follow
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
import { ref, query, onValue, set } from "@firebase/database";
import { getUserID } from "../utils/helpers";

export default {
  props: ["usersData", "followingArray"],
  methods: {
    onUserFollow(followUserID) {
      const uid = getUserID();
      const followinfRef = ref(db, "chatApp/followings/" + uid);

      onValue(
        query(followinfRef),
        async (snapshot) => {
          if (snapshot.exists()) {
            const data = await snapshot.val();
            const finalData = [...data, followUserID];
            set(followinfRef, finalData);
          } else {
            const temp = [];
            temp.push(followUserID);
            set(followinfRef, temp);
          }
        },
        { onlyOnce: true }
      );
    },
    isFollowDisabled(userID) {
      if (this.followingArray.includes(userID)) {
        return true;
      }

      return false;
    },
    showUserDetails(userID) {
      this.$router.push("/user/" + userID);
    },
  },
};
</script>
<style></style>
