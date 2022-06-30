//object property sorthand

const name="andrew";
location="pune";
const userAge=29;

const human={
    name,
    location,
    age:userAge,
    gander:"male"
}

console.log(human);

// object Destructuring

// const {age,gander}=human;
// console.log(age,gander);

function user({age,gander}){
    console.log(age,gander)
}
user(human);