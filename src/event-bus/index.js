const eventBus={
  callbacks:{

  }
};

// 绑定事件
eventBus.on=function(type,callback){
    // 判断
    if(this.callbacks[type]){
        // 如果callbacks属性中存在该类型事件
        this.callbacks[type].push(callback);
    }else{
        // 如果callbacks属性中不存在该类型事件
        this.callbacks[type]=[callback];
    }
}

// 触发事件
eventBus.emit=function(type,data){
    // 判断
    if(this.callbacks[type]&&this.callbacks[type].length>0){
        // 遍历数组
        this.callbacks[type].forEach(callback=>{
            // 执行回调
            callback(data);
        });
    }
}

// 事件解绑
eventBus.off=function(eventName){
    if(eventName){
        delete this.callbacks[eventName];
    }else{
        this.callbacks={};
    }
}