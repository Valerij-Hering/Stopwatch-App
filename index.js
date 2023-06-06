//show timer
const hours = document.querySelector('.hours');
const colonHours = document.querySelector('.colonHours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');

//buttons
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnLapActiv = document.querySelector('.btnLapActiv');
const btnReset = document.querySelector('.btnReset');

//boxButtons
const boxBtnStart = document.querySelector('.boxBtnStart');
const boxBtnStop = document.querySelector('.boxBtnStop');
const boxBtnLap = document.querySelector('.boxBtnLap');
const boxBtnLapActiv = document.querySelector('.boxBtnLapActiv');
const boxBtnReset = document.querySelector('.boxBtnReset');

//laps
const boxLapHeader = document.querySelector('.boxLapHeader');
const containerLap = document.querySelector('.containerLap');


//Clock
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const scLap = document.querySelector('#scLap');
const clockTime = document.querySelector('.clockTime');

let secClock = 0;
let minClock = 0;
const deg = 6;
const degMin = 12;

//timer started
let ms = 0;
let sec = 0;
let min = 0;
let hrs = 0;
numberLap = 0;
numberLapHeader = 1;


function calculaterTime(){
    
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    

    if(hrs >= 1){
        hours.style.display = 'block';
        colonHours.style.display = 'block';
    }
    else{
        hours.style.display = 'none';
        colonHours.style.display = 'none';
    }

    //(hrs >= 1 ? hours.style.display = 'block' : hours.style.display = 'none');
    
    seconds.textContent = `${(sec > 9 ? sec : "0" + sec)}`; 
    minutes.textContent =`${(min > 9 ? min : "0" + min)}`;
    hours.textContent = `${(hrs)}`;

    
    
    let ssClock = sec * deg;
    sc.style.transform = `rotateZ(${ssClock}deg)`;

    let mmClock = min * degMin;
    mn.style.transform = `rotateZ(${mmClock}deg)`;
}

function msTimer(){
    ms++;
    if (ms >= 99){
        ms = 0;
    }
    milliseconds.textContent = `${(ms > 9 ? ms : "0" + ms)}`;
    clockTime.innerHTML =`<p>${(min > 9 ? min : "0" + min)}:${(sec > 9 ? sec : "0" + sec)}<span class="comaClock">,</span>${(ms > 9 ? ms : "0" + ms)}</p>`;
}

//timer - boxLapHeader
let msLap = 0;
let secLap = 0;
let minLap = 0;
let hrsLap = 0;

function calculaterTimeLap(){
    secLap ++;
        if (secLap >= 60) {
            secLap = 0;
            minLap++;
        }
        if (minLap >= 60) {
            minLap = 0;
            hrsLap++;
        }
    


    
}

function msTimerLap(){
    msLap++;
    if (msLap >= 99) {
        msLap = 0;
    }

    if(hrs >= 1){
        boxLapHeader.innerHTML = `<span>Lap ${numberLapHeader}</span>` + `<span>${(hrsLap)}:${(minLap > 9 ? minLap : "0" + minLap)}:${(secLap > 9 ? secLap : "0" + secLap)},${(msLap > 9 ? msLap : "0" + msLap)}</span>`;
    }
    else{
        boxLapHeader.innerHTML = `<span>Lap ${numberLapHeader}</span>` + `<span>${(minLap > 9 ? minLap : "0" + minLap)}:${(secLap > 9 ? secLap : "0" + secLap)},${(msLap > 9 ? msLap : "0" + msLap)}</span>`;
    }

    let ssLapClock = secLap * deg;
    scLap.style.transform = `rotateZ(${ssLapClock}deg)`;
}

//button control
btnStart.addEventListener('click', function(){
    let timerMs = setInterval(msTimer,10);
    let timerId = setInterval(calculaterTime, 1000);
    let timerMsLap = setInterval( msTimerLap,10);
    let timerIdLap = setInterval(calculaterTimeLap, 1000);
    boxBtnReset.style.display = 'none';
    boxBtnStart.style.display = 'none';
    boxBtnStop.style.display = 'block';
    boxBtnLap.style.display = 'none';
    boxBtnLapActiv.style.display = 'block';
    boxLapHeader .style.color = '#fff';

    btnStop.addEventListener('click', function(){
        clearInterval(timerMs);
        clearInterval(timerId);
        clearInterval(timerMsLap);
        clearInterval(timerIdLap);
        boxBtnStop.style.display = 'none';
        boxBtnStart.style.display = 'block';
        boxBtnLap.style.display = 'none';
        boxBtnLapActiv.style.display = 'none';
        boxBtnReset.style.display = 'block';
    })
})


