<template lang="html">
  <div class="contact">
    <candle />
  </div>
</template>

<script>
import candle from '@/components/candle.vue'
export default {
  name: 'contact',
  components: {
    candle
  },
}
</script>

<style lang="css" >
#root .contact{
  top:20em;
  position: absolute;
  padding-left: 7em;
  min-height: 100%;
  min-width:100%;
  /* border: 2px solid green; */
}
</style>
