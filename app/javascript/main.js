window.addEventListener('load', function () {
  const video = document.querySelector("#myVideo");
  video.autoplay = false;
  const btn = document.querySelector("#myBtn");

  console.log(video.paused)

  console.log(btn)
  console.log(video)
  function changeVideoState() {
    console.log(video.paused)
    console.log('click')
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }
  function changeVideoStatus() {
    console.log('click')
    if (video.paused) {
      btn.innerHTML = "Pause";
    } else {
      btn.innerHTML = "Play";
    }
  }



  btn.addEventListener('click', changeVideoState)
  video.addEventListener('click', changeVideoStatus)



})



