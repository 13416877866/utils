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