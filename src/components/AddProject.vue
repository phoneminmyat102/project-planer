<template>
<h3 style="text-align: center;">Add New Project</h3>
    <form @submit.prevent="addNewProject">
      <label>Project Title</label>
      <input type="text" v-model="title"/>

      <label>Project Detail</label>
      <input type="text" v-model="detail"/>

      <button class="btn">Submit</button>
    </form>

</template>

<script>
export default {

    data() {
        return {
            title:"",
            detail:"",
        }
    },

    methods:{
        addNewProject() {
            fetch("http://localhost:3000/projects", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title:this.title,
                    detail:this.detail,
                    complete:false
                })
            })
            .then(()=>{
                this.title="";
                this.detail="";
                this.$router.push("/")
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
};
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