btnLapActiv.addEventListener('click', function(){
    

    numberLap += 1;
    numberLapHeader += 1;

    const item = document.createElement('div');

    if(hrs >= 1){
        item.innerHTML =`<span>Lap ${numberLap}</span>` + `<span>${(hrsLap)}:${(minLap > 9 ? minLap : "0" + minLap)}:${(secLap > 9 ? secLap : "0" + secLap)},${(msLap > 9 ? msLap : "0" + msLap)}</span>`;
    }
    else{
        item.innerHTML =`<span>Lap ${numberLap}</span>` + `<span>${(minLap > 9 ? minLap : "0" + minLap)}:${(secLap > 9 ? secLap : "0" + secLap)},${(msLap > 9 ? msLap : "0" + msLap)}</span>`;
    }
    

    item.classList.add('lapAdded')
    containerLap.appendChild(item);

    msLap = 0;
    secLap = 0;
    minLap = 0;
    hrsLap = 0;

    btnReset.addEventListener('click', function(){
        ms = 0;
        sec = 0;
        min = 0;
        hrs = 0;
        numberLap = 0;

        milliseconds.textContent = `${(ms > 9 ? ms : "0" + ms)}`;
        seconds.textContent = `${(sec > 9 ? sec : "0" + sec)}`;
        minutes.textContent =`${(min > 9 ? min : "0" + min)}`;
        hours.textContent = `${(hrs)}`;

        hours.style.display = 'none';
        colonHours.style.display = 'none';

        msLap = 0;
        secLap = 0;
        minLap = 0;
        hrsLap = 0;
        numberLapHeader = 1;

        boxLapHeader.innerHTML = `<span>Lap ${numberLapHeader}</span>` + `<span>${(minLap > 9 ? minLap : "0" + minLap)}:${(secLap > 9 ? secLap : "0" + secLap)},${(msLap > 9 ? msLap : "0" + msLap)}</span>`;

        boxBtnStop.style.display = 'none';
        boxBtnLapActiv.style.display = 'none';
        boxBtnReset.style.display = 'none';
        boxBtnStart.style.display = 'block';
        boxBtnLap.style.display = 'block';
        containerLap.removeChild(item);
        boxLapHeader .style.color = '#666';
    })
})


btnReset.addEventListener('click', function(){
    ms = 0;
    sec = 0;
    min = 0;
    hrs = 0;
    numberLap = 0;

    milliseconds.textContent = `${(ms > 9 ? ms : "0" + ms)}`;
    seconds.textContent = `${(sec > 9 ? sec : "0" + sec)}`;
    minutes.textContent =`${(min > 9 ? min : "0" + min)}`;
    hours.textContent = `${(hrs)}`;

    hours.style.display = 'none';
    colonHours.style.display = 'none';

    msLap = 0;
    secLap = 0;
    minLap = 0;
    hrsLap = 0;
    numberLapHeader = 1;

    boxLapHeader.innerHTML = `<span>Lap 1</span>` + `<span>00:00,00</span>`;
    boxLapHeader .style.color = '#666';
    boxBtnStop.style.display = 'none';
    boxBtnLapActiv.style.display = 'none';
    boxBtnReset.style.display = 'none';
    boxBtnStart.style.display = 'block';
    boxBtnLap.style.display = 'block';

    clockTime.innerHTML =`<p>${(min > 9 ? min : "0" + min)}:${(sec > 9 ? sec : "0" + sec)}<span class="comaClock">,</span>${(ms > 9 ? ms : "0" + ms)}</p>`;

    secClock = 0;
    minClock = 0;
    secClockLap = 0;
    mn.style.transform = `rotateZ(0deg)`;
    sc.style.transform = `rotateZ(0deg)`;
    scLap.style.transform = `rotateZ(0deg)`;
})


//Carousel
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
