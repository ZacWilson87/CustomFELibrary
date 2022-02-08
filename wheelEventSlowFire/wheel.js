//global variables

//This simulates the length of an Array
const countLength = 100;
//store
let count = 0;
let scrollTimer;
let lastScrollFireTime = 0;
document.addEventListener('wheel', function (e) {
    let now = new Date().getTime();
    let timeBetweenFire = 300;

    if (!scrollTimer) {
        if (now - lastScrollFireTime > timeBetweenFire) lastScrollFireTime = now;
        scrollTimer = setTimeout(function () {
            if (e.deltaY > 0) {
                count = count < countLength ? count + 1 : count;
                console.log('down', count);
            } else {
                count = count > 0 ? count - 1 : 0;
                console.log('up', count);
            }
            scrollTimer = null;
            lastScrollFireTime = new Date().getTime(); 
        }, timeBetweenFire);
    }

});