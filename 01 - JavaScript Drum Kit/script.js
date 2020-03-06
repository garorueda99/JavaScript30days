window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); // jquery = key.addClass('playing')
});

function removeTransition(e){
    // console.log(e); Many events at the time
    if(e.propertyName !== 'transform') return; //because transform is the longest
    this.classList.remove('.playing');

}; 


//Because this is placed on the top of HTML the key class are not found 
function readKeys () {
    const keys = document.querySelectorAll(".key")
    keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));
    console.log (keys);
};

// const keys = Array.from(document.querySelectorAll('.key'));

