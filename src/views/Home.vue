<template>
  <div class="home">
    <img id="homeBanner" src="@/assets/homeBanner.png">
    <VerifyArt />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import VerifyArt from "@/components/VerifyArt.vue"; // @ is an alias to /src

  export default Vue.extend({
    name: "Home",
    components: {
      VerifyArt,
    },
  });
</script>

<style>
  body{
        background-color: #1f2e35;
    }
  #homeBanner{
      width: 25%;
      margin-bottom: 2%;
  }
</style>