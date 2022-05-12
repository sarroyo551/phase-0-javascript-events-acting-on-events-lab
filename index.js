// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const test = dodger.style.bottom
    console.log(test);
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });




function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 10}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

function moveDodgerUp () {
    const upNumbers = dodger.style.bottom.replace("px", "");
    const up = parseInt(upNumbers, 10);

    if (up >= 0) {
        dodger.style.bottom = `${up + 10}px`
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
}) 

