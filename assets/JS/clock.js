function userTime() {
    let today = new Date();
    let currentHour = today.getHours();
    let currentMinutes = today.getMinutes();
    let currentSeconds = today.getSeconds();
    let currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds;

    function readableHour() {
        if (currentHour <= 9) {
            return readableHour = ("0" + currentHour);
        } else {
            return readableHour = currentHour;
        }
    }

    function readableMinutes() {
        if (currentMinutes <= 9) {
            return readableMinutes = ("0" + currentMinutes);
        } else {
            return readableMinutes = currentMinutes;
        }
    }

    function readableSeconds() {
        if (currentSeconds <= 9) {
            return readableSeconds = ("0" + currentSeconds);
        } else {
            return readableSeconds = currentSeconds;
        }
    }

    console.log(readableMinutes());
    console.log(readableHour());
    console.log(readableSeconds());
    $('div.clockData').html(currentTime);
}

setInterval(userTime, 1000);
userTime();