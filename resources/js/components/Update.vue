<template>
    
</template><template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Rename</div>
                    <div class="card-body">
                        <form v-on:submit="submitEdit()">
                            <div class="form-group">
                               <input type="text" v-model="posts.title" placeholder="Title" class="form-control">
                            </div>
                            <div class="form-group">
                               <textarea type="text" v-model="posts.description" placeholder="Description" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <router-link to="/" class="btn btn-primary">Cancel</router-link>
                                <button class="btn btn-success">Create</button>
                            </div>
                     </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
   export default {
    data:function(){
      return {
        posts:{
            title:'',
            description:''
        },
        errors:[]
      }
    },
    created(){
        let iid = this.$route.params.id;
        console.log(iid);
        axios.get('/posts/'+ iid +'/edit')
        .then(response =>{

            this.posts = response.data
        })
        .catch(e => {
           this.errors.push(e)
        })
    },
    methods:{ 
      submitEdit() {
       let iid = this.$route.params.id;
       axios.patch('/posts/' + iid,this.posts)
       .then(response => {
         this.$router.push({path:'/ '})
         console.log(response)
         this.posts = response.data
       })
       .catch(e => {
          this.errors.push(e)
       })
    }
  }
}
</script>