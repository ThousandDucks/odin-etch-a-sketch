// Create grid
const canvas = document.getElementById("canvas")
const rows = document.querySelectorAll(".row")

function createRow(rowNum) {
    for (let i=0; i<rowNum; i++) {
        let row = document.createElement("div")
         row.classList.add("row")
         canvas.appendChild(row)
    }
}

function createCol(colNum) {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        for (let j =0; j<colNum; j++) {
            let col = document.createElement("div")
            col.classList.add("col")
            row.append(col)

        }
    })
}

function createCells(rowNum, colNum) {
    createRow(rowNum)
    createCol(colNum)
}

createCells(16,16)

// Allow for colouring of grid
let currentColor = "black";
let mouseDown = false;

canvas.addEventListener("dragstart", (event) => {
event.preventDefault();
});

document.addEventListener("mousedown", () => {
    mouseDown = true;
})

document.addEventListener("mouseup", () => {
    mouseDown = false;
})

canvas.addEventListener("mouseover", (event) => {
    if (mouseDown && event.target.classList.contains("col")) {
        event.target.style.backgroundColor = currentColor;
    }
});

// Allows for single clicks
canvas.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = currentColor;
});

// Resizing and resetting grid
const resizeButton = document.querySelector("#resizeButton")
const resetButton = document.querySelector("#resetButton")

let gridSize = 16;

resizeButton.addEventListener("click", () => {
    let resizePrompt = Number(prompt("Enter the number of squares per side for the new grid (max 100):"))

    if (resizePrompt > 100 || resizePrompt < 1) {
        return;
    } else {
        gridSize = resizePrompt;
        canvas.innerHTML = "";
        createCells(resizePrompt, resizePrompt)
    }
})

resetButton.addEventListener("click", () => {
    canvas.innerHTML = "";
    console.log(gridSize)
    createCells(gridSize, gridSize)
})

// Add colouring option to buttons
const colourButton = document.querySelectorAll(".colourBtn")

colourButton.forEach(button => {
    button.addEventListener("click", () => {
        currentColor = button.style.backgroundColor;
    })
})
