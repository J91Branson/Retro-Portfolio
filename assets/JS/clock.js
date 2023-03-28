function userTime() {
    let today = new Date();
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    $('div.clockData').html(currentTime);
}

setInterval(userTime, 1000);
userTime();