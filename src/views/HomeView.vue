<template>
  <div class="home">
    <h1 style="text-align: center;">Home Page</h1>
    <FilterNav @filterNav="current=$event" :current="current"/>
    <div v-for="project in projects" :key="project.id">
      <SingleProject :project="project" @delete="deletePj" @complete="completePj"></SingleProject>
    </div>
  </div>
</template>

<script>
import SingleProject from '@/components/SingleProject.vue';
import FilterNav from './FilterNav.vue';

export default {
  name: 'HomeView',
  components: {
    SingleProject,
    FilterNav

  },
  data() {
    return {
      projects:[],
      current:"all",
    }
  },

  methods:{
    deletePj(id) {
      // console.log(id)
      this.projects = this.projects.filter((project)=>{
        return project.id !== id;
      });
    },

    completePj(id) {
      let findProject = this.projects.find(project => {
        return project.id === id;
      });

      findProject.complete = !findProject.complete;
    }
  },

  mounted() {
    fetch("http://localhost:3000/projects")
    .then((response)=>{
      return response.json();
    })
    .then((datas) => {
      this.projects = datas;
    })
    .catch((err)=>{
      console.log(err.Message());
    })
  }
}
</script>
