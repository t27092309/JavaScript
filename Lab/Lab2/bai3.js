var weight = prompt("Nhap trong luong co the: ");
var height = prompt("Nhap chieu cao: ");

var result = weight / (height * height);

// alert(result);

if(result<18.5) {
    alert("Thieu can")
} else if (result>=18.5 && result<25){
    alert("Binh thuong")
} else if (result>=25 && result<29.99){
    alert("Thua can")
} else {
    alert("Beo phi")
}
