<template lang="html">
  <div >
    <br>
    <br>
    <div class="has-animation animation-ltr" data-delay="10">
      <p class=""><b>Profile </b></p>
      <p>A fast implementor with knowledge of Full-Stack Web development, Image and Video
        processing, Proteus. MBTI Profile – ENFJ.
        </p>
    </div>
    <div class="has-animation animation-ltr" data-delay="10">
      <table>
        <thead>
          <th><b>EDUCATION</b></th>
          <th> <b>INTERNSHIP</b> </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="">
                <p>Rajasthan Technical University,Kota</p>
                <p>2017-21</p>
                <p>B. Tech (ECE) </p>
                <p>Board/University:RTU</p>
                <p>CGPA: 8.5</p>
              </div>
              <div class="">
                <p>St. Paul’s Sr. Sec. School, Kota(Raj.)</p>
                <p>2017 </p>
                <p>XII (Science/Math) </p>
                <p>Board: CBSE </p>
                <p>%: 88.6</p>
              </div>
              <div class="">
                <p>St. Paul’s Sr. Sec. School, Kota(Raj.)</p>
                <p>2015 </p>
                <p>X</p>
                <p>Board: CBSE </p>
                <p>CGPA: 9.2</p>
              </div>
            </td>
            <td>
              <div class="">
                <p>eYantra IIT Bombay – Research Intern </p>
                <p>DATE 8 May – 27 June ,2020</p>
                <p>Research Intern - Email Automation </p>
                <p>Developed a desktop app with Vue-electron and Django framework for mailing
                services and semi-automating their time taking activities.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="has-animation animation-ltr" data-delay="10">
      <p><b>ACHIEVEMENTS AND RESPONSIBILITIES</b> </p>
      <p>e-Yantra Robotics competition, IIT Bombay DATE 15 Oct,2019 – 5 July,2020
          [3rd position ]
          • MJF Code 19 Hackathon DATE 10 April – 13 April,2020
          The entry is recognized to be amongst the Top 250 entries submitted during the
          #MJFCODE19 Hackathon.
          • IoT challenge Exhibition, Runner-up DATE 28 Feb – 1 March,2020
          • Robowar,1st [ IGNUS’19, IIT Jodhpur]
          • Rajya Puraskar, Scouts DATE 28 Feb – 1 March,2020
          The award was provided by governor of Rajasthan for outstanding performance
          in scouts.
          • Robotics Club [Mentor, Active Member] DATE June 2018 – Present
          • Developers Students Club [Core Team Member] DATE Sept. 2020 – Present
          • Jr. Project Technical Assistant, e-Yantra, IIT Bombay DATE August 2020 – Present
          • Campus Ambassador, e-Yantra, IIT Bombay DATE August 2020 – Present
          </p>
    </div>
    <div class="has-animation animation-ltr" data-delay="10">
      <p class="bigger">Reveal Animation </p>
    </div>



    <div class="has-animation animation-rtl" data-delay="1000">
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div class="has-animation animation-ltr" data-delay="1500">
      <p class="text txt-center">V2 <a href="http://codepen.io/antho-fsy/pen/gWjJBQ">here</a> <br>
    Scroll Reveal Animation
      </p>
    </div>

    <div class="has-animation animation-rtl" data-delay="2000">
      <img src="https://images.prismic.io/figaroimmo/943be1d1-6e3a-4c59-a5f1-97ce8b6ea147_lyon-confinement.jpg?auto=compress,format&rect=0,0,1000,667&w=720&h=480" width="600" />
    </div>
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
<style media="screen" scoped>

/* ================ The Timeline ================ */

.timeline {
position: relative;
width: 660px;
margin: 0 auto;
margin-top: 20px;
padding: 1em 0;
list-style-type: none;
}

.timeline:before {
position: absolute;
left: 50%;
top: 0;
content: ' ';
display: block;
width: 6px;
height: 100%;
margin-left: -3px;
background: rgb(80,80,80);
background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);

