window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){                                                                      
        return;
    }
    audio.currentTime=0;                               
    audio.play();
    key.classList.add("pressed"); 
});
    function rempressed(e) {
        if(e.propertyName != "transform"){
        return;
        }
        this.classList.remove("pressed");
    }
    const keys = document.querySelectorAll('.key');
    for(i=0; i<9; i++){
        keys[i].addEventListener('transitionend', rempressed)
    }