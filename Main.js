
//create virtual ram array to hold program to be executed
var ram = new Array(0xFFFF);
//hard coded assembly code for initial test case
ram[0x80E8] = "LDA #01" 
ram[0x80E9] = "ADC #02"     
ram[0x80FA] = "STA $0402"    






var PC; 
var S; 
var P; 
var A; 
var X; 
var Y; 
var outofBounds = false; 
var bus; 

bus = ram[0x80E8];

fetch();

function fetch()
{
    let Z = bus; 
    decode(Z);
}

function decode(Z)
{
    const split =Z.toString().split(" ");
    console.log(split[0]);
    console.log(split[1]);
}

function execute()
{

}

