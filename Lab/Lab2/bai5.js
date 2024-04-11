var a = prompt('nhap a');
var x = 10 + Math.round(5*Math.random());

if(a==x){
    alert('chuc mung ban nhap gia tri dung');
} else if(a>x){
    alert('ban nhap so lon hon');
} else{
    alert('ban nhap so nho hon');
}