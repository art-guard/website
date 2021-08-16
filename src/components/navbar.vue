<template>
    <div class="navbar">
        <div class="navbarComp"> 
            <b> Login </b> 
        </div>
        <div class="navbarComp">
            Guard Your Art
        </div>
        <div></div>
    </div>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
    name: "navbar",
    });
</script>

<style scoped>
    body{
        background-color: #1f2e35;
    }
    .navbar{
    display: flex;
    flex-direction: row-reverse;
    text-align: right;
    color: #40df9f;
    }
    .navbarComp{
        text-transform: uppercase;
        margin-left: 1%;
        margin-right: 1%;
    }
</style>