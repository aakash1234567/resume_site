<template>
  <div class="home">
    <div class="proj" >
      <homeautomation />
    </div>
    <div class="proj" >
      <!-- <contacttracker /> -->
    </div>
    <div class="proj">
      <!-- <dinogame /> -->
    </div>
    <div class="proj">
      <!-- <electronicsfun /> -->
    </div>
    <div class="proj">
      <!-- <flutterchatapp /> -->
    </div>
    <div class="proj">
      <!-- <opencvfun /> -->
    </div>
    <div class="proj">
      <!-- <testcasegenerator /> -->
    </div>
    <div class="proj">
      <!-- <internproj /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import homeautomation from '@/components/projects/homeautomation.vue'
import contacttracker from '@/components/projects/contacttracker.vue'
import dinogame from '@/components/projects/dinogame.vue'
import electronicsfun from '@/components/projects/electronics_fun.vue'
import flutterchatapp from '@/components/projects/flutterchatapp.vue'
import opencvfun from '@/components/projects/opencvfun.vue'
import testcasegenerator from '@/components/projects/testcasegenerator_cp.vue'
import internproj from '@/components/projects/internproj.vue'
export default {
  name: 'projects',
  components: {
    homeautomation,
    contacttracker,
    dinogame,
    electronicsfun,
    flutterchatapp,
    opencvfun,
    testcasegenerator,
    internproj
  },
}
</script>
<style media="screen">
.proj{
  height: 16em;
  width: calc(100% - 10vmin);
  background-color: white;
  margin:1em;
  position: relative !important;
  border: lightgrey 1px solid;
  border-radius: 0 15px 0 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.8);
}
.proj:hover{
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.8);
}
</style>
