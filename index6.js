// 


// consteuctor是構造函數的意思，跟剛才的this 有點像,一樣是透過new去做新的物件

// this
// class Card{
//     constructor(initName){
//         this.name = initName
//         // this.hellooo = this.hello.bind(this)
//     }
//     hello=() =>{
//         console.log('hello', this.name )
//     }
// }

// const c1 = new Card('布魯斯')
// console.log('c1',c1);
// c1.hello()

// const a = {name:'AA'}
// a.hellooooo = c1.hello
// a.hellooooo()

// const b = {name:'BB'}
// b.helloo = a.hellooooo
// b.helloo()




// 繼承

class car {
    constructor(intiName){
        this.name = intiName
    }
    start(){
        // TODO del
        console.log('車子啟動');
    }
}


class Porshe extends car {
    constructor(namePorshe){
        super(namePorshe)
        
// 這邊寫super的用意是讓該namePorsh可以去建立一個this.name的東西
    }
    
  start2() {
    super.start()
    console.log('車子排氣')
    //這邊寫super的用意是繼承start的東西
}

start(){
    super.start()
    console.log('porche車子啟動')
}
}

const p1 = new Porshe('我的車')
p1.start() 
console.log('name',p1.name);
// 記得Porshe後面要給名字，這樣p1.mame就會直接抓到裡面的字串“我的車”