let x, m;
let colors = ['a38a8a', '9e6868', '593a3a', 'bf7e7e', '6b2727' ,'#3a2222', '6d6262', '#543a3a', '#2b2724','1c1111'];
let tiles = document.querySelectorAll('.tile');
const board = []; for(let i = 0; i < 16; i++) board.push('');

CreateNewTile();
display();

function GetRandomCell(){
    let freeCells = [];
    let counter = 0;
    let random = Math.random();

    board.forEach((item, index) =>{
        if(item === ''){
            freeCells.push(index);
            counter++;}})

    let przedzial = 1/counter;
    for(let i = 1; i <= counter; i++){
        if(random <= przedzial * i) {; return freeCells[i-1];}}}

function GetRandomVal(){ return Math.random() > 0.1 ? 2 : 4;}

function CreateNewTile(){
    let cell = GetRandomCell()
    board[cell] = GetRandomVal()}

function display(){
    let n = 1, y = 2;
    for(let i = 0; i < 16; i++){
        tiles[i].innerHTML = board[i];
        x = board[i];
        do{
            y = Math.pow(y, n);
            if(x == y) tiles[i].style.backgroundColor = colors[n-1];
            n++;
        }while(y != x && x != '')}
    }



 document.addEventListener('keydown', (k) =>{

    x = 0;
    m = 0;
    if(k.keyCode == 40){
        console.log("down");
        for(let i = 15; i >= 12; i--){
            if(board[i-4] != ''){
                if(board[i] == ''){ board[i] = board[i-4]; board[i-4] = ''; m=1;} 
                else if(board[i] == board[i-4]){
                    board[i] *= 2; board[i-4] = ''; x = 1;m=1;}}

            if(board[i-8] != ''){        
                if(board[i-4] == ''){ board[i-4] = board[i-8]; board[i-8] = '';m=1;
                    if(board[i] == ''){ board[i] = board[i-4]; board[i-4] = '';m=1;}
                    else if(board[i] == board[i -4] && x != 1){
                        board[i] *= 2; board[i -4] = ''; x = 1;m=1;m=1;}}
                else if(board[i-4] == board[i-8]){board[i-4] *= 2; board[i-8] = ''; x = 2;m=1;m=1;}}

            if(board[i-12] != ''){
                if(board[i-8] == ''){ board[i-8] = board[i-12]; board[i-12] ='';m=1;
                    if(board[i-4] == ''){ board[i-4] = board[i-8]; board[i-8] ='';m=1;
                        if(board[i] == ''){board[i] = board[i-4]; board[i-4] ='';m=1;}
                        else if(board[i] == board[i-4] && x != 1){board[i] *= 2; board[i-4] = '';m=1;}}
                    else if( board[i-8] == board[i-4] && x != 2) {board[i-4] *= 2; board[i-8]= '';m=1;}}
                else if(board[i-8] == board[i-12]){board[i-8] *= 2; board[i-12] = '';m=1;}}}}


    if(k.keyCode == 38){
        console.log("up");
        for(let i = 0; i < 4; i++){
            if(board[i+4] != ''){
                if(board[i] == ''){ board[i] = board[i+4]; board[i+4] = ''; console.log("dziala"); m=1;} 
                else if(board[i] == board[i+4]){
                    board[i] *= 2; board[i+4] = ''; x = 1; m=1;}}

            if(board[i+8] != ''){
                if(board[i+4] == ''){ board[i+4] = board[i+8]; board[i+8] = ''; m=1;;
                    if(board[i] == ''){ board[i] = board[i+4]; board[i+4] = ''; m=1;}
                    else if(board[i] == board[i+4] && x != 1){
                        board[i] *= 2; board[i+4] = ''; x = 1; m=1;}}
                else if(board[i+4] == board[i+8]){board[i+4] *= 2; board[i+8] = ''; x = 2; m=1;}}

            if(board[i+12] != ''){
                if(board[i+8] == ''){ board[i+8] = board[i+12]; board[i+12] =''; m=1;
                    if(board[i+4] == ''){ board[i+4] = board[i+8]; board[i+8] =''; m=1;
                        if(board[i] == ''){board[i] = board[i+4]; board[i+4] =''; m=1;}
                        else if(board[i] == board[i+4] && x != 1){board[i] *= 2; board[i+4] = ''; m=1;}}
                    else if( board[i+8] == board[i+4] && x != 2) {board[i+4] *= 2; board[i+8]= ''; m=1;}}
                else if(board[i+8] == board[i+12]){board[i+8] *= 2; board[i+12] = ''; m=1;}}}}

    if(k.keyCode == 39){ 
        console.log("lewo");
        for(let i = 3; i < 16; i += 4){
            if(board[i-1] != ''){
                if(board[i] == ''){ board[i] = board[i-1]; board[i-1] = ''; m=1;} 
                else if(board[i] == board[i-1]){
                    board[i] *= 2; board[i-1] = ''; x = 1; m=1;}}

            if(board[i-2] != ''){
                if(board[i-1] == ''){ board[i-1] = board[i-2]; board[i-2] = ''; m=1;;
                    if(board[i] == ''){ board[i] = board[i-1]; board[i-1] = ''; m=1;}
                    else if(board[i] == board[i-1] && x != 1){
                        board[i] *= 2; board[i-1] = ''; x = 1; m=1;}}
                else if(board[i-1] == board[i-2]){board[i-1] *= 2; board[i-2] = ''; x = 2; m=1;}}

            if(board[i-3] != ''){
                if(board[i-2] == ''){ board[i-2] = board[i-3]; board[i-3] =''; m=1;
                    if(board[i-1] == ''){ board[i-1] = board[i-2]; board[i-2] =''; m=1;
                        if(board[i] == ''){board[i] = board[i-1]; board[i-1] =''; m=1;}
                        else if(board[i] == board[i-1] && x != 1){board[i] *= 2; board[i-1] = ''; m=1;}}
                    else if( board[i-2] == board[i-1] && x != 2) {board[i-1] *= 2; board[i-2]= ''; m=1;}}
                else if(board[i-2] == board[i-3]){board[i-2] *= 2; board[i-3] = ''; m=1;}}}}

    if(k.keyCode == 37){ 
        console.log("prawo");
        for(let i = 0; i <= 12; i += 4){
            if(board[i+1] != ''){
                if(board[i] == ''){ board[i] = board[i+1]; board[i+1] = ''; m=1;} 
                else if(board[i] == board[i+1]){
                    board[i] *= 2; board[i+1] = ''; x = 1; m=1;}}

            if(board[i+2] != ''){
                if(board[i+1] == ''){ board[i+1] = board[i+2]; board[i+2] = ''; m=1;;
                    if(board[i] == ''){ board[i] = board[i+1]; board[i+1] = ''; m=1;}
                    else if(board[i] == board[i+1] && x != 1){
                        board[i] *= 2; board[i+1] = ''; x = 1; m=1;}}
                else if(board[i+1] == board[i+2]){board[i+1] *= 2; board[i+2] = ''; x = 2; m=1;}}

            if(board[i+3] != ''){
                if(board[i+2] == ''){ board[i+2] = board[i+3]; board[i+3] =''; m=1;
                    if(board[i+1] == ''){ board[i+1] = board[i+2]; board[i+2] =''; m=1;
                        if(board[i] == ''){board[i] = board[i+1]; board[i+1] =''; m=1;}
                        else if(board[i] == board[i+1] && x != 1){board[i] *= 2; board[i+1] = ''; m=1;}}
                    else if( board[i+2] == board[i+1] && x != 2) {board[i+1] *= 2; board[i+2]= ''; m=1;}}
                else if(board[i+2] == board[i+3]){board[i+2] *= 2; board[i+3] = ''; m=1;}}}}

    if(m == 1){ CreateNewTile();    display();}
 
 })


