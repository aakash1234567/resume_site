<template>
  <div class="home">
  <div class="welcomemsg" >
      <svg id="frame" width="100%" height="100%" viewBox="0 0 736 866" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M309.5 59C309.5 68.753 304.34 77.6171 295.93 84.0589C287.519 90.5011 275.878 94.5 263 94.5C250.122 94.5 238.481 90.5011 230.07 84.0589C221.66 77.6171 216.5 68.753 216.5 59C216.5 49.247 221.66 40.3829 230.07 33.9411C238.481 27.4989 250.122 23.5 263 23.5C275.878 23.5 287.519 27.4989 295.93 33.9411C304.34 40.3829 309.5 49.247 309.5 59Z" fill="#FFC1DF" stroke="#0B0A0A"/>
      <rect x="52" y="59" width="629" height="752" rx="16" fill="#331B32"/>
      <image id="pic" x="86" y="88" width="564" height="694" href="../assets/pic.jpeg"/>
      <rect x="134.038" y="5" width="55" height="184" transform="rotate(46.7581 134.038 5)" fill="#C4C4C4" fill-opacity="0.74"/>
      <rect x="698.038" y="699" width="55" height="184" transform="rotate(46.7581 698.038 699)" fill="#C4C4C4" fill-opacity="0.74"/>
      <path d="M309.5 19.5C309.5 24.8037 308.121 29.5819 305.918 33.0187C303.711 36.4611 300.723 38.5 297.5 38.5C294.277 38.5 291.289 36.4611 289.082 33.0187C286.879 29.5819 285.5 24.8037 285.5 19.5C285.5 14.1963 286.879 9.41809 289.082 5.98125C291.289 2.5389 294.277 0.5 297.5 0.5C300.723 0.5 303.711 2.5389 305.918 5.98125C308.121 9.41809 309.5 14.1963 309.5 19.5Z" fill="#FFC1DF" stroke="black"/>
      <path d="M240.5 19.5C240.5 24.8037 239.121 29.5819 236.918 33.0187C234.711 36.4611 231.723 38.5 228.5 38.5C225.277 38.5 222.289 36.4611 220.082 33.0187C217.879 29.5819 216.5 24.8037 216.5 19.5C216.5 14.1963 217.879 9.41809 220.082 5.98125C222.289 2.5389 225.277 0.5 228.5 0.5C231.723 0.5 234.711 2.5389 236.918 5.98125C239.121 9.41809 240.5 14.1963 240.5 19.5Z" fill="#FFC1DF" stroke="black"/>
      <ellipse cx="249" cy="48.5" rx="8" ry="9.5" fill="#232323"/>
      <ellipse cx="277" cy="49.5" rx="8" ry="9.5" fill="#232323"/>
      <ellipse cx="228.5" cy="23" rx="6.5" ry="12" fill="black"/>
      <ellipse cx="297.5" cy="23" rx="6.5" ry="12" fill="black"/>
      </svg>
      <div class="msg" style="margin-top:1em">
        <div class="elmsg"><h1>H</h1><h1>i</h1><h1>i</h1><h1>!</h1></div>
        <div class="elmsg"><h1>A</h1><h1>A</h1><h1>K</h1><h1>A</h1><h1>S</h1><h1>H</h1></div>
        <!-- <div class="elmsg"><h1>K</h1><h1>H</h1><h1>A</h1><h1>N</h1><h1>D</h1><h1>E</h1><h1>L</h1><h1>W</h1><h1>A</h1><h1>L</h1></div> -->
      </div>
      <div class="" style="" >
        <a href="https://www.linkedin.com/in/aakash-khandelwal-a700ab172/" target="_blank" >
          <img id="socialicon" style="margin-right:.5em;margin-top:1em;transition:all 0.3s ease;" align="left" alt="Aakash Khandelwal LinkedIn" width="30em" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
        </a>
        <a href="https://github.com/aakash1234567" target="_blank">
          <img id="socialicon" style="margin-right:.5em;margin-top:1em;transition:all 0.3s ease;" align="left" alt="Aakash's Github" width="30em" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
        </a>
        <a href="https://www.codechef.com/users/aakash_20" target="_blank">
          <img id="socialicon" style="margin-right:.5em;margin-top:1em;transition:all 0.3s ease;" align="left" alt="Aakash's Codechef" width="30em" src="https://cdn.jsdelivr.net/npm/simple-icons@3.12.1/icons/codechef.svg" />
        </a>
        <a href="https://www.hackerrank.com/Aakashkhandelwa1" target="_blank">
          <img id="socialicon" style="margin-right:.5em;margin-top:1em;transition:all 0.3s ease;" align="left" alt="Aakash's HackerRank" width="30em" src="https://cdn.jsdelivr.net/npm/simple-icons@3.12.1/icons/hackerrank.svg" />
        </a>
      </div>
  </div>
  <div class="abt">
    <Aboutme />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Aboutme from '@/components/aboutme.vue'
export default {
  name: 'Home',
  components: {
    Aboutme
  },
}
</script>
<style media="screen">
@import url('https://fonts.googleapis.com/css2?family=Changa&display=swap');
#root  .home{
    position: absolute;
    padding-left: 6em;
    height: 100%;
    width:100%;
    /* border: 2px solid green; */
  }
  #root .welcomemsg{
    /* border:2px solid black; */
    /* height:15em;
    width:24em;*/
    width: 16%;
    float:left;
    margin-top: 2%;

  }

  @media screen and (min-width: 500px) {
  #root h1 {
      font-size: 3.3vmin;
    }
  }
  @media screen and (min-width: 700px) {
  #root h1 {
      font-size: 4vmin;
    }
  }
  @media screen and (min-width: 900px) {
  #root h1 {
      font-size: 5.2vmin;
    }
  }
  /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 500px) {
    #root h1 {
      font-size: 2.7vmin;
    }
  }
  #root .welcomemsg h1{
    /* font-size: 4.7vmin; */
    padding-right: .05em;
    margin:0;
    font-family: 'Changa', sans-serif;
    /* text-transform: uppercase; */
    font-weight: bold;
    text-decoration-color: black;
    transition:all 0.3s ease;
    height: fit-content;
    display: inline-block;
    width: -moz-fit-content;
  width: fit-content;
  }
  #root .msg{
    top: 10%;
    height: fit-content;
    width:fit-content
  }
#root  .welcomemsg h1:hover{
    -webkit-transform: scaleY(0.7);
        -ms-transform: scaleY(0.7);
        transform: scaleY(0.7);
  }
  #root .elmsg{
    padding:0;
    margin: 0;
    height: fit-content;
    position: relative;
  /* width: 30%; */
  }

  #frame{
    padding:0;
    margin: 0;
    /* height: fit-content; */
  /* width: 30%; */
  }
  #root .abt{
    /* border: 2px solid black; */
    float:right;
    height: 100%;
    width:77%;
    margin-right: 3%;
  }
  #socialicon:hover{
    transform: scale(1.5);
  }

</style>
