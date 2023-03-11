let result = document.getElementById("result");

let show = document.getElementById("btn");

function showDegree() {
    let degree = document.getElementById("degree").value;

    if (degree >= 0 && degree <= 59) {
        result.innerText = "FAIL F";
    } else if (degree >= 60 && degree <= 62) {
        result.innerText = "PASS D-";
    } else if (degree >= 63 && degree <= 66) {
        result.innerText = "PASS D";
    } else if (degree >= 67 && degree <= 69) {
        result.innerText = "PASS D+";
    } else if (degree >= 70 && degree <= 72) {
        result.innerText = "PASS C-";
    } else if (degree >= 73 && degree <= 76) {
        result.innerText = "PASS C";
    } else if (degree >= 77 && degree <= 79) {
        result.innerText = "PASS C+";
    } else if (degree >= 80 && degree <= 82) {
        result.innerText = "PASS B-";
    } else if (degree >= 83 && degree <= 86) {
        result.innerText = "PASS B";
    } else if (degree >= 87 && degree <= 89) {
        result.innerText = "PASS B+";
    } else if (degree >= 90 && degree <= 92) {
        result.innerText = "PASS A-";
    } else if (degree >= 93  && degree <= 100) {
        result.innerText = "PASS A";
    } else {
        result.innerText = "UNDEFINED VALUE";
    }
}
