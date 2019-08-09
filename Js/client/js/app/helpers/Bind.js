class Bind{
    constructor(mod,view,...props){
        let proxy= ProxyFactory.create(mod,props,(mod)=>{
            view._update(mod)
        });

        view._update(mod);

        return proxy
    }
}