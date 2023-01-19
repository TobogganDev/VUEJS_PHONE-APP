<template>
  <div>
    <div class="top">
      <h2>Récents</h2>
    </div>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
    <CallJournal/>
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
  div{
    overflow: auto;
  }
  .top{
    border-bottom: 1px solid gray;
    padding-top: 15px;
  }
</style>