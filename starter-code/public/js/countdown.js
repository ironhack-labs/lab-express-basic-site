// const deadLine = new Date("Aug 10, 2018 17:00:00").getTime();


// let x = setInterval(function() {

//     let now = new Date().getTime();

//     let howMuchLeft = deadLine - now;

//     let days = Math.floor(howMuchLeft / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((howMuchLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((howMuchLeft % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((howMuchLeft % (1000 * 60)) / 1000);

//     document.getElementById("tour-date").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//     if (howMuchLeft < 0) {
//         clearInterval(x);
//         document.getElementById("tour-date").innerHTML = "Time out";
//     }
// }, 1000);



class Counter {
    constructor(deadline) {

        const deadLine = deadline ;
        let now = new Date().getTime();

        let howMuchLeft = deadLine - now;

        this.days = Math.floor(howMuchLeft / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((howMuchLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((howMuchLeft % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((howMuchLeft % (1000 * 60)) / 1000);
    }

    timer() {
        setInterval(() => {
            document.getElementById("tour-date").innerHTML = `${this.days}d ${this.hours}h ${this.minutes}m ${this.seconds}s`;
        
            // if (howMuchLeft < 0) {
            //     clearInterval(x);
            //     document.getElementById("tour-date").innerHTML = "Time out";
            // }
        }, 1000);
    }

} 

let counter = new Counter(new Date("Aug 10, 2018 17:00:00").getTime());
counter.timer();
