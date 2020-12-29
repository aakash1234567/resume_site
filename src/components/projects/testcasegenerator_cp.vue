<template lang="html">
  <div class="homeautomation" >
    <h1 class="projhead"> <b>Smart Home Automation </b> </h1>
    <div class="projcontent">
      <p> Prepared a working model of Smart home automation which can be controlled by
          voice, website and Android app.Designed website for IoT project. Developed our own dynamic website for IoT which is used for giving instructions and
            controlling microcontroller from anywhere in the world.

            <!-- Button trigger modal -->
            <button v-b-modal.modal-xl id="modbtn">Read More</button>

            <b-modal id="modal-xl" size="xl" title="Smart Home Automation">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    caption="First slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=52"
                  ></b-carousel-slide>

                  <!-- Slides with custom text -->
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                  </b-carousel-slide>

                  <!-- Slides with image only -->
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                  <!-- Slides with img slot -->
                  <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                  <b-carousel-slide>
                    <template #img>
                      <img
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="480"
                        src="https://picsum.photos/1024/480/?image=55"
                        alt="image slot"
                      >
                    </template>
                  </b-carousel-slide>

                  <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                  <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                      a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                    </p>
                  </b-carousel-slide>
                </b-carousel>

                <p class="mt-4">
                  Slide #: {{ slide }}<br>
                  Sliding: {{ sliding }}
                </p>
                <p class="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              </div>
            </b-modal>
            </p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'homeautomation',
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
#root .homeautomation{
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
  position: absolute;
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
