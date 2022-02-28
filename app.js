const container = document.querySelector('.container');

function makeGrid(number) {
  for(let r = 0; r < number; r++){
    const row = document.createElement("div")
      for(let c = 0; c < number; c++) {
        const cell = document.createElement("div")
        row.appendChild(cell).className = "cell";
      }
      container.appendChild(row).className = "row";
  }
}
makeGrid(16);

const cell = document.querySelector('.cell');

cell.addEventListener("mouseover", function( e ) {
  e.target.style.color = "orange";

});
