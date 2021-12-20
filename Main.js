
//accumulator
let A = new Array(8); 
//x index
var X = new Array(8); 
//y index 
var Y = new Array(8); 
// processor status
var P = new Array(8); 
//stack pointer
var S = new Array(8); 
//program counter
var PC = new Array(8);

initRegisters();






















//fill all registers and limit their size
function initRegisters()
{
    var tempArray = new Array(6);
tempArray[0] = A;
tempArray[1] = X;
tempArray[2] = Y;
tempArray[3] = P;
tempArray[4] = S; 
tempArray[5] = PC;  
for (let i = 0; i< 6; i ++)
    {
        if(Object.seal)
        {
            tempArray[i].fill(undefined);
            Object.seal(tempArray[i]);
        }
    }

}



