/**
 * Created by Administrator on 2017/5/24.
 */
function ShowObjProperty(Obj) {
    var PropertyList = '';
    var PropertyCount = 0;
    for (i in Obj) {
        if (Obj.i != null)
            PropertyList = PropertyList + i + '属性：' + Obj.i + '\r\n';
        else
            PropertyList = PropertyList + i + '方法\r\n';
    }
    console.log(PropertyList);
}

function inheritedPropertyNames(obj) {
    var props = {};
    // Object.getOwnPropertyNames(obj).forEach(function(p) {
    //     props[p] = true;
    // });
    while(obj) {
        Object.getOwnPropertyNames(obj).forEach(function(p) {
            props[p] = true;
        });
        obj = Object.getPrototypeOf(obj);
    }
    return Object.getOwnPropertyNames(props);
}

var a = {
    b:"xxx"
}

ShowObjProperty(a);
console.log("a:",inheritedPropertyNames(a));
