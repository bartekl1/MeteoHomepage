document
    .querySelector("#background-video")
    .querySelector("source").src = `/meteo/videos/${
    Math.floor(Math.random() * (7 - 1 + 1)) + 1
}.mp4`;
