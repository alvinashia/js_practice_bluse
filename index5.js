
// //宣告
// function hello(){
//     console.log('你好')}
    
// function hello(){
//     console.log('你好2')}
    
// function hello(){
//     console.log('你好3')}


// //執行
// hello()
// hello2()
// hello3()


// function addMoney(price1,price2,discount){
//   let result = price1+price2-discount
//   let message ='普通會員'
//  if(result > 50000){
//     message= '尊榮會員'
//     return message 
//  }
//  if(result > 20000 ){
//     message =  '白金會員'
//     return message
//  }

//  return message
// }


// let message = addMoney(50000,5000,1000)
// console.log('message',message);


function createCard(name){
  this.cardName = name
}
// new是建立構造的意思

const a1 = new createCard('小梅')
const a2 = new createCard('小美')
const a3 = new createCard('小明')
const a4 = new createCard('小畫')
const a5 = new createCard('小成')

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);






// //結賬頁面
// addMoney(2000,100)

// //購物車頁面
// addMoney(3000,200)