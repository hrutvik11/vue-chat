<template>
  <div v-if="userdata !== null" class="border border-red-400 flex p-10">
    <div class="h-[400px] w-[400px] px-5">
      <img :src="userdata.image" class="w-full h-full object-cover" />
    </div>
    <div class="flex-1 text-[20px]">
      <div class="flex p-4">
        <span class="w-[200px] text-primary-color">Name</span>
        <span class="">{{ userdata.name }}</span>
      </div>
      <div class="flex p-4">
        <span class="w-[200px] text-primary-color">User Name</span>
        <span>{{ userdata.username }}</span>
      </div>
      <div class="flex p-4">
        <span class="w-[200px] text-primary-color">Email</span>
        <span>{{ userdata.email }}</span>
      </div>
      <div class="flex p-4">
        <span class="w-[200px] text-primary-color">Phone</span>
        <span>{{ userdata.phone }}</span>
      </div>
      <div class="flex p-4">
        <span class="w-[200px] text-primary-color">Website</span>
        <span>{{ userdata.website }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
import { ref, query, onValue } from "@firebase/database";
export default {
  data() {
    return { userdata: null };
  },
  created() {
    const userDetailID = this.$route.params.id;
    if (userDetailID) {
      const userRef = query(ref(db, "chatApp/users/" + userDetailID));
      onValue(
        userRef,
        async (snapshot) => {
          if (snapshot.exists()) {
            const data = await snapshot.val();
            this.userdata = data;
          } else {
            console.log("bobe");
          }
        },
        { onlyOnce: true }
      );
    }
  },
};
</script>
<style></style>
