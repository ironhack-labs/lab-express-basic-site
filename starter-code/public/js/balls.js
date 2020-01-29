const canvas = document.querySelector(`canvas`)
const ctx = canvas.getContext(`2d`)




const he = window.innerHeight*.85
const wi = window.innerWidth*.995
canvas.height = he
canvas.width = wi


console.log(he);
console.log(wi);


class  ball{
	constructor(){
		this.x = 0
		this.y = 0 
		this.alt= 80
		this.anch = 50
/*		this.img= new Image()
		this.img.src= `../images/face.png`
		this.img.onload = ()=>{
			this.draw()
		}*/
	}
	draw(){
			this.x=wi/2
			

			(this.y>=he)?this.y =he-this.alt:this.y++ 


		ctx.beginPath()
		// ctx.drawImage(this.img, this.x,this.y,this.alt, this.anch)
		ctx.arc(this.x, this.y, this.alt,0, 2*Math.PI,false)
		ctx.fillStyle = `blue`
		ctx.fill()

	}
}


const update = () =>{
	new ball().draw
}
setInterval(update, 1000/60)