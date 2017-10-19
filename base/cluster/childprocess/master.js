/**
 * Created by Administrator on 2017/10/13.
 */
var fork=require('child_process').fork;
var cpus= require('os').cpus();
console.log('master start...')
for (var i = 0; i < cpus.length; i++) {
    fork('./worker.js');
}