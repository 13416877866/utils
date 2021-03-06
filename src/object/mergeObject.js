function mergeObject(...objs){
// 声明一个空对象
const result=[];
// 遍历所有参数对象
objs.forEach(obj=>{
 //获取当前对象所有的属性
 Object.keys(obj).forEach(key=>{
//检测result中是否存在Key的属性
if(result.hasOwnProperty(key))
{
  result[key]=[].concat(result[key],obj[key]);
}else{
    // 如果没有则直接写入
    result[key]=obj[key];
}
 });
});
return result;
}