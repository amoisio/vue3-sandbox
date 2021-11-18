export class Person implements IPerson {

    constructor(public firstName: string = "",
    public lastName: string = "") {
        
    }
}

export default interface IPerson {
    firstName: string;
    lastName: string;
}