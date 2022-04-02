let surfers = [];
function runWaveSurfer() {
  const shouldHiDef = document.getElementById("hi-def").checked || false;
  document.querySelectorAll(".wavesurfer").forEach((elem) => {
    const loader = document.createElement("p");
    loader.innerHTML = "Loading Audio...";
    elem.appendChild(loader);
    const ws = WaveSurfer.create({
      container: `#${elem.id}`,
    });
    ws.load(
      `https://calvin-web-mastering.s3.amazonaws.com/${elem.id}.${
        shouldHiDef ? "wav" : "mp3"
      }`
    );
    const button = elem.querySelector("#playpause");
    ws.once("ready", () => {
      elem.removeChild(loader);
      button.onclick = () => {
        ws.playPause();
      };
    });
    surfers.push(ws);
  });
}

const checkbox = document.getElementById("hi-def");
checkbox.addEventListener("change", () => {
  surfers.forEach((ws) => {
    ws.destroy();
  });
  runWaveSurfer();
});
runWaveSurfer();
