const PubSub={
    // 订阅唯一编号
   id:1,
//    
callbacks:{

}
}


// 订阅频道
PubSub.subscribe=function(channel,callback)
{
    // 创建唯一编号
    let token="token_"+this.id++;
    // 判断callbacks属性是否存在pay
    if(this.callbacks[channel]){
        this.callbacks[channel][token]=callback;
    }else{
        this.callbacks[channel]={
            [token]:callback
        }
    }
    return token;
}

/* 发布消息 */
PubSub.publish=function(channel,data){
// 获取当前频道中所有的回调
    if(this.callbacks[channel]){
        Object.values(this.callbacks[channel]).forEach(callback=>{
            callback(data);
        })
    }
}

/* 取消订阅 */
PubSub.unsubscribe=function(flag){
    // 如果flag为undefined则清空所有订阅
    if(flag===undefined){
        this.callbacks={};
    }else if(typeof flag==='string'){
        // 判断是否为token_开头
        if(flag.indexOf('token_')===0){
            // 如果是表明是一个订阅id
           let callbackObj= Object.values(this.callbacks).find(obj=>obj.hasOwnProperty(flag));
           if(callbackObj){
               delete callbackObj[flag];
           }
        }else{
            // 表明是一个频道的名称
            delete this.callbacks[flag];
        }
    }
}