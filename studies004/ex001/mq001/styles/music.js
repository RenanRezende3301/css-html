document.getElementById('pauseButton').addEventListener('click', function() {
    var audio = document.getElementById('music');
    if (audio.paused) {
        audio.play();  
        this.textContent = 'stop';  
    } else {
        audio.pause();  
        this.textContent = 'play';
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('music');
    audio.volume = 0.1; 
});