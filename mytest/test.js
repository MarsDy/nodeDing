// let doSth = new Promise((resolve, reject) => {
//         console.log('hello');
// resolve();
// });
//
// setTimeout(() => {
//     doSth.then(() => {
//     console.log('over');
// })
// }, 10000);


// setTimeout(function() {
//     console.log(1)
// }, 0);
// new Promise(function executor(resolve) {
//     console.log(2);
//     for( var i=0 ; i<10000 ; i++ ) {
//         i == 9999 && resolve();
//     }
//     console.log(3);
// }).then(function() {
//     console.log(4);
// });
// console.log(5);

// Promise.resolve(1)
//     .then((x) => x + 1)
// .then((x) => {throw new Error('My Error')})
// .catch(() => 1)
// .then((x) => x + 1)
// .then((x) => console.log(x))
// .catch(console.error)

var s='abcd';
s=s.split('').reverse().join('');
console.log(s);

