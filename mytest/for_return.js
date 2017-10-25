var arr = [1, 2, 3];

function test() {
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        console.log(obj);

        return obj;
    }
}

var obj2 = test();
console.log(obj2);
