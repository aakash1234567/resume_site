<template>
  <div class="project">
    <div class="proj" >
      <homeautomation />
    </div>
    <div class="proj">
      <internproj />
    </div>
    <div class="proj">
      <flutterchatapp />
    </div>
    <div class="proj">
      <opencvfun />
    </div>
    <div class="proj">
      <eyantracomp />
    </div>
    <div class="proj" >
      <contacttracker />
    </div>
    <div class="proj" style="left:50%" >
      <electronicsfun />
    </div>
    <!-- <div class="proj">
      <dinogame />
    </div>
    <div class="proj">
      <testcasegenerator />
    </div>
     -->
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
import eyantracomp from '@/components/projects/eyantracomp.vue'

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
    internproj,
    eyantracomp
  },
}
</script>
<style media="screen">
#root .project{
    /* position: relative; */
    padding-left: 5em;
    position: absolute;
    height: 100%;
    /* width:145vmin; */
    resize: horizontal;
    background:transparent;
    display: grid;
    /* flex-wrap: wrap; */
    grid-template-columns: repeat(2, 1fr);
     /* gap: .2em; */
     width: calc(100% - 0);
     justify-content: center;

     /* align-content: center; */
     /* display: flex; */
    /* border: 2px solid green; */
  }
#root .proj{
  height: fit-content;
  max-width: calc(100% - 10vmin);
  background-color: white;
  margin:1em;
  margin-left: 0em;
  position: relative;
  border: lightgrey 1px solid;
  border-radius: 0 15px 0 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.8);
  justify-items:center;
  display: grid;
}
#root .proj:hover{
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.8);
}

</style>
