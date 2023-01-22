<template>
  <div class="c-all">
    <div>
      <h3>{{ call.name }}</h3>
      <span>{{ now.getDate() }}/{{ ('0'+now.getMonth()+1).slice(-2) }}/{{ now.getFullYear() }} - {{ now.getHours() }}:{{  ('0'+now.getMinutes()).slice(-2) }}</span>
    </div>
    <i class="fa-solid fa-phone" @click="missedCalls"></i>
  </div>
</template>
<script>
export default {
  name: 'CallJournal',
  data(){
    return{
      now: new Date()
    }
  },
  props: [
    'call'
  ],
  methods: {
    missedCalls(){
      this.$store.commit('missedCalls',this.call)
    }
  }
}
</script>
<style scoped>
.c-all{
  padding: 10px;
  border-bottom: 1px solid #FFBF00;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span{
  opacity: 0.3;
}
i{
  font-size: 1.3rem;
  color: #FFBF00;
}
</style>