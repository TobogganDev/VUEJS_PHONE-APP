<template>
  <div>
    <div class="top">
      <h2>Contact</h2>
    </div>
    <ContactName/>
  </div>
</template>
<script>
import ContactName from '@/components/ContactName.vue';
export default {
  name: 'ContactView',
  components: {
    ContactName
  }
}
</script>
<style>
  .top{
    border-bottom: 1px solid gray;
    padding-top: 15px;
  }
</style>