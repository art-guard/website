<template>
  <div class="main">
    <p>
      Give me art
    </p>
    <div class="search">
      <input v-model="url" placeholder="url" type="text" />
      <button v-on:click="submit">Verify</button>
    </div>
    <div class="upload">
      <a>Upload instead</a>
    </div>
    <div v-if="result" class="result">
      {{ result }}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { verifyArtworkByUrl } from "@/services/artworks.service";

  export default Vue.extend({
    name: "VerifyArt",
    data: () => ({
      url: "",
      result: {},
    }),
    methods: {
      submit: async function() {
        try {
          const data = await verifyArtworkByUrl(this.url);
          this.result = data;
        } catch (err) {
          alert("Something went wrong.");
        }
      },
    },
  });
</script>

<style scoped lang="scss">
  .main {
    .upload {
      margin-top: 10px;
      a {
        cursor: pointer;
        text-decoration: underline;
        font-size: 0.9rem;
      }
    }
  }
</style>
