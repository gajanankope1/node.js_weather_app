// asynchronus besic

console.log("first");
setTimeout(() => {
    console.log("second");
}, 2000);
setTimeout(() => {
    console.log("third");
},1000);
console.log("fourth");