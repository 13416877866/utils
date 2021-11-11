function concat(arr,...args){
    // 声明一个空数组
    const result=[...arr];
    // 遍历数组
    args.forEach(item=>{
        // 判断item是否为数组
        if(Array.isArray(item)){
            result.push(...item);
        }else{
            result.push(item);
        }
    })
   return result;
}



// slice
function slice(arr,begin,end){
    // 若arr数组长度为0
    if(arr.length==0){
        return [];
    }
    // 判断begin
    begin=begin||0;
    if(begin>=arr.length){
        return [];
    }else if(begin<0){
        begin=0;
    }
    // 判断end
    end=end||arr.length;
    if(end<begin||end<0){
        end=arr.length;
    }
    // 声明一个空数组
    const result=[];
    // 遍历对象
    for(let i=0;i<arr.length;i++){
        if(i>=begin&&i<end){
            // 将下标对应的元素压入数组
            result.push(arr[i]);
        }
    }
    return result;
}