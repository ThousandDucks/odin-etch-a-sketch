
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