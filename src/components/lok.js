var person = {
    name: "Bob"
};

Object.defineProperty(person, "name", {
    // 是否可以从对象中删除
    configurable: true,
    get: function() {
        console.log("触发了get方法");
    },
    set: function() {
        console.log("触发了set方法");
    }
})
console.log(person.name='p')
