var imgPrc = document.getElementById("prc")
var content = document.getElementById("list")
var jsLisArr = content.getElementsByTagName("li")
var jsLunbo = document.getElementById("luanbo")
var jsLeft = document.getElementById("le")
var jsRight = document.getElementById("ri")

jsLisArr[0].style.backgroundColor = "red"

var currentPage = 1

// set time
var timer = setInterval(startLoop, 1000)
function startLoop()
{
	currentPage++
	changePage()
}

function changePage() {
	if (currentPage == 6) {
		currentPage = 1;
	} else if (currentPage == 0) {
		currentPage = 5
	}
	imgPrc.src = "static/homepage/img/img" + currentPage + ".jpg"
	
	for (var i = 0; i < jsLisArr.length; i++) {
		jsLisArr[i].style.backgroundColor = "#aaa"
	}
	jsLisArr[currentPage-1].style.backgroundColor="red"
}

// mouse come in
jsLunbo.addEventListener("mouseover", overFunc, false)
function overFunc() {
	clearInterval(timer)
	// display bunt
	jsLeft.style.display = "block"
	jsRight.style.display = "block"
	
}
jsLunbo.addEventListener("mouseout", outFunc, false)
function outFunc() {
	timer = setInterval(startLoop, 1000)
	
	//undisplay bunt
	jsLeft.style.display = "none"
	jsRight.style.display = "none"
}

jsLeft.addEventListener("mouseover", deep, false)
jsRight.addEventListener("mouseover", deep, false)
function deep() {
	this.style.backgroundColor = "rgba(0,0,0,0.6)"
}

jsLeft.addEventListener("mouseout", nodeep, false)
jsRight.addEventListener("mouseout", nodeep, false)
function nodeep() {
	this.style.backgroundColor = "rgba(0,0,0,0.2)"
}

jsLeft.addEventListener("click", function() {
	currentPage--
	changePage()
}, false)
jsRight.addEventListener("click", function() {
	currentPage++
	changePage()
}, false)

// come in clicle
for (var i = 0; i < jsLisArr.length; i++) {
	jsLisArr[i].addEventListener("mouseover", function(){
		currentPage = parseInt(this.innerHTML)
		changePage()
	},false)
}
