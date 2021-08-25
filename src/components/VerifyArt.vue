<template>
  <div class="main">
    <br>
    <div class="search">
      <input id="searchField" v-model="url" placeholder="Enter Artwork URL" type="text" />
      <button id="searchButton" v-on:click="submit">FIND ARTIST</button>
    </div>
    <br>
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
        color: #40df9f;
        cursor: pointer;
        text-decoration: underline;
        font-size: 0.9rem;
      }
    }
    .search{
      position: relative;
      width: 26%;
      margin-left: 37%;
      margin-bottom: 2%;
    }
    #searchField{
      float: left;
      box-sizing: border-box;
      padding-right: 100px;
      width: 100%;
      border-radius: 5px;
      height: 25px;
      background-color: #1f2e35;
      color: white;
      border-color: #dddddd;
    }
    #searchButton{
      position:absolute;
      top:0;
      right:0;
      width: 100px;
      background-color: #40df9f;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      height: 25px;
      border-color: #dddddd;
    }
  }
</style>
