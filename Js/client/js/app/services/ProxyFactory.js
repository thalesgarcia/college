class ProxyFactory{

    static isFunction(f){
        return typeof(f)==typeof(Function);
    }

    static create(obj,props,action){
       return  new Proxy(obj,{
            get:function(target,prop,receiver){
                //because sometimes the methods are not executed, do a get and this: checks if the get is a function, in case the set dosent work
                if(props.includes(prop) && ProxyFactory.isFunction(target[prop])){
                    return function(){
                        console.log(`Old value: ${prop}` )
                        //when add, a function it substitute the function add, and the arguments is all the arguments passed to the function
                        Reflect.apply(target[prop],target,arguments);
                       return action(target)
                    }
                }
                return Reflect.get(target,prop,receiver)
            },
            set:function(target,prop,value,receiver){
                console.log(`Old value: ${target[prop]} New value : ${value}` )
                if(props.includes(prop)){
                    target[prop]=value
                    action(target)
                }
                return Reflect.set(target,prop,value,receiver)
            }
        });
    }
}