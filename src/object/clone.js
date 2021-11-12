function clone1(target){
// 判断类型 {} [] null
if(typeof target==='object' && target!==null){
    // 判断是否为数组
    if(Array.isArray(target)){
        return [...target];
    }else{
        return {...target};
    }
}else{
    return target;
}
}