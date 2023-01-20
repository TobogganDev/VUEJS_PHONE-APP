<template>
  <div>
    <div class="top">
      <h2>Récents</h2>
    </div>
    <div v-for="call in calls" :key="call.name">
      <CallJournal :call="call"/>
    </div>
  </div>
</template>

<script>
import CallJournal from '@/components/CallJournal.vue';
export default {
  name: 'JournalView',
  components: {
    CallJournal
  },
  computed : {
    calls(){
      return this.$store.state.calls
    }
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