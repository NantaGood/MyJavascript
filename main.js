const output = document.getElementById("output");

for (let x = 1; x < 9; x++){
    let dot = "";
    for (let y = 0; y<x; y++) {
        dot += "*";
    }

    output.textContent += dot + "\n";
    output.innerHTML += dot + "<br>\n"
}