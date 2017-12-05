

//执行行为-move
var moveAction=function(){

}
//执行行为-login
var loginAction=function(){

}

// 单个行为配置
var actionConfig1={
    bRepeat:true,
    nRepeatCount:2,//重复行为次数
    nIntervalTime:500,//控制行为速度
    sActionName:"移动",
    sRun:'moveAction'
}

var actionConfig2={
    bRepeat:false,
    nRepeatCount:1,
    nIntervalTime:0,
    sActionName:"登录",
    sRun:'loginAction'
}


var aRobotActions=[];//机器人行为配置

aRobotActions[actionConfig2,actionConfig2];

//根据行为配置信息完成机器人行为

//利用async 顺序完成行为





