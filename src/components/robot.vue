<template lang="html">
  <div class="robot">
    <svg height="160" width="200" viewBox="0 0 376 583" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="51" y="21" width="7" height="230" fill="#C4C4C4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M244.591 258C253.174 245.95 258 232.368 258 218C258 168.294 200.245 128 129 128C57.7553 128 0 168.294 0 218C0 232.368 4.82612 245.95 13.4091 258H244.591Z" fill="#9D7FF2"/>
    <rect x="107" y="193" width="44" height="81" fill="#9D7FF2"/>
    <ellipse id="eye"  cx="198" cy="207" rx="22" ry="26" fill="black"/>
    <rect y="274" width="261" height="265" rx="40" fill="#9D7FF2"/>
    <rect x="38" y="495" width="47" height="88" rx="22" fill="#9D7FF2"/>
    <rect x="173" y="495" width="47" height="88" rx="22" fill="#9D7FF2"/>
    <!-- <span class="hand" style="background:white;position:absolute;z-index:50"> -->
      <rect class="hand" x="349.814" y="274" width="47" height="155.294" rx="23.5" fill="#9D7FF2"/>
    <!-- </span> -->
    <rect x="38" y="359" width="182" height="157" rx="23" fill="#8C73D6"/>
    <rect x="173" y="406" width="66" height="38" fill="#775EBD"/>
    <ellipse cx="53" cy="13.5" rx="15" ry="13.5" fill="#C4C4C4"/>
    <path id="eye" d="M92 204C92 218.359 82.1503 230 70 230C57.8497 230 48 218.359 48 204C48 189.641 57.8497 178 70 178C82.1503 178 92 189.641 92 204Z" fill="#090808"/>
    </svg>

  </div>
</template>

<script>
export default {
  name: 'robot',
  components: {

  },
  methods: {
    movehand() {
      var temp = document.getElementsByClassName('hand')
      var degrees = 0;
      // const scaleKeyframes = [
      //   {transform: 'scale(1)'},
      //   {transform: 'scale(2)'}
      // ]
      // const scaleTiming = {
      //   duration: 2100,
      //   iterations: Infinity,
      //   direction: 'alternate'
      // }

      const rotateKeyframes = [
        // {transform: 'rotateZ(274deg)'},
        {transform: 'rotate(1turn)'},
        // {transform: 'rotateY(deg)'},
        {transform: 'rotate(30deg)'},
        // {transformOrigin: 'center 100%'}
      ]
      const rotateTiming = {
        duration: 300,
        iterations: Infinity,
        direction: 'alternate',
        transitiontTimingFunction: 'ease-in-out'
      }
      // temp[0].animate(scaleKeyframes, scaleTiming);
      temp[0].animate(rotateKeyframes, rotateTiming);
    }
  },
  mounted(){
    // this.movehand()
  },
}
</script>

<style lang="css" scoped>
@keyframes hand {
	to { transform: rotateZ(200deg); }
}
@keyframes eye {
	to { transform: rotateX(20deg); }
}
.robot{
  position: absolute;
  z-index: 50;
  top:75%;
  /* left:10%; */

}
.hand{
  transform-origin: 100% center;
  transform: rotateZ(250deg);
  animation: hand 1.7s infinite alternate ease-in-out;
}
#eye{
  /* transform-origin: 100% center; */
  transform: rotateX(0deg);
  animation: eye 1.7s infinite alternate ease-in-out;
}
</style>
