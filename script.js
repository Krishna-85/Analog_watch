setInterval(function(){
    const secondsHand = document.querySelector('.second')
    const seconds = new Date().getSeconds()
    secondsHand.style.transform = `rotate(${seconds * 6}deg) translateY(-50%)`
}, 1000)
setInterval(function(){
    const minHand = document.querySelector('.min')
    const Minutes = new Date().getMinutes()
    minHand.style.transform = `rotate(${Minutes * 6}deg) translateY(-50%)`
}, 1000)
setInterval(() => {
    const hourHand = document.querySelector('.hour');
    const now = new Date();

    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();

    const rotation = (hours * 30) + (minutes * 0.5); // Simplified formula
    hourHand.style.transform = `rotate(${rotation}deg) translateY(-50%)`;
}, 1000);
