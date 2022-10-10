
document.addEventListener('DOMContentLoaded', function(){

    // const win_combins = [ //all possible positions to win
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8],
    //     [0,4,8],
    //     [2,4,6],
    //     [0,3,6],
    //     [2,5,8],
    //     [1,4,7]
    // ]

    let gameState = true; //game running

    let player = "X" //default player is X
    let placements = []; //Empty array to store selctions

    const board = document.querySelector("#board");
    const boxes = board.querySelectorAll("div");
    const status = document.querySelector("#status");

    let controls = document.querySelector(".controls" )
    const newGame = controls.querySelector('.btn');



    function switch_player(){ //switches players
        if (player=="X"){
            player = "O"
        }
        else{
            player = "X"
        }
    }


    boxes.forEach(function(box, index){
        box.classList.add('square'); // layout



        box.addEventListener("mouseover", () => { //hover in event
            box.style.cursor = "pointer";
            box.classList.add("hover");
        })

        box.addEventListener("mouseout",()=>{ //houver out event
            box.classList.remove("hover");
        });



        
        box.addEventListener("click", function(e){ //click event

            if (gameState == true){

                if (player == "X"){
                    box.classList.add("X")
                }
                else{
                    box.classList.add("O");
                }

                box.innerHTML = player;
                

                placements[index] = player //adding the selection to the same box number in the array 


                if (winner(index,player) == true){ 
                    gameState = false;
                    
                    status.classList.add("you-won");
                    status.innerHTML = `Congratulations! ${player} is the Winner!`;

                };
                
                switch_player()
            
            }
            
        })
        
        
    })



     function winner(index,player){
        //finding the winner from all possible winning combinations 


        if (index == 0){
            if((placements[1] == player && placements[2] == player) || 
            (placements[4]==player && placements[8]==player) || 
            (placements[3]==player && placements[6] == player)){
                return true;
            }
        }

        else if(index == 1){
            if((placements[0] == player && placements[2]==player) || 
            (placements[4]==player && placements[7]==player)){
                return true;
            }
        }

        else if(index == 2){
            if((placements[0] == player && placements[1]==player) || 
            (placements[4]==player && placements[6]==player) ||
            (placements[5] == player && placements[8] == player)){
                return true;
            }
        }

        else if(index == 3){
            if((placements[4] == player && placements[5] == player) ||
            (placements[0] == player && placements[6] == player)){
                return true;
            }
        }

        else if(index == 4){
            if((placements[3] == player && placements[5] == player) ||
            (placements[0] == player && placements[8] == player) ||
            (placements[2] == player && placements[6] == player)){
                return true;
            }
        }

        else if(index == 5){
            if((placements[3] == player && placements[4] == player) ||
            (placements[2] == player && placements[8] == player)){
                return true;
            }
        }

        else if(index == 6){
            if((placements[7] == player && placements[8] == player) ||
            (placements[2] == player && placements[4] == player) ||
            (placements[0] == player && placements[3] == player)){
                return true;
            }
        }

        else if(index == 7){
            if ((placements[6] == player && placements[8] == player) ||
            (placements[1] == player && placements[4] == player)){
                return true;
            }
        }

        else if(index == 8){
            if((placements[6] == player && placements[7] == player) ||
            (placements[0] == player && placements[4] == player) || 
            (placements[2] == player && placements[5] == player)){
                return true;
            }
        }

        return false; 
     };


     newGame.addEventListener("click", () => { //new game button
        
        boxes.forEach(box => {
            box.classList.remove("X")
            box.classList.remove("O")
            box.innerHTML="";

        
        });

        placements = [] //clear array

        status.classList.remove("you-won")
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."

        gameState = true; //restart game
        player = "X";

     })
        
    
})