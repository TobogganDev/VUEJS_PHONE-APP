<template>
  <div class="c-all">
    <div>
      <h3>Thomas</h3>
      <span>{{ now.getDate() }}/{{ ('0'+now.getMonth()+1).slice(-2) }}/{{ now.getFullYear() }} - {{ now.getHours() }}:{{  ('0'+now.getMinutes()).slice(-2) }}</span>
    </div>
    <i class="fa-solid fa-phone"></i>
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
}
</script>
<style scoped>
.c-all{
  padding: 10px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span{
  opacity: 0.3;
}
i{
  font-size: 1.3rem;
  color: #03C988;
}
</style>