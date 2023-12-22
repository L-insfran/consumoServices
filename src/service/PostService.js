import { ref } from 'vue'

class PostService {
  #posts  // atributo de la clase privada

  constructor() {
    this.#posts = ref([])
  }

  getPosts () {
    return this.#posts
  }

  async fetchAll() {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(url) //esperamos la respuesta  'si no usamos await se espera la promesa de una respuesta'
      const json = await response.json()
      this.#posts.value = await json
    } catch (error) {
      console.log(error)
    }
  }

}
export default PostService