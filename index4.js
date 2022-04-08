// for(let i = 6; i<10; i=i+2){
//     console.log(i)
// }

//三個人的班級
// let classA=[100,70,59]
// classA.push(40,50)
// // console.log(classA[0])
// // console.log(classA[1])
// // console.log(classA[2])
//  for(let  i=0; i<classA.length;i++){
//    if(i===2){
//        classA[i]=999
//    }
//  }

//  console.log('classA',classA)

// const a1={
//     name:'小花',
//     desc:'貼文一'
// }

// console.log(a1.name)
// console.log(a1.desc)

// const posts = [
//     {name:'小花',
//      desc:'貼文一'
//     },
//     {name:'小文',
//     desc:'貼文二'
//    },
// ]
// for(let i=0; i<posts.length;i++){
//     if(i===1){
//         let post = posts[i]
//         console.log(post)
//     }
// }

let condition = true
let target=10
let i=0
while(condition){
    if(i===target){
        condition=false
    }
    console.log(i)
    i++
}