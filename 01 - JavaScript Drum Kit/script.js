
//Because this is placed on the top of HTML the key class are not found 
window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); // jquery = key.addClass('playing')
})



function load(){
    //console.log('hello');
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    keys.forEach(key => key.addEventListener('click', e => {
        key.classList.remove('playing');
    }));
    
    //console.log (keys);
}


function removeTransition(e){
        if(e.propertyName !== 'transform') return; //because transform is the longest
        //console.log(this);
        this.classList.remove('playing');
}; 
