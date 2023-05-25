<template>
  <form @submit.prevent="submitForm" class="w-1/4">
    <div class="border border-gray-500 px-6 py-8 rounded-3xl">
      <div class="w-full mb-6">
        <div class="text-[16px] mb-1 ml-2">Name</div>
        <input type="text" placeholder="Enter name" v-model="formdata.name" />
      </div>
      <div class="w-full mb-6">
        <div class="text-[16px] mb-1 ml-2">User Name</div>
        <input
          type="text"
          placeholder="Enter user name"
          v-model="formdata.username"
        />
      </div>
      <div class="w-full mb-6">
        <div class="text-[16px] mb-1 ml-2">Email</div>
        <input type="text" placeholder="Enter email" v-model="formdata.email" />
      </div>
      <div class="w-full mb-6">
        <div class="text-[16px] mb-1 ml-2">Password</div>
        <input
          type="text"
          placeholder="Enter password"
          v-model="formdata.password"
        />
      </div>
      <button class="px-4 py-3 w-full">Add</button>
    </div>
  </form>
</template>
<script>
import { userMetaData } from "../utils/helpers";
import { ref, push } from "@firebase/database";
import { db } from "../firebase";

export default {
  data() {
    return {
      formdata: { password: "test" },
    };
  },
  props: ["toggleComp"],
  methods: {
    submitForm() {
      const randNum = this.getRandomNumber(0, 9);
      const finalData = { ...this.formdata, ...userMetaData[randNum] };
      const usersRef = ref(db, "chatApp/users");
      push(usersRef, {
        ...finalData,
      });
      this.toggleComp();
    },

    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
};
</script>
<style></style>
