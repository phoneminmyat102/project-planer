<template>
  <nav class="filterNav">
    <button @click="filterNav('all')" :class="{active:current==='all'}">All</button>
    <button @click="filterNav('complete')" :class="{active:current==='complete'}">Complete</button>
    <button @click="filterNav('ongoing')" :class="{active:current==='ongoing'}">Ongoing</button>
  </nav>
</template>

<script>
export default {
    props:['current'],

    methods:{
        filterNav(value) {
            this.$emit("filterNav", value);
        }
    }
}
</script>

<style>
.filterNav button{
    background-color: white;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}

button.active {
    color: black;
}
</style>