<template>
  <div class="home">
    <h1>Art Guard</h1>
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
