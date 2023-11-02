document
    .querySelector("#background-video")
    .querySelector("source").src = `/videos/${
    Math.floor(Math.random() * (6 - 1 + 1)) + 1
}.mp4`;
