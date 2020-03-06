function random(number) {
    return Math.floor(Math.random() * (number+1));
    }
    
    function colorChange() {
        console.log('papi papi');
        const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.body.style.backgroundColor = rndCol;
    }

function load(){
    const btn = document.querySelector('button');

    

    btn.addEventListener('click', colorChange);

    
}