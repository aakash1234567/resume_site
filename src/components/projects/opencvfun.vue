<template lang="html">
  <div class="opencvfun" >
    <h1 class="projhead"> <b>Opencv Fun</b> </h1>
    <div class="projcontent">
      <p> Some Opencv fun projects made by me.First one is playing chrome dino game with Opencv using object detection and motion Detection
        in this case a pen. Another is making a human being invisible by detecting his/her skin color and then showing the borders
        in another frame.
            <!-- Button trigger modal -->
            <button v-b-modal.modal-multi-4 id="modbtn">Read More</button>

            <b-modal id="modal-multi-4" size="xl" title="Opencv Fun" hide-footer>
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="40000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="520"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide
                    >
                    <template #img>
                      <iframe src="https://www.youtube.com/embed/A7Od4vp37a4" width="100%" height="100%" allowfullscreen="true"></iframe>
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide
                    >
                    <template #img>
                      <iframe src="https://www.youtube.com/embed/__3-nF-aGL0" width="100%" height="100%" allowfullscreen="true"></iframe>
                    </template>
                  </b-carousel-slide>
                </b-carousel>

                <!-- <p class="mt-4">
                  Slide #: {{ slide }}<br>
                  Sliding: {{ sliding }}
                </p> -->
                <h4 v-if='slide===0'> Playing chrome dino game with object detection</h4>
                <h4 v-if='slide===1'> Trying to be Invisible</h4>
                <p class="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              </div>
            </b-modal>
            </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'opencvfun',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
/* <link href="" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"> */
// @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
#root .opencvfun{
  height: 100%;
  width: 100%;
  display: contents;
}
#root .projhead{
  margin: .4em;
}
#root .projcontent{
  margin: .4em;
}
#root p{
  font-size: 1.7vw;
}
#root #modbtn{
  height:fit-content;
  width:fit-content;
  border-radius: .7vmin;
  cursor: pointer;
  right:0%;
  border:none;
  margin-right: 3vmin;
  position: relative;
  background-color: #4CAF50;
  box-shadow: 2px 2px lightgreen;
}
#root #modbtn:hover{
  background-color: #46a049;
}
#root #modbtn:click{
  border: none;
}
.gallery{
  width:100%;
  justify: center;
}
.carousel-item{
  height: 55vmin;
}
img {
  height:inherit;
  width: inherit;
  background: black;
}
</style>
