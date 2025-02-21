//Create a stopwatch object that has four properties and three methods
const stopwatch = {
    type: "digital",
    currHour: 12,
    currMin: 56,
    currSec: 30,

    getTime() {
        return `${this.currHour}:${this.currMin}:${this.currSec}`;
    },

    setTime(hour, min, sec) {
        this.currHour = hour;
        this.currMin = min;
        this.currSec = sec;
    },

    display() {
        console.log(this.getTime());
    }
};

