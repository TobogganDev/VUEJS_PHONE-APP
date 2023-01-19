<template>
  <div>
    <div class="top">
      <h2>Récents</h2>
    </div>
    <CallJournal/>
  </div>
</template>

<script>
import CallJournal from '@/components/CallJournal.vue';
export default {
  name: 'JournalView',
  components: {
    CallJournal
  }
}
</script>

<style scoped>
  .top{
    border-bottom: 1px solid gray;
    padding-top: 15px;
  }
</style>