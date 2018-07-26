var zuiXin = document.getElementById("zuixin")
var qiWen = document.getElementById("qiwen")
var lvXing = document.getElementById("lvxing")

zuiXin.addEventListener("click", function(){
	zuiXin.style.backgroundColor = "#6985A5"
	qiWen.style.backgroundColor = "red"
	lvXing.style.backgroundColor = "red"
}, false)
qiWen.addEventListener("click", function(){
	qiWen.style.backgroundColor = "#6985A5"
	zuiXin.style.backgroundColor = "red"
	lvXing.style.backgroundColor = "red"
}, false)
lvXing.addEventListener("click", function(){
	lvXing.style.backgroundColor = "#6985A5"
	qiWen.style.backgroundColor = "red"
	zuiXin.style.backgroundColor = "red"
}, false)