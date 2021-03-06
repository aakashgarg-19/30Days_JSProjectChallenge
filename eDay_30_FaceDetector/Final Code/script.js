// DOM Element
let video = document.getElementById("video");
let model;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Utility Function

const setUpCamera = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: { width: 600, height: 400 },
      audio: false,
    })
    .then((stream) => {
      video.srcObject = stream;
    });
};
const detectFaces = async () => {
  const prediction = await model.estimateFaces(video, false);
  ctx.drawImage(video, 0, 0, 600, 400);
  prediction.forEach((e) => {
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "rgb(255, 80, 80)";
    ctx.rect(
      e.topLeft[0],
      e.topLeft[1],
      e.bottomRight[0] - e.topLeft[0],
      e.bottomRight[1] - e.topLeft[1]
    );
    ctx.stroke();
    ctx.fillStyle = "rgb(255, 80, 80)";
    e.landmarks.forEach((landmark) => {
      ctx.fillRect(landmark[0], landmark[1], 5, 5);
    });
  });
};

document.getElementById("btn").addEventListener("click", () => {
  // For Closing of Camera
  if (document.getElementById("btn").innerHTML == "Close Webcam") {
    canvas.style.display = "none";
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    tracks.forEach((track) => track.stop());
    document.getElementById("btn").innerHTML = "Open Webcam";
  }
  // For Opening of Camera
  else if (document.getElementById("btn").innerHTML == "Open Webcam") {
    document.getElementById("btn").innerText = "Wait for a few seconds...";
    setUpCamera();
    video.addEventListener("loadeddata", async () => {
      canvas.style.display = "block";
      model = await blazeface.load();
      setInterval(detectFaces, 40);
      await sleep(1000);
      document.getElementById("btn").innerText = "Close Webcam";
    });
  }
});

const sleep = (milliseconds) => {
  console.log("sleep for 100 sec in case of slow system");
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
