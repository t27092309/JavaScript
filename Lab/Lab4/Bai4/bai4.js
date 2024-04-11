var now = new Date();
var h = now.getHours();
var m = now.getMinutes();
var s = now.getSeconds();
document.write(h + ":" + m + ":" + s);
setTimeout(function() {window.location.reload()}, 1000)