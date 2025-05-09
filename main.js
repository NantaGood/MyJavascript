const textMyCanvas = document.getElementById("my-canvas");
const textM = textMyCanvas.getContext("2d");
const colorM = textM.createLinearGradient(0, 0, 200, 0);
const imgM = document.getElementById("my-img");

imgM.onload = () => {
// textM.fillStyle = "blue";
// textM.fillRect(0, 0, textMyCanvas.width, textMyCanvas.height);
textM.drawImage(imgM,10,10);

// textM.font = "20px Arial"
// textM.fillStyle = "red";

// textM.fillText("สวัสดี Canvas!", 50, 75);
};