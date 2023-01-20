<template>
  <div>
    <form action="">
      <input type="tel" name="tel" id="tel" >
      <span></span>
    </form>
    
    <CallKeyboard/>
  </div>
</template>
<script>
import CallKeyboard from '@/components/CallKeyboard.vue';
export default {
  name: 'AppelsView',
  components: {
    CallKeyboard
  }
}
</script>
<style scoped>
div{
  text-align: center;
  padding-top: 1rem;
}
form{
  border-bottom: 1px solid gray;
}
input{
  padding: 1rem 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2rem;
  width: 100%;
  color: white;
}
span{
  opacity: 0.5;
}



</style>