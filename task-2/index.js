'use strict';

window.onload = function () {
    main();
}

function main () {
    const count = {
        red: 0,
        blue: 0,
        green: 0,
    };

    const panelsElements = document.querySelector('.wrapper'),
        redCounter = document.querySelector('.red'),
        greenCounter = document.querySelector('.green'),
        blueCounter = document.querySelector('.blue');

    panelsElements.addEventListener('click', (event) => {
        count[event.target.className]++;

        switch (event.target.className){
            case 'red':
                redCounter.textContent = count.red;
                break;
            case 'green':
                greenCounter.textContent = count.green;
                break;
            case 'blue':
                blueCounter.textContent = count.blue;
                break;
        }
    });
}