const ToggleMute = document.querySelector(".mute-toggle");
const Video = document.querySelector(".Herovideo");

if (ToggleMute && Video){
    
    Video.muted = true;
    ToggleMute.classList.add('muted');
    ToggleMute.addEventListener("click", () => {

        Video.muted = !Video.muted;
    
        ToggleMute.classList.toggle("muted");


    
        const tooltip = document.querySelector(".mute-message");
        if(tooltip) tooltip.style.display = "none";


    
    });}

