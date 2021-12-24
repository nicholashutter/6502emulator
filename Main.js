import Bus from './Bus.js';
//create virtual ram array to hold program to be executed
var ram = new Array(0xFFFF);
//hard coded assembly code for initial test case
ram[0x80E8] = "LDA #01" 
ram[0x80E9] = "ADC #02"     
ram[0x80FA] = "STA $0402"    

// 6502 registers
class registers
{
    #PC; 
    #S; 
    #P; 
    #A; 
    #X; 
    #Y; 
    getPC()
    {
        return this.#PC;
    }
    setPC(value)
    {
        if (value > 0 && value < 257) {this.#PC = value;}
    }
    getS()
    {
        return this.#S;
    }
    setS(value)
    {
        if (value > 0 && value < 257) {this.#S = value;}
    }    
    getP()
    {
        return this.#P;
    }
    setP(value)
    {
        if (value > 0 && value < 257) {this.#P = value;}
    }    
    getA()
    {
        return this.#A;
    }
    setA(value)
    {
        if (value > 0 && value < 257) {this.#A = value;}
    }    
    getX()
    {
        return this.#X;
    }
    setX(value)
    {
        if (value > 0 && value < 257) {this.#X = value;}
    }    
    getY()
    {
        return this.#Y;
    }
    setY(value)
    {
        if (value > 0 && value < 257) {this.#Y = value;}
    }
}

//init registers, wrapped to parse input
var r = new registers;

var bus = new Bus();
//cpu call for instruction from ram
bus.send(ram[0x80E8]);

fetch();

r.setA(5);
console.log(r.getA());

//function to grab instruction from the bus
function fetch()
{
    let Z = bus.recieve(); 
    decode(Z);
}

//function to break operation into code and memory address 
function decode(Z)
{
    const split =Z.toString().split(" ");
    execute(split);
}

//function to perform operation at memory address
function execute(stdarray)
{
    let opCode = stdarray[0];
    let address = stdarray[1];
//need to implement assembly alias
    switch (opCode)
    {
        case'ADC':
        console.log("ADC");
        break;

        case'AND':
        console.log("AND");
        break;

        case'ASL':
        console.log("ASL");
        break;

        case'BCC':
        console.log("BCC");
        break;

        case'BEQ':
        console.log("BEQ");
        break;

        case'BMI':
        console.log("BNE");
        break;

        case'BNE':
        console.log("BNE");
        break;

        case'BPL':
        console.log("BPL");
        break;

        case'BRK':
        console.log("BRK");
        break;

        case'BVC':
        console.log("BVC");
        break;

        case'BVS':
        console.log("BVS");
        break;

        case'CLC':
        console.log("CLC");
        break;

        case'CLD':
        console.log("CLD");
        break;

        case'CLI':
        console.log("CLI");
        break;

        case'CLV':
        console.log("CLV");
        break;

        case'CMP':
        console.log("CMP");
        break;

        case'CPX':
        console.log("CPX");
        break;

        case'CPY':
        console.log("CPY");
        break;

        case'DEC':
        console.log("DEC");
        break;

        case'DEX':
        console.log("DEX");
        break;

        case'DEY':
        console.log("DEY");
        break;

        case'EOR':
        console.log("EOR");
        break;

        case'INC':
        console.log("INC");
        break;

        case'INX':
        console.log("INX");
        break;

        case'INY':
        console.log("INY");
        break;

        case'INX':
        console.log("INX");
        break;

        case'JMP':
        console.log("JMP");
        break;

        case'JSR':
        console.log("JSR");
        break;

        case'LDA':
        console.log("LDA");
        break;

        case'LDX':
        console.log("LDX");
        break;

        case'LDY':
        console.log("LDY");
        break;

        case'LSR':
        console.log("LSR");
        break;

        case'NOP':
        console.log("NOP");
        break;

        case'ORA':
        console.log("ORA");
        break;

        case'PHA':
        console.log("PHA");
        break;

        case'PHP':
        console.log("PHP");
        break;

        case'PLA':
        console.log("PLA");
        break;

        case'PLP':
        console.log("PLP");
        break;

        case'ROL':
        console.log("ROL");
        break;

        case'ROR':
        console.log("ROR");
        break;

        case'RTI':
        console.log("RIT");
        break;

        case'RTS':
        console.log("RTS");
        break;

        case'SBC':
        console.log("SBC");
        break;

        case'SEC':
        console.log("SEC");
        break;

        case'SED':
        console.log("SED");
        break;

        case'SEI':
        console.log("SEI");
        break;

        case'STA':
        console.log("STA");
        break;

        case'STX':
        console.log("STX");
        break;

        case'STY':
        console.log("STY");
        break;

        case'TAX':
        console.log("TAX");
        break;

        case'TAY':
        console.log("TAY");
        break;

        case'TSX':
        console.log("TSX");
        break;

        case'TXA':
        console.log("TXA");
        break;

        case'TXS':
        console.log("TXS");
        break;

        case'TYA':
        console.log("TYA");
        break;
    }

}



