<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="flexing">
      <div>
        <h3 @click="showDetail = !showDetail">{{ project.title }}</h3>
      </div>
      <div>
        <span @click="deleteProject" class="material-icons">
          delete_forever
        </span>
        <router-link :to="{name:'editProject', params:{id:project.id}}">
          <span class="material-icons"> edit </span>
        </router-link>
        <span class="material-icons" @click="completeProject"> done </span>
      </div>
    </div>

    <p v-if="showDetail">{{ project.detail }}</p>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetail: false,
      api: "http://localhost:3000/projects/",
    };
  },

  methods: {
    deleteProject() {
      // console.log(this.api+this.project.id)
      let deleteRoute = this.api + this.project.id;
      fetch(deleteRoute, { method: "DELETE" })
        .then(() => {
          this.$emit("delete", this.project.id);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    completeProject() {
      let completeRoute = this.api + this.project.id;
      fetch(completeRoute, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          complete: !this.project.complete,
        }),
      })
        .then(() => {
          this.$emit("complete", this.project.id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.project {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 6px;
  margin: 10px;
  border-left: 8px solid red;
}

h3 {
  cursor: pointer;
  color: indigo;
}

span {
  margin-left: 14px;
  cursor: pointer;
}

span:hover {
  color: darkgrey;
}

.flexing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.complete {
  border-left: 8px solid cyan;
}

a{
  color: inherit;
}
</style>
