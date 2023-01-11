// metronome
console.log("Setting up metronome");
const decreaseBtn = document.getElementById("minus");
const increaseBtn = document.getElementById("plus");
const bpmInput = document.getElementById("bpm");

var bpm = 60;

bpmInput.onchange = function (e) {
    if (isNaN(bpmInput.value)) {
        bpmInput.value = "50";
        bpm = 50;
    }
    else {
        bpm = parseInt(bpmInput.value);
    }
    console.log(bpm);
}

decreaseBtn.onclick = function (e) { bpm -= 5;}
increaseBtn.onclick = function (e) { bpm += 5;;}

