/*
call很像但是又不太一样，call会执行目标函数，bind会创建一个新函数，
但是bind不会去执行函数
*/
function bind(Fn,obj,...args){
    //返回一个新的函数(调用目标函数并且改变目标函数this的指向)
    return function(...args2){
        //执行call函数
      return call(Fn,obj,...args,...args2);

    }
}