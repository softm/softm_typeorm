class Person {
    private fullName: String = "";

    constructor(private firstName: String, private lastName: String) {
        this.fullName = firstName + " " + lastName;
    }

    public getName(): String{
        return this.fullName;
    }
}
let person: Person = new Person("Chicken", "mini");
const message: string = 'hello world';
console.log(message);

export const server = () => {
    console.info("Start Server");
}

