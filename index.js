const color = document.getElementById("color");
const btn = document.getElementById("btn");

const colors = [
	"green","red","rgba(113,112,200)","#f15025"
]

btn.addEventListener("click", function() {
	const randomData = generatRandomData();

	document.body.style.background = colors[randomData];
	color.innerText = colors[randomData];
})

function generatRandomData() {
	return Math.floor(Math.random() * colors.length);
}