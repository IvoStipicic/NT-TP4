
export default {
  name: 'src-componentes-formulario',
  components: {},
  
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 5,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120,
      users: []
    }
  },

  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    enviar() {
      this.users.push(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()
    },

  },

  computed: {
    getData() {
      return Object.keys(this.users[0])
    }
  }
}


