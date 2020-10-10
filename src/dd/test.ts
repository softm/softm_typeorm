class Person2 {
    private fullName: String = "";

    constructor(private firstName: String, private lastName: String) {
        this.fullName = firstName + " " + lastName;
    }

    public getName(): String{
        return this.fullName;
    }
}
let person: Person2 = new Person2("Chicken", "mini");
//console.log(person.getName());


