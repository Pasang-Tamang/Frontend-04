// //Asynchronous
// setTimeout(() => {
//   console.log("1");
// }, 5000);
// console.log("2");
// console.log("3");

// //Synchronous
// for (let i = 0; i < 1000; i++) {
//   console.log("ok");
// }

// const addition = (a, b, callback) => {
//   setTimeout(() => {
//     console.log(a + b);
//     callback(a + b, nextCallback);
//   }, 5000);
// };

// const logger = (value, callback) => {
//   console.log("The added Value is", value);
//   callback();
// };

// const nextCallback = () => {
//   console.log("running callback");
// };

// addition(1, 2, logger);

// //Promises

// returnProducts.then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log('error coming here')
// })

// fetch("https://dummyjson.com/products")
//   .then((val) => {
//     return val.json();
//   })
//   .then((val) => {
//     const filteredProducts = val.products.filter((item) => {
//       if (item.category === "smartphones") {
//         return item;
//       }
//     });

//     console.log(filteredProducts);
//   });

