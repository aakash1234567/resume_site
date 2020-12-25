<template lang="html">
  <div class="aboutme">
    <br>
    <br>
    <div class="has-animation animation-ltr" data-delay="10">
      <p class="head"><b>Profile </b></p>
      <p class="content">A fast implementor with knowledge of Full-Stack Web development, Image and Video
        processing, Proteus. MBTI Profile – ENFJ.
        </p>
    </div>
    <div class="has-animation animation-rtl fulltab" data-delay="1000" >
      <div class="blk content" style="border:2px solid black">
        <p class="head" ><b>Education</b></p>
        <table class="blk content">
          <thead>
            <th><b> School/University:</b></th>
            <th><b>Rajasthan Technical University,Kota</b></th>
            <th style="border-right:none"><b> St. Paul’s Sr. Sec. School, Kota(Raj.)</b></th>
          </thead>
          <tbody>
            <tr>
              <td><b>Year:</b></td>
              <td>2017-21</td>
              <td>2017</td>
              <td style="border-top:2px solid black" >2015</td>
            </tr>
            <tr>
              <td><b>Class:</b> </td>
              <td>B. Tech (ECE) </td>
              <td>XII (Science/Math) </td>
              <td>X</td>
            </tr>
            <tr>
              <td><b>Board:</b> </td>
              <td>RTU</td>
              <td>CBSE </td>
              <td>CBSE </td>
            </tr>
            <tr>
              <td><b>%/CGPA:</b> </td>
              <td>8.5</td>
              <td>88.6</td>
              <td>9.2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="blk content" style="border:2px solid black">
        <p class="head"> <b>Internship</b> </p>
            <p> <b>eYantra IIT Bombay – Research Intern</b>  </p>
            <p>DATE 8 May – 27 June ,2020</p>
            <p>Research Intern - Email Automation </p>
            <p>Developed a desktop app with Vue-electron and Django framework for mailing
            services and semi-automating their time taking activities.
            </p>
      </div>
    </div>

    <div class="has-animation animation-ltr" data-delay="10">
      <p class="head"><b>ACHIEVEMENTS AND RESPONSIBILITIES</b> </p>
      <ul class="content" style="padding-left:4%">
        <li>e-Yantra Robotics competition, IIT Bombay DATE 15 Oct,2019 – 5 July,2020
            [3rd position ]</li>
        <li>MJF Code 19 Hackathon DATE 10 April – 13 April,2020 <br>
        The entry is recognized to be amongst the Top 250 entries submitted during the
        #MJFCODE19 Hackathon.</li>
        <li>IoT challenge Exhibition, Runner-up DATE 28 Feb – 1 March,2020</li>
        <li>Robowar,1st [ IGNUS’19, IIT Jodhpur]</li>
        <li>Rajya Puraskar, Scouts DATE 28 Feb – 1 March,2020
          The award was provided by governor of Rajasthan for outstanding performance
          in scouts.</li>
        <li>Robotics Club [Mentor, Active Member] DATE June 2018 – Present</li>
        <li>Developers Students Club [Core Team Member] DATE Sept. 2020 – Present</li>
        <li>Jr. Project Technical Assistant, e-Yantra, IIT Bombay DATE August 2020 – Present</li>
        <li>Campus Ambassador, e-Yantra, IIT Bombay DATE August 2020 – Present</li>
      </ul>
    </div>
    <!-- <div class="has-animation animation-ltr" data-delay="10">
      <p class="bigger">Reveal Animation </p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Aboutme',
  mounted() {
    document.addEventListener('onload', srt());

    function srt() {
      // console.log("here")
      var temp = document.querySelectorAll('.has-animation')
      console.log(temp)
      for (var i = 0; i < temp.length; i++) {
        task(i)
      }

      function task(i) {
      setTimeout(function() {
          temp[i].classList.add('animate-in')
      }, temp[i].getAttribute('data-delay'));
    }
    }
//     $(document).ready(function() {
//   $('.has-animation').each(function(index) {
//     $(this).delay($(this).data('delay')).queue(function(){
//       $(this).addClass('animate-in');
//     });
//   });
// });

  }
}
</script>

<style lang="scss" scoped>
// DEMO

$color-main: #0fe4d2;
$black: #202020;

.bigger {
  margin: 0;
  font-size: 60px;
  font-weight: 800;
  padding: 20px;
  text-transform: uppercase;
  color: $black;
  display: inline-block;
  position: relative;
}

.text {
  max-width: 600px;
  width: 100%;
  line-height: 24px;
  text-align: left;
  color: #404040;
  padding: 20px;
  &.txt-center {
    text-align: center;
  }
  a {
    color: $color-main;
  }
}

// ANIMATION

.has-animation {
  position: relative;
  p, img {
      opacity: 0;
  }
  &.animate-in {
    p, img {
      animation: textHidden 0.1s 1.1s forwards;
    }
    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      z-index: 10;
    }
    &:before {
      background-color: $color-main;
    }
    &:after {
      background-color: $black;
      animation-delay: .5s;
    }
  }
  &.animation-ltr.animate-in {
    &:before {
      animation: revealLTR 1.8s ease;
    }
    &:after {
      animation: revealLTR 1s .6s ease;
    }
  }
  &.animation-rtl.animate-in {
    &:before {
      animation: revealRTL 1.8s ease;
    }
    &:after {
      animation: revealRTL 1s .6s ease;
    }
  }
}

@keyframes revealRTL {
  0%{
    width: 0;
    right: 0;
  }
  65%{
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}

@keyframes revealLTR {
  0%{
    width: 0;
    left: 0;
  }
  65%{
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}




@keyframes textHidden {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>

<style lang="css">
  td{
    border-right: 2px solid black;
    border-left: 2px solid black;
    padding: 7px;
  }
  th{
    border-right: 2px solid black;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
  }
  .head{
    margin: 0;
    font-size: 5vmin;
    font-weight: 800;
    padding-right: 2em;
    color: white;
    position: relative;
  }
  .blk{
    background-color: transparent;
    flex: 25%;
    padding: 20px;
  }
  .content{
    margin: 0;
    font-size: 3vmin;
    font-weight: 650;
    padding: .7em;
    color: #1c1d1f;
    position: relative;
    height:80%;
  }
  #brdr{
    border-collapse:collapse;
  }
  .fulltab{
    height: fit-content;
    /* width:145vmin; */
    overflow:auto;
    resize:both;
    background:transparent;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
     gap: .2em;
     width: calc(100% - 0);
     display: flex;
     flex-wrap: wrap;
  }
  .aboutme{
    border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #37b998;
  background-color: #3884e8;
  }


/* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .blk {
    flex: 50%;
  }
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .fulltab {
    flex-direction: column;
  }
}
</style>
