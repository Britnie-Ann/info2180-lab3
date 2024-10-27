//Create empty tic-tac-toe boxes when loaded/reloaded
document.addEventListener("DOMContentLoaded", function() {
    let squares = document.querySelectorAll("#board div"); 

    squares.forEach(square => {
        square.className = "square";
    });
});

//To ensure all div boxes are accounted for
let squares2 = document.getElementsByClassName("square");
console.log(squares2);