function greet() {
    console.log(this)
}

const person = {
    name1:"ravi",
    greetMethod: function(){
        console.log(this)
    }
}
const person2 = {
    name2:"ravii",
    
}

greet();
person.greetMethod.call(person2);
person.greetMethod.call(this);