// windows.alert(""
// document

// window.addEventListener('load',function(paramas) {
//     console.log('load');
// })
// 後面的.addevent是”新增事件的監聽器“意思，要寫一個當這個網頁載入完成的監聽器後面寫一個fuction就是表示這是個callback(回呼)的 function，等於當'load' 這個事件完成之後會再去回call後面的fuction，告訴windows這件事情，也就是當畫面載入結束再去執行這個function,比如我們希望有些事情是等網頁真正載入完時再做的事情，這招很好用


window.addEventListener('load',function(paramas) {
  const p1=document.getElementById('title')
  console.log(p1)
  p1.innerText ='訂閱布魯斯'

  const p2=document.getElementById('btn')

  p2.addEventListener('click', function (paramas) {
          console.log('點下去')
      })

const box1 = document.getElementById('box')
  box1.innerHTML='<p>test</p>'

const in1 = document.getElementById('input1')
in1.addEventListener('keyup',function(e){
    console.log('e.target.value',e.target.value);
})
  })
//  去給這個變數設定一個監聽器，這是要去監聽他被按下去的那一刻，也就是要監聽'click'事件(或者下面的是指keyup事件，key就是指按下去之後發生的事),之後建一個callback function ，也就是當click之後要去執行function 
// value=可以方便拿到手後台資料
//   console.log(p2);
// })
// 通過id去取得元素，之後前面加一個變數p1，之後再去把p1 log出來