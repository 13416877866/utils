//apply函数改变函数this的指向，执行函数返回结果
//与call函数区别：apply函数的参数是一个数组，call函数的实参是以单独形式存在的

function apply(Fn,obj,args){
    //判断
    if(obj===undefined||obj===null){
        obj=globalThis;
    }
    //为obj添加临时方法
    obj.temp=Fn;
    //执行方法
    let result=obj.temp(...args);
    //删除临时属性
    delete obj.temp;
    //返回结果
    return result;
}