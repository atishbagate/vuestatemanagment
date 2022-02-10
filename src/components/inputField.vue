<template>
  <div class="colors">
    <!-- joining the field directly to store is bad  -->
    <!-- we use computed properties for this connections -->
    <!-- v-model="$store.state.colorCode"   -->
    <input
      type="text"
      v-model="colorCode"
      name="info"
      placeholder="enter text here."
    />
  </div>
</template>
<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        // console.log(newValue);
        // this.$store.commit('setColorCode',newValue)
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>
<style></style>
