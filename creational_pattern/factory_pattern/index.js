function ToyFactory() {
   this.toy = ToyDuck;
   this.createToy = function(props) {
    const {type, ...rest} = props;
    switch (props.type) {
        case 'car':
            this.toy = ToyCar;
            break;
        case 'duck':
            this.toy = ToyDuck;
            break;
        default:
            break;
    }
    return new this.toy(rest)
   }
}

function ToyCar(props) {
    this.name = props.name;
    this.color = props.color;
    this.price = props.price;
}

function ToyDuck(props) {
    this.name = props.name;
    this.color = props.color;
}

const toyFactory = new ToyFactory();
const toyDuck = toyFactory.createToy({type: 'duck', name: 'chip', color: 'brown'})
console.log(toyDuck);
const toyCar = toyFactory.createToy({type: 'car', name: 'nexon', color: 'green', price: '1300k'})
console.log(toyCar);