document.querySelector("#meteo-link").href = `http://${
    new URL(window.location.href).hostname
}:5000/`;
