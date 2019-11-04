<template>
    <div class="card">
        <div class="card-header">
          <router-link to="/create" class="btn btn-success">Ceate</router-link>
        </div>
        <div class="card-body">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th width="100">View</th>
      <th width="100">Edit</th>
      <th width="100">Remove</th>
    </tr>
  </thead>
  <tbody>
     <tr  v-for="post,index in posts">
      <td>{{post.title}}</td>
      <td>{{post.description}}</td>
      <td>
        <router-link :to="{name:'readpost',params:{id:post.id}}" class="btn btn-info">View</router-link>
      </td>
      <td>
        <router-link :to="{name:'editpost',params:{id:post.id}}" class="btn btn-warning">Rename</router-link>
      </td>
      <td>
         <button v-on:click="submitDelete(post.id, index)" class="btn btn-danger">Remove</button>
      </td>
     </tr>
 </tbody>
</table>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get('/posts')
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  // Delete
  methods:{ 
      submitDelete(id, index){
       if(confirm("click 'Ok' to delete.")){ 
       axios.patch('/posts/' + id)
       .then(response => {
         console.log(response)
         this.posts.splice(index,1);
       })
       .catch(e => {
          this.errors.push(e)
       })
    }

  }
  }
    
}
</script>