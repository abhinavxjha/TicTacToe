let Boxes = document.querySelectorAll('.box');
let turnO = true;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const msgContainer = document.querySelector('.msg-container');
const msg = document.querySelector('.msg');
const subtitle = document.querySelector('.subtitle h3');

Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText="O";
            box.style.color="rgb(197, 88, 0)";
            turnO = false;
            subtitle.innerText = "Player X's Turn";
        } 
        else {
            box.innerText="X";
            box.style.color="rgb(19, 19, 53)";
            turnO = true;
            subtitle.innerText = "Player O's Turn";
        }
        box.disabled = true;
        checkWinner();
    
    });
});

const disableBoxes = () => {
    for (let box of Boxes) {
        box.disabled = true;
    }
};

const showwin = (winner) => {
    msg.innerText = `Winner Winner "Player ${winner}" Got the Chicken Dinner!`;
    msgContainer.classList.remove("hide");
    subtitle.classList.add("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of win) {
        let box1 = Boxes[pattern[0]].innerText;
        let box2 = Boxes[pattern[1]].innerText;
        let box3 = Boxes[pattern[2]].innerText; 

        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 == box2 && box2 == box3) {
                console.log("Winner", box1);
                showwin(box1);
            }   
        }
    }
};
