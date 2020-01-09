
let space = document.querySelectorAll('.tile');
let Free = [0, 1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let cells = ['' ,'' ,'', '', '', '', '', '', '', '', '', '', '', '', '', ''];
class tile {
   constructor(cell, number, value) {
        this.cell = cell;
        this.number = number; 
        this.value = value;
   }
};

function GetFreeIndex(){ return Free.findIndex((v) => { return v != ''; })}
function GetRandomVal(){ return Math.random() > 0.49 ? 2 : 4;}
function GetRandomCell(){

    let freeElements = [];
    let counter = 0;
    let random = Math.random();

    cells.forEach((item, index) =>{
        if(item === ''){
            freeElements.push(index);
            counter++;
        }})

    let przedzial = 1/counter;
    for(let i = 1; i <= counter; i++)
    {
        if(random <= przedzial * i) return freeElements[i-1];
    }
}

 function CreateNewTile(x){
    return eval(`tile${x} = new tile(GetRandomCell(), x, GetRandomVal());`);
 }
 

//let tile1 = new tile(GRP(), GFN(), GRV());


// function colorBoard(){}
// tile.forEach((item, index) =>{
//     switch(tile[index].innerHTML)
//     {   
//         case '2': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '4': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '8': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '16': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '32': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '64': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '128': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '256': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '512': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '1024': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '2048': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '4096': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//         case '8192': 
//             tile[index].style.backgroundColor = "orange";
//         break;
//     }

//});

