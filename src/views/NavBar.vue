<template>
  <nav class="main-nav">
        <router-link to="/">Projects</router-link>
        <router-link :to="{name:'addProject'}">Add Project</router-link>
  </nav>
</template>

<script>

export default {
    
}
</script>

<style scoped>
.main-nav{
    text-align: center;
    margin: 40px auto;
}

.main-nav a{
display: inline-block;
text-decoration: none;
margin: 0 10px;
color: #cf10e0;
font-size: 18px;
}

.router-link-active{
    border-bottom: 3px solid rgb(167, 3, 255);
}

</style>