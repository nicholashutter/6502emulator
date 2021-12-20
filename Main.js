
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
var virtualRam = new Array();



initRegisters();
loadProgram();




//actual operation of assembly code 
function execute()
{
    //fetch 
        /*grab first line of code from memory
    //decode 
    /*
        split lines read from memory 
        between operation and memory address
        return operation and memory address 
    */
    //execute 
    /*
        look up operation
        perform operation at memory address
        increment PC 
    */
}


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
//read from file 
//load assembly program from file to ram 
function loadProgram(qualifiedPath)
{
    let fs =require("fs");
    let text = fs.readFileSync("./asmProgram.txt").toString('utf-8');
    let textByLine = text.split("/n"); 

    virtualRam = textByLine;
    virtualRam.push("stop");
}