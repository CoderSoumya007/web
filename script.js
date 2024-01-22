//using promise for async code writing
// const pr = sum(2, 13);
// pr.then((val) => {
//     console.log("Sum is " + val);
// }).catch(function (err) {
//     console.log(err)
// })

// function sum(x, y) {
//     const promise = new Promise(function (resolve, reject) {
//         if (x + y > 5) {
//             resolve(x + y)
//         } else {
//             reject("sorry")
//         }
//     })
//     return promise
// }
//using async await for writing asynchronous code;
calculate();
async function calculate() {
    const pr = await sum();
    console.log(pr);
}



function sum() {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let b = true;
            if (b) {
                resolve("success");
            } else {
                reject("Failed miserably")
            }
        }, 5000)
    })
    return promise;
}


// sum("").then(function (sum) {
//     x = diff(sum);
//     return x;
// }).then(function (x) {
//     console.log(z(x))
// });

// function sum(x) {
//     let promise = new Promise(function (resolve, reject) {
//         if (x == "") {
//             x += "sssssssssssss";
//             resolve(x);
//         } else {
//             reject("sorry");
//         }
//     })
//     return promise;
// }
// function diff(s) {
//     s += "zzzzzzzzzzzzzzzzz"
//     return s;
// }

// function z(s) {
//     return s + "xxxxxx";
// }
// var ar = [1, 2, 3, 4, 5];
// let x = ar.find(function (age) {
//     return age >= 3;
// });
// console.log(x);
// function mainFunction(callback) {
//     console.log("Performing operation...");
//     // Use setTimeout to simulate an asynchronous operation
//     ar.forEach((x) => callback(x))
// }

// // Define the callback function
// function callbackFunction(result, callback) {
//     console.log("Result: " + result);
//     callback(result)
// }
// function sum(result) {
//     console.log(result)
// }

// // Call the main function with the callback function
// mainFunction(function (x) {
//     callbackFunction(x, function () {
//         sum(x);
//     });
// });
//This code is contributed by Veerendra Singh Rajpoot

// function sum() {
//     let a = 4;
//     var b = 4;
//     s();
//     console.log("value of a " + a);
//     console.log("value of b " + b);
//     function s() {
//         let c = 1;
//         var d = 55;
//         a = 33;
//         b = 44;
//         console.log(a + b);
//         console.log(c + d);
//     }
// }
// sum();