const color = document.getElementById("color");
const btn = document.getElementById("btn");

const colors = [
	1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"
]

btn.addEventListener("click", function() {
	let hex = "#";

	for (let i = 0; i < 6; i++){
		const randomData = generatRandomData();
		hex += colors[randomData];
	}
	
	console.log(hex)
	document.body.style.background = hex;
	color.innerText = hex;
})

function generatRandomData() {
	return Math.floor(Math.random() * colors.length);
}