// setTimeout(() => {
//     console.log("two seconds are up");
// }, 2000);

// const names = ["andrew", "jen", "jes"];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });

// const geocode = (adress, claaback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         claaback(data);
//     }, 2000);
// }

// const data = geocode("philadephia", (data) => {
//     console.log(data);
// });

const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);
    },2000);
}

add(2,5,(sum)=>{
    console.log(sum);
})