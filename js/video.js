function setVideoBackground() {
    document.querySelector(
        "#background-video"
    ).src = `https://cdn.jsdelivr.net/gh/bartekl1/MeteoHomepage@main/videos/${
        Math.floor(Math.random() * 7) + 1
    }.mp4`;
}

setTimeout(setVideoBackground, 100);
