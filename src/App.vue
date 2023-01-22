<template>
  
  <div class="container">
    <p>{{ date.getHours() }}:{{  ('0'+date.getMinutes()).slice(-2) }}</p>
    
    <router-view/>
    
    <nav>
      <router-link to="/"><i class="fa-regular fa-clock"></i></router-link> |
      <router-link to="/contact"><i class="fa-regular fa-circle-user"></i></router-link> | 
      <router-link to="/appels"><i class="fa-solid fa-hashtag"></i></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    date(){
      return this.$store.state.date
    }
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #181818;
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

::-webkit-scrollbar {
  width: 0px !important;
}

a{
  text-decoration: none;
  color: white;
}

.container{
  width: 350px;
  max-width: 350px;
  border: 2px solid white;
  height: 600px;
  border-radius: 30px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #181818;
  box-shadow: 15px 15px #2C3333;
  overflow: hidden;
}

.container nav{
  position: absolute;
  bottom: 0;
  padding: 1rem;
  font-size: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background: #FFBF00;
  text-align: center;
  border-radius: 50px;
  color: white;
}

.container p{
  text-align: center;
}






</style>
