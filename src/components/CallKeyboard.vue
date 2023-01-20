<template>
  <div>
    <table>
      <tr>
        <td>
          <button class="button" type="button" value="7" onclick="insert(1)">1</button>
        </td>
        <td>
          <button class="button" type="button" value="8" onclick="insert(2)">2</button>
        </td>
        <td>
          <button class="button" type="button" value="9" onclick="insert(3)">3</button>
        </td>
      </tr>
      
      <tr>
        <td>
          <button class="button" type="button" value="4" onclick="insert(4)">4</button>
        </td>
        <td>
          <button class="button" type="button" value="5" onclick="insert(5)">5</button>
        </td>
        <td>
          <button class="button" type="button" value="6" onclick="insert(6)">6</button>
        </td>
      </tr>
      
      <tr>
        <td>
          <button class="button" type="button" value="1" onclick="insert(7)">7</button>
        </td>
        <td>
          <button class="button" type="button" value="2" onclick="insert(8)">8</button>
        </td>
        <td><button class="button" type="button" value="3" onclick="insert(9)">9</button>
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
  name: 'CallKeyboard'
}
</script>
<style scoped>
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