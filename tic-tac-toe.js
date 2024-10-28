//Create empty tic-tac-toe boxes when loaded/reloaded
document.addEventListener("DOMContentLoaded", function() {
    let squares = document.querySelectorAll("#board div"); 

    squares.forEach(square => {
        square.className = "square";
    });

    console.log("Squares:", squares.length); 
    console.log("Class squares:", document.getElementsByClassName("square").length);


    let boxes = Array.from(document.getElementsByClassName('square'))
    
    //Adding 'X' or 'O' to box spaces
    const Xtext = "X"
    const Otext = "O"
    let currentPlayer = Xtext
    let spaces = Array(9).fill(null)
    console.log(spaces)

        
    function selectedSquare(e) {
        const square = e.target
        const index = Array.from(squares).indexOf(square)
        console.log(e.target)

        if (!spaces[index]){
            e.target.innerText = currentPlayer
            spaces[index] = currentPlayer

            if (currentPlayer == Xtext){
                e.target.innerText.className = "square X"
                currentPlayer = Otext
            }
            else if (currentPlayer == Otext){
                Otext.className = "square O"
                currentPlayer = Xtext
            }
        }
    }

    //Hovering over squares
    function HoverOverSQ(e) {
        const square = e.target
        const index = Array.from(squares).indexOf(square)

        if (!spaces[index]){
            square.classList.add('hover');

            square.addEventListener('mouseleave', () => {
                square.classList.remove('hover'); })
        }
    }



squares.forEach((square) => {
    square.addEventListener('click', selectedSquare)
    square.addEventListener("mouseover", HoverOverSQ)
}
)

})