/**
 * Created by Administrator on 2017/9/26.
 */

var MongoClient=require('mongodb').MongoClient;

var db_conn_str= 'mongodb://192.168.0.104:27017/gomall';

var insertData=function(db,callback){
    var collection=db.collection('users');

    var data={_id:7,name:'rose',age:16};

    collection.insert(data,function(err,result){
        if(err){
            console.error(err);
            return;
        }

        callback(result);
    })
}


MongoClient.connect(db_conn_str,function(err,db){
    console.log("连接成功");
    insertData(db,function(result){
        //显示结果
        console.log(result);
        //关闭连接
        db.close();
    })

});

//+个注释