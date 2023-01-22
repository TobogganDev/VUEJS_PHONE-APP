<template>
  <form @submit.prevent="newContact">
    <input type="text" name="name" id="name" required placeholder="Nom" v-model="formContact.name">
    <input type="tel" name="tel" id="tel" required placeholder="Numéro" v-model="formContact.phone">
    <input type="submit" value="Ajouter" >
  </form>
</template>
<script>
export default {
  name: 'FormContact',
  data(){
    return{
      formContact: {
        name: '',
        phone: ''
      }
    }
    
  },
  props:[
    'contact'
  ],
  computed: {
    test(){
      return this.$store.state.open
    }
  },
  methods: {
    close1(){
      this.$store.commit('close')
    },
    newContact() {
      if(this.contact.find(perso => perso.pseudo === this.formContact.name)) return
      this.$store.commit('newContact', this.formContact)
      this.formContact = {
        name: '',
        phone: ''
      }
      this.close1();
    }
  }
}
</script>
<style scoped>
form{
  text-align: center;
  background-color: #181818;
  border: 2px solid #FFBF00;
  padding-bottom: 1rem;
  border-radius: 10px;
  position: absolute;
  z-index: 500;
  transition: all .6s ease;
}
input{
  padding: 8px 16px;
  border: none;
  outline: none;
  margin-top: 1rem;
  background-color: transparent;
  border-bottom: 1px solid white;
  color: white;
  font-size: 1.3rem;
}
input[type=submit]{
  cursor: pointer;
}
</style>