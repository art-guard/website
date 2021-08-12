<template>
    <div class="Navbar">
        <div class="NavbarComp"> 
            <b> Login </b> 
        </div>
        <div class="NavbarComp">
            Guard Your Art
        </div>
        <div></div>
    </div>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
    name: "Navbar",
    });
</script>

<style scoped>
    body{
        background-color: #1f2e35;
    }
    .Navbar{
    display: flex;
    flex-direction: row-reverse;
    text-align: right;
    color: #40df9f;
    }
    .NavbarComp{
        text-transform: uppercase;
        margin-left: 1%;
        margin-right: 1%;
    }
</style>