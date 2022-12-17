function Person({ name, age, sex }) {

    this.name = name;
    this.age = age;
    this.sex = sex;

    this.printDetail = () => {
        console.log(`name: ${this.name}, age: ${this.age}, sex: ${this.sex}`)
    }

}

function PersonBuilder() {
    this.setName = (name) => {
        this.name = name;
        return this;
    }

    this.setAge = (age) => {
        this.age = age;
        return this;
    }

    this.setSex = (sex) => {
        this.sex = sex;
        return this;
    }

    this.build = () => {
        return new Person({ name: this.name, age: this.age, sex: this.sex })
    }
}


const per1 = new PersonBuilder().setName('Manish').setAge(32).setSex('male').build();
console.log(per1)
per1.printDetail()