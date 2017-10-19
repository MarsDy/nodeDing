/**
 * Created by Administrator on 2017/9/24.
 */

process.nextTick(function(){
    console.log('nextTick-1');
})

process.nextTick(function(){
    console.log('nextTick-2');
})


setImmediate(function(){
    console.log("setImmediate-1")
    process.nextTick(function(){
        console.log('强势插入---nextTick-3');
    })
})

setImmediate(function(){
    console.log("setImmediate-2");
})

console.log("正常执行")