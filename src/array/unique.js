function unique(arr){
    // 声明一个空数组
    const result=[];
    // 遍历原数组
    arr.forEach(item=>{
        // 检测result数组中是否包含这个元素
       if(result.indexOf(item)===-1){
           result.push(item);
       }
    });
    return result;
}



function unique2(arr){
    // 声明空数组
    const result=[];
    // 声明空对象
    const obj={};
    // 遍历数组
    arr.forEach(item=>{
        if(obj[item]===undefined)
     { 
           obj[item]=true;
        result.push(item);
    }
    });
    return result;
}



function unique3(arr){
  /*   // 将数组转化成为集合Set
    let set=new Set(arr);
    // 将set展开创建一个数组
    let array=[...set];
    return array; */
    return [...new Set(arr)];
}