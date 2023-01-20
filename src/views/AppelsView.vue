<template>
  <div>
    <form action="" name="phoneNumber">
      <input type="tel" name="tel" id="tel" >
      <span></span>
    </form>
    
    <table>
      <tr>
        <td>
          <button class="button" type="button" value="7" @click="insert(1)">1</button>
        </td>
        <td>
          <button class="button" type="button" value="8" @click="insert(2)">2</button>
        </td>
        <td>
          <button class="button" type="button" value="9" @click="insert(3)">3</button>
        </td>
      </tr>
      
      <tr>
        <td>
          <button class="button" type="button" value="4" @click="insert(4)">4</button>
        </td>
        <td>
          <button class="button" type="button" value="5" @click="insert(5)">5</button>
        </td>
        <td>
          <button class="button" type="button" value="6" @click="insert(6)">6</button>
        </td>
      </tr>
      
      <tr>
        <td>
          <button class="button" type="button" value="1" @click="insert(7)">7</button>
        </td>
        <td>
          <button class="button" type="button" value="2" @click="insert(8)">8</button>
        </td>
        <td><button class="button" type="button" value="3" @click="insert(9)">9</button>
        </td>
      </tr>
    </table>
    
    <button type="submit" id="call">
      <i class="fa-solid fa-phone"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: 'AppelsView',
  methods: {
    insert(num){
      document.phoneNumber.tel.value = document.phoneNumber.tel.value+num;
    }
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
table{
  text-align: center;
  width: 100%;
  padding-top: 2rem;
}
button{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  margin-bottom: 1rem;
  color: white;
}
button:active{
  background-color: rgba(255, 255, 255, 0.4);
}
#call{
  font-size: 1.5rem;
  background-color: #03C988;
}


</style>