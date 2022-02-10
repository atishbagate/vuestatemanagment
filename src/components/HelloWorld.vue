<template>
  <div class="hello">
    <p>
    this is vuex state managment system
    </p>
    <div class="counter" :style="{color:$store.state.colorCode}">
      <h2>{{ $store.state.counter }}</h2>
    </div>
    <p>imported as component</p>
    <square />
    <br><br>
    <div class="buttons">
<!-- <button type="button" @click="$store.commit('increaseCounter')" name="button">+</button>
<button type="button" @click="$store.commit('decreaseCounter')" name="button">-</button> -->

<button type="button" @click="$store.dispatch('increaseCounter')" name="button">+</button>
<button type="button" @click="$store.dispatch('decreaseCounter')" name="button">-</button>
    </div>
    <br>
    <p>this is called from component</p>
    <inputField />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // NEW METHOD TO CALL COMPONENT AND IMPLEMENTING IT directly
  components:{
    'square':require('./square.vue').default,
    'inputField':require('./inputField.vue').default
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons button{
  margin-left: 10px;
}
</style>
