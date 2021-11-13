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




function deepClone2(target){
    // 检测一下数据类型
    if(typeof target==='object'&&target!==null){
    //    创造一个容器
    const result=Array.isArray(target)?[]:{};
    // 遍历数组
    for(let key in target){
        // 检测该属性是否为对象本身的属性（不能拷贝原型对象的属性)
        if(target.hasOwnProperty(key)){
            //拷贝
            result[key]=deepClone2(target[key]);

        }
    }
    return result;
    }else{
        return target;
    }
}


function deepClone3(target,map=new Map()){
    // 检测数据的类型
    if(typeof target ==='object' && target !==null){
        // 克隆数据之前，通过判断，数据之前是否有克隆过
        let cache=map.get(target);
        if(cache){
            return cache;
        }
        // 创建一个容器
        const result =Array.isArray(target)?[]:{};
        // 将新的结果存入到数据库中
        map.set(target,result);
        // 遍历对象
        for(let key in target){
            // 检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
            if(target.hasOwnProperty(key)){
                // 拷贝
                result[key]=deepClone3(target[key],map);
            }
        }
        return result;
    }else{
        return target;
    }
    
}