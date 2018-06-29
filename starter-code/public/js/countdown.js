class Counter {
    constructor(deadline) {
        this.deadLine = deadline ;
        this.days, this.hours, this.minutes, this.seconds = ''
        this.setTime()
    }

    howMuchLeft(){
        return this.deadLine - new Date().getTime() 
    }

    setTime(){
        this.setDays()
        this.setHours()
        this.setMinutes()
        this.setSeconds()
    }

    paintOnWindow() {
        document.getElementById("tour-date").innerHTML = `${this.days}d ${this.hours}h ${this.minutes}m ${this.seconds}s`;
    }

    timer() {
        setInterval(() => {
            this.setTime()
            this.paintOnWindow()
        }, 1000);
    }

    setDays(){
        this.days = Math.floor(this.howMuchLeft() / (1000 * 60 * 60 * 24));
    }

    setHours() {
        this.hours = Math.floor((this.howMuchLeft() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    setMinutes() {
        this.minutes = Math.floor((this.howMuchLeft() % (1000 * 60 * 60)) / (1000 * 60));
    }

    setSeconds() {
        this.seconds = Math.floor((this.howMuchLeft() % (1000 * 60)) / 1000);
    }

} 

let counter = new Counter(new Date("Aug 10, 2018 17:00:00").getTime());
counter.timer();
