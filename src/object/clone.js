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


function clone2(target){
    // 判断
    if(typeof target ==='object'&&target !==null){
        // 创建一个容器
        const result=Array.isArray(target)?[]:{};
        // 遍历target数据
        for(let key in target){
            //判断当前对象身上是否包含该属性
            if(target.hasOwnProperty(key)){
                // 将该属性设置到result结果数据中
                result[key]=target[key];
            } 
        }
        return result;
    }else{
        return target;
    }
}





function deepClone1(target){
    // 通过数据创建JSON格式的字符串
    let str=JSON.stringify(target);
    // 将JSON字符串创建为JS数据
    let data=JSON.parse(str);
    return data;
}