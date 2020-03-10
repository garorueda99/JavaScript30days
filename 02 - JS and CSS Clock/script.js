var totalSeconds = 0;
function setDate(){
    
    const secondHand = document.querySelector('.seconds-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    totalSeconds === 0 ? totalSeconds = seconds: totalSeconds += 1; 
    // console.log(`total ${totalSeconds} sec ${seconds}`);
    const secondsInDegrees = (360 /60) * totalSeconds;
    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesInDegrees = ((360 / 60) * (minutes+(seconds/60)) + 90);
    // console.log(`minutes ${minutesInDegrees}`);
    minsHand.style.transform = `rotate(${minutesInDegrees}deg)`;

    const hours = now.getHours();
    // console.log(hours);
    const hoursInDegrees = ((360 / 12) * (hours+(minutes/60)) +  90);
    // console.log(hoursInDegrees);
    hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;

    
}
setInterval(setDate, 1000);