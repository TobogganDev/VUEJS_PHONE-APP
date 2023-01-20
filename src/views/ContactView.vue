<template>
  <div class="c">
    <div class="top">
      <h2>Contact</h2>
      <i class="fa-solid fa-plus" id="open" @click="open1()"></i>
    </div>
    
    <FormContact :contact="contact" v-if="test"/>
    <div v-for="perso in contact" :key="perso.name">
      <ContactName :perso="perso"/>
    </div>
  </div>
</template>
<script>
import ContactName from '@/components/ContactName.vue';
import FormContact from '@/components/FormContact.vue';
export default {
  name: 'ContactView',
  components: {
    ContactName,
    FormContact
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    contact(){
      return this.$store.state.contact
    },
    test(){
      return this.$store.state.open
    }
  },
  methods: {
    open1(){
      this.$store.commit('modal')
    }
    
  }
}
</script>
<style scoped>
.c{
  position: relative;
}
.top{
  border-bottom: 1px solid gray;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}
i{
  cursor: pointer;
}
</style>