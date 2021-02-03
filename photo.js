const canvas = document.querySelector("#canvas")

const ctx = canvas.getContext('2d')

class Doge {
    constructor(x,y,w,h) {
        this.x = x
        this.y = y 
        this.w = w
        this.h = h
        this.velocity = 3
        const img = new Image()
        img.addEventListener('load', ()=>{
            this.img = img
            this.draw()
        }) 
        img.src = "public/images/202371-dogecoin-mini-5816741625543626464.png"
    }

    draw() {
        ctx.drawImage(this.img,x,y,w,h)
    }
    moveR() {
        this.x +=5 
    }

    moveL() {
        this.x -=5
    }
}

const doge1 = new Doge(0,0,70,70)
const doge2 = new Doge(0,70,70,70)

function updateCanvas() {
    ctx.clearRect(0,0,1075,375)
    doge1.draw()
    doge2.draw()
}

