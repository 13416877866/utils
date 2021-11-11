function map(arr,callback){
    //声明一个空的数组
    let result=[];
    //遍历数组
    for(let i=0;i<arr.length;i++){
        //执行回调
        result.push(callback(arr[i],i));
    }
    //返回结果
    return result;
}
/* 
@param {Array} arr
@param {Function} callback
@param {*} initValue
 */
function reduce(arr,callback,initValue){
    //声明变量
    let result=initValue;
    //执行回调
    for(let i=0;i<arr.length;i++){
        //执行回调
        result=callback(result,arr[i]);
    }
    //返回最终的结果
    return result;
}



/* filter用于过滤数组中元素 ，返回新数组*/

function filter(arr,callback){
    //声明空数组
    let result=[];
    //遍历数组
    for(let i=0;i<arr.length;i++){
        //执行回调
        let res=callback(arr[i],i);
        // 判断 如果为真把结果压入到result结果中
        if(res){
            result.push(arr[i]);
        }
    }
    //返回结果
    return result;
}


// find
function find(arr,callback){
    // 遍历数组
    for(let i=0;i<arr.length;i++){
        // 执行回调
        let res=callback(arr[i],i);
        // 判断
        if(res){
            return arr[i];
        }
    }
    return undefined;
}


// findIndex
function findIndex(arr,callback){
    // 遍历数组
    for(let i=0;i<arr.length;i++){
        // 执行回调
        let res=callback(arr[i],i);
        // 判断
        if(res){
            return i;
        }
    }
    return -1;
}


// every():如果数组中的每个元素都满足测试函数，则返回true，否则返回false
// some():如果数组中至少有一个元素满足测试函数，则返回true,否则返回false




function every(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(!callback(arr[i],i)){
            return false;
        }
    }
    return true;
}

//some

function some(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i)){
            return true;
        }
    }
    return false;
}