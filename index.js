const video = document.getElementById('video')

navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: true,
  })
  .then((stream) => {
    video.srcObject = stream
  })
  .catch(console.error)
