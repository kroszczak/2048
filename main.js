let space = document.querySelectorAll('.tile');
let counter;
const una = [];
const Free = [true, true ,true, true, true, true, true, true, true, true, true, true, true, true, true, true];
const cells = ['' ,'' ,'', '', '', '', '', '', '', '', '', '', '', '', '', ''];
class tile {
    constructor(cell, number, value) {
        this.cell = cell;
        this.number = number; 
        this.value = value;
    }
};


function GetFreeIndex(){ return Free.findIndex((v) => { return v != false; })}
function GetRandomVal(){ return Math.random() > 0.24 ? 2 : 4;}
function GetRandomCell(){

    let freeElements = [];
    counter = 0;
    let random = Math.random();

    cells.forEach((item, index) =>{
        if(item === ''){
            freeElements.push(index);
            counter++;
        }})
        console.log(freeElements);
        
        if(counter == 0) return -1;

    let przedzial = 1/counter;
    for(let i = 1; i <= counter; i++)
    {
        if(random <= przedzial * i) {cells[freeElements[i-1]] = freeElements[i-1]; return freeElements[i-1];}
    }
}

 function CreateNewTile(){
    let index = GetFreeIndex(Free);
    una.push(index);
    console.log(una);
    Free[index] = false;
    return eval(`tile${index} = new tile(GetRandomCell(cells), index , GetRandomVal());`);
 
 }
 
function display(){
    for(let i = 0; i < (16 - (counter - 1)); i++){
    eval(`space[tile${una[i]}.cell].innerHTML = tile${una[i]}.value`);console.log('sds');}
}
//GAME FLOW


//generuje tile
//wyswietla go na ekranie
//ruch gracza i modyfikacja obkiektów
//sprawdzanie czy ruch jest dozwolony i czy jakis ruch jest mozliwy











////////////////////////////


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

