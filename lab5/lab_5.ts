function getCurrentDate(): void {
    console.log(new Date().toISOString()); 
}

window.onload = () => {
    const timeInterval = setInterval(() => {
        getCurrentDate();
    }, 5000); 

    setTimeout(() => {
        clearInterval(timeInterval);
    }, 60000);
};
