<script setup>
  import { onMounted } from 'vue'
  import PostService from '@/service/PostService'

  const service = new PostService()
  const posts = service.getPosts()

  onMounted(async ()=>{
    await service.fetchAll()
  })

</script>

<template>
  <h1>Listado de posts</h1>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id" >
      {{post.title}}
    </li>
  </ul>
</template>

<style scoped>
  .post-list {
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;
  }
  .post-list li{ 
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
  }
</style>