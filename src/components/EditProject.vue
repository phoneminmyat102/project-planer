<template>
  <h3 style="text-align: center;">Edit Project</h3>
  <form @submit.prevent="updateProject">
      <label>Project Title</label>
      <input type="text" v-model="title"/>

      <label>Project Detail</label>
      <input type="text" v-model="detail"/>

      <button class="btn">Update Project</button>
    </form>
</template>

<script>
export default {
    props:['id'],

    data() {
        return {
            title:"",
            detail:"",
        }
    },

    methods:{
        updateProject() {
            fetch("http://localhost:3000/projects/"+this.id, {method:"PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                title:this.title,
                detail:this.detail,
            })
        })
        .then(()=>{
            this.$router.push("/");
        })
        .catch((err)=>{
            console.log(err)
        });
        }
    },

    mounted() {
        fetch("http://localhost:3000/projects/"+this.id)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            this.title=data.title;
            this.detail=data.detail;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #3c3535;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input
{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.btn{
    padding: 10px;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
}

.btn:hover{
    background-color:#f0d6d6;
    
}
</style>