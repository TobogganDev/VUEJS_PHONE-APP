<template>
  <div>
    <h3>Thomas</h3>
    <span>06 14 84 14 34</span>
    <i class="fa-solid fa-phone"></i>
  </div>
</template>
<script>
export default {
  name: 'ContactName',
}
</script>
<style scoped>
div{
  display: flex;
  justify-content: space-between;
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