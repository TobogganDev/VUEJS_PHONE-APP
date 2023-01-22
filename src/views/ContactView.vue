<template>
  <div class="c">
    <div class="top">
      <h2>Contact</h2>
    </div>
    
    <div v-for="perso in contact" :key="perso.name">
      <ContactName :perso="perso"/>
    </div>
    
  </div>
  <div class="c-all">
      <div class="open"  @click="open1()">
        <i class="fa-solid fa-plus" id="open"></i>
      </div>
      <div class="c-form">
        <FormContact :contact="contact" v-if="test"/>
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
  border-bottom: 1px solid #FFBF00;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}


.c-all{
  position: relative;
  width: 100%;
  height: 100%;
}

.c-all .open{
  cursor: pointer;
  position: absolute;
  background-color: #FFBF00;
  bottom: 5rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: 181818;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0px 5px 10px black;
}

</style>