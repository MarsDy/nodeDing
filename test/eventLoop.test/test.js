
console.time('A');
setTimeout(function(){
    console.timeEnd('A');
},100);

var i=0;
// while(1){
//     console.log("B");
// }
for(;i<10000;i++){
    console.log("B");
}
