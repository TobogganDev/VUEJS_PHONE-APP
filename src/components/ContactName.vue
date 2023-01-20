<template>
  <div>
    <h3>{{ perso.name }}</h3>
    <span>{{ perso.phone }}</span>
    <i class="fa-solid fa-phone" @click="missedCalls"></i>
  </div>
</template>
<script>
export default {
  name: 'ContactName',
  props: [
    'perso'
  ],
  methods: {
    missedCalls(){
      this.$store.commit('missedCalls',this.perso)
    }
  }
}
</script>
<style scoped>
div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid gray;
}
span{
  opacity: 0.3;
}
i{
  font-size: 1.3rem;
  color: #03C988;
}
</style>