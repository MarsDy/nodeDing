/**
 * Created by Administrator on 2017/9/10.
 */

var Eventemitter=require('events');
var emitter=new Eventemitter();

function a(){
    console.log('hi 1');
}
emitter.on('myEvent',a)


emitter.on('myEvent',a)

emitter.emit('myEvent');

