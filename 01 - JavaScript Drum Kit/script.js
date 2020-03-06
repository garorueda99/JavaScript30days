
//Because this is placed on the top of HTML the key class are not found 
function load(){
    console.log('hello');
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    console.log (keys);

}

window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); // jquery = key.addClass('playing')
});


function removeTransition(e){
    ; //Many events at the time
    if(e.propertyName !== 'transform') return; //because transform is the longest
    this.classList.remove('.playing');
    console.log('papi papi')
}; 
