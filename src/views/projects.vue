<template>
  <div class="project">
    <div class="outproj" >
    <div class="proj" >
      <homeautomation />
    </div>
    </div>
    <div class="outproj" >
    <div class="proj">
      <internproj />
    </div>
    </div>
    <div class="outproj" >
    <div class="proj">
      <flutterchatapp />
    </div>
    </div>
    <div class="outproj" >
    <div class="proj">
      <opencvfun />
    </div>
    </div>
    <div class="outproj" >
    <div class="proj">
      <eyantracomp />
    </div>
    </div>
    <div class="outproj" >
    <div class="proj" >
      <contacttracker />
    </div>
    </div>
    <div class="outproj" id="outproj" >
    <div class="proj"  >
      <electronicsfun />
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap');
@media screen and (max-width: 650px) {
  #root .project {
    /* position: relative; */
    padding-left: 5em;
    position: absolute;
    height: 100%;
    overflow:visible;
    resize:both;
    /* width:145vmin; */
    background:transparent;
    /* display: grid; */
    /* flex-wrap: wrap; */
    /* grid-template-columns: repeat(2, 1fr); */
     /* gap: .2em; */
     /* width: calc(100% - 0); */
     /* justify-content: center; */
     gap: .2em;
     width: calc(100% - 0);
     display: flex;
     flex-wrap: wrap;
     /* align-content: center; */
     /* display: flex; */
    /* border: 2px solid green; */
  }
  #root #outproj{

  }
}
@media screen and (min-width: 650px) {
#root .project{
    /* position: relative; */
    padding-left: 5em;
    position: absolute;
    height: 100%;
    overflow:visible;
    resize:both;
    /* width:145vmin; */
    background:transparent;
    display: grid;
    /* flex-wrap: wrap; */
    grid-template-columns: repeat(2, 1fr);
     /* gap: .2em; */
     /* width: calc(100% - 0); */
     /* justify-content: center; */
     gap: .2em;
     width: calc(100% - 0);
     /* display: flex; */
     /* flex-wrap: wrap; */
     /* align-content: center; */
     /* display: flex; */
    /* border: 2px solid green; */
  }
  #root #outproj{
    left:50%
  }
}
#root .outproj{
    height: fit-content;
    width:fit-content;
    /* max-width: calc(100% - 10vmin); */
    /* background-color: white; */
    margin:1em;
    margin-left: 0em;
    position: relative;
    /* border: lightgrey 1px solid; */
    /* border-radius: 0 600px 0 15px; */
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.8);
    justify-items:center;
    /* display: inline-grid; */
    background-color: transparent
    /* font-family: 'Noto Sans JP', sans-serif; */
  }
#root .proj{
  height: fit-content;
  /* max-width: calc(100% - 10vmin); */
  background-color: #0c3f91;
  margin:0px;
  padding: 0px;
  position: relative;
  /* border: lightgrey 1px solid; */
  border-radius: 300px 100px 400px 100px;
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, .6);
  justify-items:center;
  display: grid;

}
#root .proj:hover{
  box-shadow: 7px 7px 10px 10px rgba(0, 0, 0, 0.8);
}
#root .projhead{
  font-size: 7vh;
  color:#c7d5f0;
  font-family:'Yanone Kaffeesatz', sans-serif;
text-shadow: 0 0 3px #FF0000, 3px 3px 3px #FF0000;
}
#root .projcontent{
  color:white;
font-family: 'Inconsolata', monospace;
text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
}
</style>
