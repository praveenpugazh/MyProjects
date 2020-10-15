const strapBtn = document.querySelectorAll(".strap");
const bands = document.querySelectorAll(".bands");
const fbtn = document.querySelectorAll(".fbtn");
const heartRate = document.querySelector(".watch-heartrate");
const displayTime = document.querySelector(".watch-display");

function clock() {
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    if (h / 10 < 1) {
        hours.innerHTML = "0" + h + ":";
    } else {
        hours.innerHTML = h + ":";
    }
    if (m / 10 < 1) {
        minutes.innerHTML = "0" + m + ":";
    } else {
        minutes.innerHTML = m + ":";
    }
    if (s / 10 < 1) {
        seconds.innerHTML = "0" + s;
    } else {
        seconds.innerHTML = s;
    }
}

var interval = setInterval(clock, 1000);

strapBtn.forEach(item => {
    item.addEventListener('click', function (e) {
        const btn = e.currentTarget;
        if (btn.classList.contains('red-btn')) {
            bands.forEach(band => {
                if (band.classList.contains('black') || band.classList.contains('blue')) {
                    band.classList.remove("blue");
                    band.classList.remove("black");
                    band.classList.add("red");
                } else {
                    band.classList.toggle("red");
                }
            });
            console.log('red');
        };
        if (btn.classList.contains('blue-btn')) {
            bands.forEach(band => {
                if (band.classList.contains('black') || band.classList.contains('red')) {
                    band.classList.remove("red");
                    band.classList.remove("black");
                    band.classList.add("blue");
                } else {
                    band.classList.toggle("blue");
                }
            });
            console.log('blue');
        };
        if (btn.classList.contains('black-btn')) {
            bands.forEach(band => {
                if (band.classList.contains('red') || band.classList.contains('blue')) {
                    band.classList.remove("red");
                    band.classList.remove("blue");
                    band.classList.add("black");
                } else {
                    band.classList.toggle("black");
                }
            });
            console.log('black');
        };
    });

});

fbtn.forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.classList.contains('heartrate')) {
            heartRate.classList.toggle('show');
        } else {
            heartRate.classList.remove('show');
        }
    })
})


clock();