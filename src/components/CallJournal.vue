<template>
  <div class="c-all">
    <div>
      <h3>Thomas</h3>
      <span>portable</span>
    </div>
    <i class="fa-solid fa-phone"></i>
  </div>
</template>
<script>
export default {
  name: 'CallJournal'
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
  color: #03C988;
}
</style>