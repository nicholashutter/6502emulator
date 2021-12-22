

 
//create virtual ram array to hold program to be executed
//fix size to 64k 
var virtualRam = new Array(0xFFFF);
virtualRam.fill(undefined);
Object.seal(virtualRam);

reset();
loadProgram();



//actual operation of assembly code 
function execute()
{
   fetch();
    //decode 
    /*
        split lines read from memory 
        between operation and memory address
        Determine memory addressing mode 
        return operation, memory addressing mode, and memory address 
    */
    //execute 
    /*
        look up operation
        perform operation at memory address
        increment PC 
    */
}

function reset()
{
    //6502 initialize all registers to default values 
    //accumulator
var A = new Array(0xFF); 
//x index
var X = new Array(0xFF); 
//y index 
var Y = new Array(0xFF); 
// processor status
var SR = new Array(0xFF); 
//stack pointer
var S = new Array(0xFF); 
//program counter
var PC = new Array(0xFF);

initRegisters();
SR[]
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

function fetch()
{
    //grab first line of code from RAM 

}