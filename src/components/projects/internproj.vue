<template lang="html">
  <div class="internproj" >
    <h1 class="projhead"> <b>Email Automation </b> </h1>
    <div class="projcontent">
      <p> Developed a desktop app with Vue-electron and Django
        framework for mailing services and semi-automating time
        taking activities of eYantra Lab Setup Initiative.
            <!-- Button trigger modal -->
            <button v-b-modal.modal-multi-7 id="modbtn">Read More</button>
            <button v-b-modal.modal-multi-77 id="modbtnclk7" style="display:none">Read More</button>
            <b-modal id="modal-multi-77" centered  size="xl" hide-footer hide-header>
              <img :src="imgsrc" alt="" id="zoomimg">
            </b-modal>
            <b-modal id="modal-multi-7" size="xl" title="Email Automation" hide-footer>
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
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    caption="Detailed Poster"
                    text="click to zoom">
                    <template #img>
                      <img
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="520"
                        src="../../assets/intrnproj/img1.png"
                        alt="image slot"
                        @click="zoom"
                      >
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide
                    caption="Snapshot">
                    <template #img>
                      <img
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="520"
                        src="../../assets/intrnproj/img2.png"
                        alt="image slot"
                        @click="zoom"
                      >
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide
                    caption="Snapshot">
                    <template #img>
                      <img
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="520"
                        src="../../assets/intrnproj/img3.png"
                        alt="image slot"
                        @click="zoom"
                      >
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide
                    caption="Snapshot">
                    <template #img>
                      <img
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="520"
                        src="../../assets/intrnproj/img4.png"
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
                <p class="my-4">Few process in eYantra lap setup initiative were time consuming and hectic like sending dynamic content mails to
                  multiple colleges, creating draft, announcement of workshops in specified colleges and selecting team for the
                  workshop conduction. To solve these problems we d</p>

              </div>
            </b-modal>
            </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'internproj',
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
      document.getElementById('modbtnclk7').click()
      this.imgsrc = slide.path[0].src

    }
  }
}
</script>

<style lang="scss" scoped>
/* <link href="" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"> */
// @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
#root .internproj{
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
  height:inherit;
  width: inherit;
  background: black;
  cursor:zoom-in;
}
</style>
