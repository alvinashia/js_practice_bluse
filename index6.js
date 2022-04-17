// 


// consteuctor是構造函數的意思，跟剛才的this 有點像,一樣是透過new去做新的物件

this
class Card{
    constructor(initName){
        this.name = initName
        // this.hellooo = this.hello.bind(this)
    }
    hello=() =>{
        console.log('hello', this.name )
    }
}

const c1 = new Card('布魯斯')
console.log('c1',c1);
c1.hello()

const a = {name:'AA'}
a.hellooooo = c1.hello
a.hellooooo()

const b = {name:'BB'}
b.helloo = a.hellooooo
b.helloo()