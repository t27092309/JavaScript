let newWindow;
function openw() {
  newWindow = window.open(
    "https://www.youtube.com/",
    "toolBar =yes",
    "menuBar = yes",
    "width = 1000, height = 1000"
  );
}
function closew() {
  newWindow.close();
}
