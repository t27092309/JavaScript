var sv = new Object();
sv.hoTen = prompt("Ho ten: ");
sv.diem = prompt("Diem: ");
function hienthi() {
  if (this.diem >= 5) {
    this.hocLuc = "Dau";
  } else {
    this.hocLuc = "Truot";
  }
  document.write("<h3>Ho va ten: " + this.hoTen + "</h3>");
  document.write("<h3>Hoc luc: " + this.hocLuc + "</h3>");
  document.write("<h3>Diem: " + this.diem + "</h3>");
}
