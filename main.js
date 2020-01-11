let tiles = document.querySelectorAll('.tile');
const Free = [true, true ,true, true, true, true, true, true, true, true, true, true, true, true, true, true];
const cells = []; 
for(let i = 0; i < 16; i++) cells.push('');

class tile {
    constructor(cell, number, value) {
        this.cell = cell;
        this.number = number; 
        this.val = value;}};



function GetFreeIndex(){ return Free.findIndex((v) => { return v != false; })}
function GetRandomVal(){ return Math.random() > 0.24 ? 2 : 4;}
function GetRandomCell(){
    let freeCells = [];
    let counter = 0;
    let random = Math.random();

    cells.forEach((item, index) =>{
        if(item === ''){
            freeCells.push(index);
            counter++;}})

    let przedzial = 1/counter;
    for(let i = 1; i <= counter; i++){
        if(random <= przedzial * i) {; return freeCells[i-1];}}}


 function CreateNewTile(){
    let cell = GetRandomCell()
    let index = GetFreeIndex();
    Free[index] = false;
    eval(`tile${index} = new tile(cell, index , GetRandomVal());`);
    eval(`cells[tile${index}.cell] = tile${index};`);}
 

 document.addEventListener('keydown', (k) =>{

    if(k.keyCode == 40){
        for(i = 15; i >= 12; i--){
            if( (cells[i].val === cells[i -4].val) && (cells[i] != '') ){
                console.log('kul');
                cells[i].val *= 2;
                cells[i -4] = '';
                Free[cells[i -4].number] = true;}
            if( (cells[i - 4].val === cells[i -8].val) && (cells[i - 4] != '') ){
                console.log('kul2');
                cells[i-4].val *= 2;
                cells[i -8].val = null;
                Free[cells[i -8].number] = true;}
            if( (cells[i -8].val === cells[i -12].val) && (cells[i-8] != '') ){
                console.log('kul3');
                cells[i-8].val *= 2;
                cells[i -12].val = null
                Free[cells[i -12].number] = true;;
            }}}


    if(k.keyCode == 38) console.log("góra");
    if(k.keyCode == 37) console.log("lewo");
    if(k.keyCode == 39) console.log("prawo");


 })

function display(){
    for(let i in Free)
    if(Free[i] != true) eval(`tiles[tile${i}.cell].innerHTML = tile${i}.val;`);}


 function KeyDown(){


 }
//GAME FLOW

//DONE
//generuje tile
//wyswietla go na ekranie


//ruch gracza i modyfikacja obkiektów
//sprawdzanie czy ruch jest dozwolony i czy jakis ruch jest mozliwy
//kolorki qrwa