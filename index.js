var count=0
var korsi=0

increment=()=>{
    count++
    korsi=10*count
    totalse=eval(korsi)+eval(korsi1)+eval(korsi2)+'$'
    document.getElementById('number1').innerHTML=count
    document.getElementById('total1').innerHTML='$'+korsi
    document.getElementById("totals").innerHTML=totalse
}
decrement=()=>{
    if (count<=0)return
    count--
    korsi=count*10
    console.log(korsi+korsi1)
    totalse=eval(korsi)+eval(korsi1)+eval(korsi2)+'$'
    document.getElementById('number1').innerHTML=count
    document.getElementById('total1').innerHTML='$'+korsi
    document.getElementById("totals").innerHTML=totalse
}

var count1=0
var korsi1=0
increment1=()=>{
    count1++
    korsi1=20*count1
    totalse= eval(korsi)+eval(korsi1)+eval(korsi2)+'$'
    document.getElementById('number2').innerHTML=count1
    document.getElementById('total2').innerHTML='$'+korsi1
    document.getElementById("totals").innerHTML=totalse
}
decrement1=()=>{
    if (count1<=0)return
    count1--
    korsi1=count1*20
    totalse= eval(korsi)+eval(korsi1)+eval(korsi2)+'$'
    document.getElementById('number2').innerHTML=count1
    document.getElementById('total2').innerHTML='$'+korsi1
    document.getElementById("totals").innerHTML=totalse
}
var count2=0
var korsi2=0
increment2=()=>{
    count2++
    korsi2=30*count2
    totalse= eval(korsi)+eval(korsi1)+eval(korsi2)+'$'
    console.log(totalse)
    document.getElementById('number3').innerHTML=count2
    document.getElementById('total3').innerHTML='$'+korsi2
    document.getElementById("totals").innerHTML=totalse
}
decrement2=()=>{
    if (count2<=0)return
    count2--
    korsi2=count2*30
    totalse=eval(korsi)+eval(korsi1)+eval(korsi2)+'$'
    document.getElementById('number3').innerHTML=count2
    document.getElementById('total3').innerHTML='$'+korsi2
    document.getElementById("totals").innerHTML=totalse
}

// totalPrice=() => {
//     var totalprice = 0
//     var tot1 = document.getElementById('total1').innerText
//     var newTot1 = parseInt(tot1.replace('$', ''), 10)
//     var tot2 = document.getElementById('total2').innerText
//     var newTot2 = parseInt(tot2.replace('$', ''), 10)
//     var tot3 = document.getElementById('total3').innerText
//     var newTot3 = parseInt(tot3.replace('$', ''), 10)
//     totalprice = newTot1 + newTot2 + newTot3
//     document.getElementById("totals").innerHTML= '$'+ totalprice
    
// }

