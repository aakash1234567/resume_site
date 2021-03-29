<template lang="html">
  <div class="robot">
    <svg height="160" width="100%" viewBox="0 0 376 583" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="51" y="21" width="7" height="230" fill="#C4C4C4"/>
    <path class="head" fill-rule="evenodd" clip-rule="evenodd" d="M244.591 258C253.174 245.95 258 232.368 258 218C258 168.294 200.245 128 129 128C57.7553 128 0 168.294 0 218C0 232.368 4.82612 245.95 13.4091 258H244.591Z" fill="#9D7FF2"/>
    <rect x="107" y="193" width="44" height="81" fill="#9D7FF2"/>
    <ellipse class="eye1"  cx="198" cy="207" rx="22" ry="26" fill="black"/>
    <rect y="274" width="261" height="265" rx="40" fill="#9D7FF2"/>
    <rect x="38" y="495" width="47" height="88" rx="22" fill="#9D7FF2"/>
    <rect x="173" y="495" width="47" height="88" rx="22" fill="#9D7FF2"/>
    <!-- <span class="hand" style="background:white;position:absolute;z-index:50"> -->
      <rect class="hand" x="349.814" y="274" width="47" height="155.294" rx="23.5" fill="#9D7FF2"/>
    <!-- </span> -->
    <rect class="box" x="38" y="359" width="182" height="157" rx="23" fill="#8C73D6"/>
    <rect x="173" y="406" width="66" height="38" fill="#775EBD"/>
    <ellipse cx="53" cy="13.5" rx="15" ry="13.5" fill="#C4C4C4"/>
    <path class="eye2" d="M92 204C92 218.359 82.1503 230 70 230C57.8497 230 48 218.359 48 204C48 189.641 57.8497 178 70 178C82.1503 178 92 189.641 92 204Z" fill="#090808"/>
    </svg>
    <button type="button" name="button" @click="danger" id="danger" style="display:none"></button>
    <button type="button" name="button" @click="save" id="save" style="display:none"></button>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'robot',
  components: {

  },
  methods: {
    danger() {
      console.log("danger")
      document.getElementsByClassName('eye1')[0].style.animationPlayState = "paused"
      document.getElementsByClassName('eye2')[0].style.animationPlayState = "paused"
      document.getElementsByClassName('hand')[0].style.animationPlayState = "paused"
      document.getElementsByClassName('box')[0].style.animationPlayState = "paused"
      // console.log(temp)
      document.getElementsByClassName("hand")[0].animate([
          // keyframes
          { transform: 'rotateZ(0deg)' },
          { transform: 'rotateZ(0deg)' }
        ], {
          // timing options
          duration: 1700,
          iterations: Infinity,
          direction: 'alternate',
          easing: "ease-in-out",
        });
      var temp1 = document.getElementsByClassName("robot")[0].querySelectorAll('rect')
      // var temp2 = document.getElementsByClassName("robot")[0].querySelectorAll('.eye1 .eye2')
      var temp2 = document.getElementsByClassName("robot")[0].querySelectorAll('.head')
      var temp3 = document.getElementsByClassName("robot")[0].querySelectorAll('ellipse')
      var temp4 = document.getElementsByClassName("robot")[0].querySelectorAll('path')
      anime({
        targets: temp1,
        translateY: '250px'
      });
      anime({
        targets: temp2,
        translateY: '350px'
      });
      anime({
        targets: temp3,
        translateY: '850px'
      });
      anime({
        targets: temp4,
        translateY: '850px'
      });
      // console.log(temp)
    },
    save() {
      console.log("save")
      var temp1 = document.getElementsByClassName("robot")[0].querySelectorAll('rect')
      var temp2 = document.getElementsByClassName("robot")[0].querySelectorAll('.head')
      var eye1 = document.getElementsByClassName("robot")[0].querySelectorAll('.eye1')
      var eye2 = document.getElementsByClassName("robot")[0].querySelectorAll('.eye2')
      var temp3 = document.getElementsByClassName("robot")[0].querySelectorAll('ellipse')
      var temp4 = document.getElementsByClassName("robot")[0].querySelectorAll('path')
      anime({
        targets: temp1,
        translateY: '0px'
      });
      anime({
        targets: temp2,
        translateY: '0px'
      });
      anime({
        targets: temp3,
        translateY: '0px'
      });
      anime({
        targets: temp4,
        translateY: '0px'
      });
      document.getElementsByClassName("eye1")[0].style.animationPlayState = "running"
      document.getElementsByClassName("eye2")[0].style.animationPlayState = "running"
      document.getElementsByClassName("hand")[0].style.animationPlayState = "running"
      document.getElementsByClassName("box")[0].style.animationPlayState = "running"
      document.getElementsByClassName("hand")[0].animate([
          // keyframes
          { transform: 'rotateZ(200deg)' },
          { transform: 'rotateZ(230deg)' }
        ], {
          // timing options
          duration: 1700,
          iterations: Infinity,
          direction: 'alternate',
          easing: "ease-in-out",
        });
    }
  },
  mounted(){
    // this.movehand()
  },
}
</script>

<style lang="css" scoped media="screen">
@keyframes hand {
	to { transform: rotateZ(200deg); }
}
@keyframes eye {
	to { transform: rotateX(20deg); }
}
@media screen and (min-width: 900px) {
  .robot{
    position: absolute;
    z-index: 50;
    bottom:0%;
    left:0%;
    transform: scale(.8);
    /* left:10%; */
  }
}
@media screen and (max-width: 900px) {
  .robot{
    position: absolute;
    z-index: 50;
    bottom:0%;
    left:0%;
    transform: scale(.55);
    /* left:10%; */
  }
}
.hand{
  transform-origin: 100% center;
  transform: rotateZ(230deg) translateY(0px);
  animation: hand 1.7s infinite alternate ease-in-out;
}
.eye1{
  /* transform-origin: 100% center; */
  transform: rotateX(0deg);
  animation: eye 1.7s infinite alternate ease-in-out;
}
.eye2{
  /* transform-origin: 100% center; */
  transform: rotateX(0deg);
  animation: eye 1.7s infinite alternate ease-in-out;
}
.box{
  transform: rotateX(0deg);
  animation: eye 1.7s infinite alternate ease-in-out;
}
</style>
