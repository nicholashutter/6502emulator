
//accumulator
var A = new Array(8); 
//x index
var X = new Array(8); 
//y index 
var Y = new Array(8); 
// processor status
var SR = new Array(8); 
//stack pointer
var S = new Array(8); 
//program counter
var PC = new Array(8);
 
//create virtual ram array to hold program to be executed
var virtualRam = new Array(128)



initRegisters();
loadProgram();











//fill all registers and limit their size
function initRegisters()
{
    var tempArray = new Array(6);
tempArray[0] = A;
tempArray[1] = X;
tempArray[2] = Y;
tempArray[3] = SR;
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

function loadProgram(qualifiedPath)
{
    //read from file 
    //load assembly program from file to ram 
    let fs =require("fs");
    let text = fs.readFileSync("./asmProgram.txt").toString('utf-8');
    let textByLine = text.split("/n"); 

    virtualRam = textByLine;
}