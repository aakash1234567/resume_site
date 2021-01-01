<template lang="html">
  <div class="contacttracker" >
    <h1 class="projhead"> <b>Contact Tracker</b> </h1>
    <div class="projcontent">
      <p> My team developed an app which runs in
          background of user’s phone.If two person with the app comes near to each other,
          the app detects it and stores the data of both the person, sends it to the database.
          Now this data can be viewed in the website and can be used by us
          to track the Covid19 chain if he/she is found positive.
            <!-- Button trigger modal -->
            <button v-b-modal.modal-multi-1 id="modbtn">Read More</button>
            <button v-b-modal.modal-multi-11 id="modbtnclk2" style="display:none">Read More</button>
            <b-modal id="modal-multi-11" centered  size="xl" hide-footer hide-header>
              <img :src="imgsrc" alt="" id="zoomimg">
            </b-modal>
            <b-modal id="modal-multi-1" size="xl" title="Contact Tracker" hide-footer>
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
                  style="text-shadow: 1px 1px 2px #333;align-items:center;justify-content:center"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    >
                    <template #img>
                      <img
                        width="1024"
                        height="520"
                        src="../../assets/contacttrack/img1.jpeg"
                        alt="image slot"
                        @click="zoom"
                      >
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide>
                    <template #img>
                      <img

                        width="500"
                        height="520"
                        src="../../assets/contacttrack/img2.jpeg"
                        alt="image slot"
                        @click="zoom"
                      >
                    </template>
                  </b-carousel-slide>
                </b-carousel>

                <!-- <p class="mt-4">
                  Slide #: {{ slide }}<br>
                  Sliding: {{ sliding }}
                </p> -->
                <h4 v-if='slide===0'> Process and Data Flow diagram</h4>
                <h4 v-if='slide===1'> Snapshot of Android App</h4>
                <p class="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              </div>
            </b-modal>
            </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'contacttracker',
  data() {
    return {
      slide: 0,
      sliding: null,
      imgsrc: ""
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    zoom(slide){
      console.log(slide.path[0].src)
      document.getElementById('modbtnclk2').click()
      this.imgsrc = slide.path[0].src
    }
  }
}
</script>

<style lang="scss" scoped>
/* <link href="" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"> */
// @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
#root .contacttracker{
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
#root #zoomimg{
  width: 100%
}
img {
  height:auto;
  width: 100%;
  background: black;
  cursor:zoom-in;
}
</style>
