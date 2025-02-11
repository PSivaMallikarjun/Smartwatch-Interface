document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("call").addEventListener("click", () => alert("Dialing a call..."));
    document.getElementById("video-call").addEventListener("click", () => alert("Starting video call..."));
    document.getElementById("notifications").addEventListener("click", () => alert("Showing notifications..."));
    document.getElementById("alarm").addEventListener("click", () => alert("Opening alarm settings..."));
    document.getElementById("clock").addEventListener("click", () => alert("Displaying current time..."));
    document.getElementById("timer").addEventListener("click", () => alert("Starting timer..."));
    document.getElementById("stopwatch").addEventListener("click", () => alert("Stopwatch activated..."));
    document.getElementById("weather").addEventListener("click", () => alert("Fetching weather updates..."));
    document.getElementById("heartbeat").addEventListener("click", () => alert("Monitoring heartbeat..."));
    document.getElementById("steps").addEventListener("click", () => alert("Tracking steps and calories..."));
    document.getElementById("bluetooth").addEventListener("click", () => alert("Connecting via Bluetooth..."));
    document.getElementById("air-quality").addEventListener("click", () => alert("Fetching Air Quality Index..."));
});
