//Create empty tic-tac-toe boxes when loaded/reloaded
document.addEventListener("DOMContentLoaded", function() {
    let squares = document.querySelectorAll("#board div"); 

    squares.forEach(square => {
        square.className = "square";
    });

    console.log("Squares:", squares.length); 
    console.log("Class squares:", document.getElementsByClassName("square").length);

    
    //Variables
    const Xtext = "X"
    const Otext = "O"
    let currentPlayer = Xtext
    let stat = document.getElementById('status')
    let newBtn = document.getElementsByClassName('btn')[0]
    let spaces = Array(9).fill(null)
    console.log(spaces)
    //Winner checking variable
    const winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    //Functions
    //This checks if a player is a winner bassed on certain winning combinations
    function winnerCheck() {
        for (const condition of  winner) {
            let [a,b,c] = condition

            //checking if the letter at each winning pposiible position is the same
            if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
                return [a,b,c]
            }
        }
        return false
    }
     
    //What to do when a square is selected
    function selectedSquare(e) {
        const square = e.target
        const index = Array.from(squares).indexOf(square)
        console.log(e.target)

        if (!spaces[index]){
            e.target.innerText = currentPlayer
            spaces[index] = currentPlayer
            
            if(winnerCheck() !==false){
                stat.textContent = 'Congratulations! ' + currentPlayer + ' is the Winner!'
                stat.className = "you-won"

                return
            }
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

    function resetGame() {
        console.log("reseting game")
        spaces.fill(null)

        squares.forEach(square => {
            square.innerText = " "
            square.className = "square"
        })

        stat.textContent = "Move your mouse over a square and click to play an X or an O."
        stat.classList.remove("you-won")
        currentPlayer = Xtext
    }


//Event Listeners
squares.forEach((square) => {
    square.addEventListener('click', selectedSquare)
    square.addEventListener("mouseover", HoverOverSQ)
}
)

newBtn.addEventListener('click', resetGame)
})