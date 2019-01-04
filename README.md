# copmany
# xiugai


对象设置默认的属性

const  menuConfig = {
    title:'Order',
    buttonText:'Send',
    cancellable:true
};

function createMenu(config){
    config = object.assign({
        title:'Foo',
        body:'Bar',
        buttonText:'baz',
        cancellable:true
    },consig)
}

createMenu(menuConfig);