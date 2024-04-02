export default class Star{
    private temperature: number = 0;
    private mass: number = 0;

    public getTemperature(): number{
        return this.temperature;
    }

    public setTemperature(temperature: number): void{
        this.temperature = temperature;
    }

    public getMass(): number{
        return this.mass;
    }

    public setMass(mass: number): void{
        this.mass = mass;
    }
}