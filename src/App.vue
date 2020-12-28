<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <navbar />
      <spider />
      <robot />
      <!-- <router-link to="/"></router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '@/components/navbar.vue'
import spider from '@/components/spider.vue'
import robot from '@/components/robot.vue'
export default {
  name: 'app',
  components: {
    navbar,
    spider,
    robot
  },
  mounted() {
    var string = window.location.href;
    var pattern1 = /projects/i
    var pattern2 = /blog/i
    var pattern3 = /contact/i
    console.log(string.match(pattern2))
    if (string.match(pattern1)){
      document.body.style.backgroundColor = '#c92142' ;
    }
    else if (string.match(pattern2)){
      document.body.style.backgroundColor = "#9f32b8";
    }
    else if (string.match(pattern3)){
      document.body.style.backgroundColor = '#e4a924';
    }
    else{
      document.body.style.backgroundColor = '#ffffff';
    }
  }
}
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
