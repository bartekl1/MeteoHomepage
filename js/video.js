document
    .querySelector("#background-video")
    .querySelector("source").src = `https://cdn.jsdelivr.net/gh/bartekl1/MeteoHomepage/videos/${
    Math.floor(Math.random() * 7) + 1
}.mp4`;
