<template lang="html">
  <div class="">
    <h1>hiiii</h1>
    <canvas id="canvas" :width="width" :height="height">
      <h1>hiii</h1>
    </canvas>
  </div>
</template>

<script >
export default {
  name: 'dinogame',
  props: [ 'width', 'height' ],
  components: {

  },
  methods: {
			drawGrid () {
				let ctx = canvas.getContext('2d')

				let s = 28
				let nX = Math.floor(this.width / s) - 2
				let nY = Math.floor(this.height / s) - 2
				let pX = this.width - nX * s
				let pY = this.height - nY * s

				// Bonus code for choosing nX instead of s
				/* let nX = 20
				let s = Math.floor(this.width / (nX + 2))
				let pX = this.width - nX * s
				let nY = Math.floor((this.height - pX) / (this.width - pX) * nX)
				let pY = this.height - nY * s */

				let pL = Math.ceil(pX / 2) - 0.5
				let pT = Math.ceil(pY / 2) - 0.5
				let pR = this.width - nX * s - pL
				let pB = this.height - nY * s - pT

				ctx.strokeStyle = 'lightgrey'
				ctx.beginPath()
				for (var x = pL; x <= this.width - pR; x += s) {
					ctx.moveTo(x, pT)
					ctx.lineTo(x, this.height - pB)
				}
				for (var y = pT; y <= this.height - pB; y += s) {
					ctx.moveTo(pL, y)
					ctx.lineTo(this.width - pR, y)
				}
				ctx.stroke()
			}
		},
  mounted() {
    // this.drawGrid()
  }
}
</script>

<style lang="css" scoped>
canvas {
  position: relative !important;
  border: lightgrey 1px solid;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
