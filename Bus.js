export default class Bus
{
    #bus = 0;
    recieve()
    {
    return this.#bus;
    }
    send(value)
    {
        this.#bus = value; 
    }
}



