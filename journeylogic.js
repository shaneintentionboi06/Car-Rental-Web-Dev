/* --- INTERACTIVE VIDEO LOGIC --- */

const heroVideo = document.querySelector(".Herovideo");
const startBtn = document.getElementById("start");
const heroUI = document.querySelector(".hero-text"); // The Title
const btnContainer = document.querySelector(".button"); // The Button Wrapper

// Configuration
const pauseTime = 4.0; // Stop here (in seconds)
let hasStarted = false; // Tracks if user clicked start

heroVideo.addEventListener("timeupdate", () => {
    // If we haven't started yet, and video hits the pause time...
    if (!hasStarted && heroVideo.currentTime >= pauseTime) {
        heroVideo.pause();
        // Optional: If you want it to "idle" loop a specific section instead of hard pause:
        // heroVideo.currentTime = 2.0; 
        // heroVideo.play();
    }
});

startBtn.addEventListener("click", () => {
    hasStarted = true; // Unlock the video
    heroVideo.play();  // Resume playing
    
    // FADE OUT THE UI (Cinematic Effect)
    heroUI.style.transition = "opacity 1s ease";
    btnContainer.style.transition = "opacity 1s ease";
    
    heroUI.style.opacity = "100";
    btnContainer.style.opacity = "0";
    heroUI.classList.add('fadein')
    
    // Optional: Scroll down automatically after video finishes?
    heroVideo.addEventListener("ended", () => {
        document.getElementById("fleet").scrollIntoView({ behavior: "smooth" });
    });
});