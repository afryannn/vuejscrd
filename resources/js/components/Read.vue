<template>
    <div class="card">
        <div class="card-header">

        </div>
        <div class="card-body">
            <h2>{{posts.title}}</h2>
            <p>{{posts.description}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            posts: [],
            errors: []
        }
    },
    created(){
        let iid = this.$route.params.id;
        console.log(iid);
        axios.get('/posts/'+ iid)
        .then(response =>{

            this.posts = response.data
        })
        .catch(e => {
           this.errors.push(e)
        })
    }
}
</script>