z-index: 5;
}

.timeline li {
padding: 1em 0;
}

.timeline li:after {
content: "";
display: block;
height: 0;
clear: both;
visibility: hidden;
}

.direction-l {
position: relative;
width: 300px;
float: left;
text-align: right;
}

.direction-r {
position: relative;
width: 300px;
float: right;
}

.flag-wrapper {
position: relative;
display: inline-block;

text-align: center;
}

.flag {
position: relative;
display: inline;
background: rgb(248,248,248);
padding: 6px 10px;
border-radius: 5px;

font-weight: 600;
text-align: left;
}

.direction-l .flag {
-webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
-moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.direction-r .flag {
-webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
-moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.direction-l .flag:before,
.direction-r .flag:before {
position: absolute;
top: 50%;
right: -40px;
content: ' ';
display: block;
width: 12px;
height: 12px;
margin-top: -10px;
background: #fff;
border-radius: 10px;
border: 4px solid rgb(255,80,80);
z-index: 10;
}

.direction-r .flag:before {
left: -40px;
}

.direction-l .flag:after {
content: "";
position: absolute;
left: 100%;
top: 50%;
height: 0;
width: 0;
margin-top: -8px;
border: solid transparent;
border-left-color: rgb(248,248,248);
border-width: 8px;
pointer-events: none;
}

.direction-r .flag:after {
content: "";
position: absolute;
right: 100%;
top: 50%;
height: 0;
width: 0;
margin-top: -8px;
border: solid transparent;
border-right-color: rgb(248,248,248);
border-width: 8px;
pointer-events: none;
}

.time-wrapper {
display: inline;

line-height: 1em;
font-size: 0.66666em;
color: rgb(250,80,80);
vertical-align: middle;
}

.direction-l .time-wrapper {
float: left;
}

.direction-r .time-wrapper {
float: right;
}

.time {
display: inline-block;
padding: 4px 6px;
background: rgb(248,248,248);
}

.desc {
margin: 1em 0.75em 0 0;

font-size: 0.77777em;
font-style: italic;
line-height: 1.5em;
}

.direction-r .desc {
margin: 1em 0 0 0.75em;
}

/* ================ Timeline Media Queries ================ */

@media screen and (max-width: 660px) {

.timeline {
width: 100%;
padding: 4em 0 1em 0;
}

.timeline li {
padding: 2em 0;
}

.direction-l,
.direction-r {
float: none;
width: 100%;

text-align: center;
}

.flag-wrapper {
text-align: center;
}

.flag {
background: rgb(255,255,255);
z-index: 15;
}

.direction-l .flag:before,
.direction-r .flag:before {
position: absolute;
top: -30px;
left: 50%;
content: ' ';
display: block;
width: 12px;
height: 12px;
margin-left: -9px;
background: #fff;
border-radius: 10px;
border: 4px solid rgb(255,80,80);
z-index: 10;
}

.direction-l .flag:after,
.direction-r .flag:after {
content: "";
position: absolute;
left: 50%;
top: -8px;
height: 0;
width: 0;
margin-left: -8px;
border: solid transparent;
border-bottom-color: rgb(255,255,255);
border-width: 8px;
pointer-events: none;
}

.time-wrapper {
display: block;
position: relative;
margin: 4px 0 0 0;
z-index: 14;
}

.direction-l .time-wrapper {
float: none;
}

.direction-r .time-wrapper {
float: none;
}

.desc {
position: relative;
margin: 1em 0 0 0;
padding: 1em;
background: rgb(245,245,245);
-webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
-moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
box-shadow: 0 0 1px rgba(0,0,0,0.20);

z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
position: relative;
margin: 1em 1em 0 1em;
padding: 1em;

z-index: 15;
}

}

@media screen and (min-width: 400px ?? max-width: 660px) {

.direction-l .desc,
.direction-r .desc {
margin: 1em 4em 0 4em;
}

}
</style>
