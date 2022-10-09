
document.addEventListener('DOMContentLoaded', function(){

    const win_combins = [ //all possible positions to win
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,5,6],
        [0,3,6],
        [2,5,8],
        [1,4,7]
    ]

    let player = "X"
    let placements = [];

    const board = document.querySelector("#board");
    const boxes = document.querySelectorAll("#board div");
    let status = document.querySelector("#status");

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

            if (player == "X"){
                box.classList.add("X")
            }
            else{
                box.classList.add("O");
            }

            box.innerHTML = player;
            

            placements.push(player);
            console.log(placements);

            switch_player()
            status.innerHTML= `${player}'s turn`

            
            
        }, {once: true}) //once ensures that the player can only click 1 square at a time
    })

        
    
})