function getCurrentDate() {
    console.log(new Date().toISOString());
}
window.onload = function () {
    var timeInterval = setInterval(function () {
        getCurrentDate();
    }, 5000);
    setTimeout(function () {
        clearInterval(timeInterval);
    }, 60000);
};
