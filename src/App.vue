<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//token操作
import currentToken from '@/utils/token'
import {setToken} from '@/utils/auth'
import { getAllDetailList } from "@/api/base";

export default {
  name: "App",
  data() {
    return {};
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>

