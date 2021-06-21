<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>2) HttpRequest</h2>
      <hr>

      <button class="btn btn-danger my-3 mr-3" @click="getPostsCb()">XMLHttpRequest</button>    
      <button class="btn btn-warning my-3 mr-3" @click="getPostsFetch()">FETCH</button>    
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">AXIOS</button>    

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <!-- ENCABEZADO DE LA TABLA USANDO V-FOR -->
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <!-- FILAS CON LOS DATOS USANDO V-FOR -->
          <tr v-for="(post,index) in posts" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{post[col]}}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger">No se encontraron datos de Users</h4>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
  
    data () {
      return {
        url: 'https://60a9360020a6410017306e6b.mockapi.io/users',
        posts : []
      }
    },
    methods: {
          
      getPostsCb() {
        let xhr = new XMLHttpRequest
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest', respuesta)
            this.posts = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', e => {
            console.error(`Error XMLHttpRequest ->`, e)
        })
        xhr.send()
      },
     
      getPostsFetch() {
          fetch(this.url)
          .then(datos => datos.json())
          .then(respuesta => {
            console.log('FETCH', respuesta)
            this.posts = respuesta
          })
          .catch(error => console.error(error))
      },
      
      getPostsAxios() {
          this.axios(this.url)
          .then( respuesta => {
            console.log('AXIOS', respuesta.data)
            this.posts = respuesta.data
          })
          .catch(error => console.error(error))
      }

    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
      }
    }
}

</script>

<style scoped lang="css">
  .src-componentes-http {

  }

  .jumbotron {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%);
  }

  hr {
    background-color: #fff;
  }  

  h2 {
    color: aliceblue;
  }

</style>
