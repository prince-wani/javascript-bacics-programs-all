// --------sum of two numbers----------
// var a=Number(prompt('enter the number'));
// var b=Number(prompt('enter the  2nd number'));
// var c=Number(prompt('enter the 3rd number'));


// console.log('the sum is ',a+b+c);

// -------Greatest Number----------
// var a =Number(prompt('enter the first number'));
// var b =Number(prompt('enter the second number'));
// var c =Number(prompt('enter the third number'));


// if(a>b && a>c)
// {
//     console.log(a + 'is greater')
// }
// else if(b>c)
// {
//     console.log(b + 'is greater')
// }else
// {
//     console.log(c + 'is greater')
// }


// -------factorial----------
// var a=Number(prompt('enter the number'));
// var f=1;
// for(var i=1;i<=a;i++)
// {
//     f=f*i;
// }
// console.log(f);
// ----------------------

// -------------even odd------------
// var a=Number(prompt('enter the number'));
// if(a%2==0)
// console.log(a + 'is even number');
// else
// console.log(a + 'is odd number');
// ---------even odd exxtra--------
// var a=Number(prompt('enter the number'));
// for(i=1;i<=a;i++)
// {
//     if(i%2==0)

//         console.log(i + "even number")

//     else
//         console.log(i + "odd number")

// }



// var a=Number(prompt('enter the number'));
// for(i=a;i>=1;i--)
// {
//     if(i%2!=0)

//         console.log(i + "odd number")

//     else
//         console.log(i + "even number")

// }

// -----------leap year-----------
// var num1=Number(prompt('enter a year'))
// if(num1 % 4===0) 
// {
//   if(num1 % 100===0)
//   {
//     if(num1 % 400==0)
//     {
//    console.log('leap year')
//     }
//     else{
//         console.log('not leap year')
//     }
//   }
//   else{
//     console.log('leap year')
//   }
// }
// else{
//     console.log('not leap year')
// }

// -------------------Functions-----------
// javaScript function

// let num1 = Number(prompt('enter first number'))

// let num2 = Number(prompt('enter second number'))

// // function body/decleration
// function sum(){
//   let result = num1 + num2;
//   console.log(result);
// }

// //function call
// sum()


//parameterized function decleration
// function sum(num1, num2){
//   let result = num1 + num2
//   console.log(result);
// }

// //function call
// sum(10, 20)
// sum(num1, num2)

// function sum(num1, num2){
//   return num1 + num2;
// }

// let res = sum(10, 15)
// console.log(res);

// let res1 = sum(num1, num2);
// console.log(res1);


//arrow function

// let sum = (num1, num2) => {
//    return num1 + num2
// }

// let result = sum(90, 10)
// console.log(result);

// let result1 = sum(num1, num2)
// console.log(result1);


// --------------pooora  worst logic program-------
//check the greatest among three numbers
// let greatest =(num1,num2,num3)=>{
//      return num1,num2,num3
//     }

// worst

//     let val1 = Number(prompt('enter first number'))
//     let val2 = Number(prompt('enter second number'))
//     let val3 = Number(prompt('enter third number'))

//     if(val1>val2 && val1>val3)
// {
//     console.log(val1 + 'is greater')
// }
// else if(val2>val3)
// {
//     console.log(val2 + 'is greater')
// }else
// {
//     console.log(val3 + 'is greater')
// }
// let result=greatest(val1,val2,val3)
// --------------------------------------------------------

// ----------even odd function through---------
// let num1=Number(prompt('enter number'))
// const evenodd=(num1)=>{
//     if(num1%2===0)

//         return (` ${num1} is even number `)

//     else

//         return(` ${num1} is odd number `)

// }
// let result=evenodd(num1)
// console.log(result)


// --------------factorial-----------
// let num1=Number(prompt('enter number'))
// const factorial=(num1)=>{
// let i=1
// let f=1
// for(i=1;i<=num1;i++)
// {
//     f=f*i;
// }
// return(f)
// }
// let result=factorial(num1)
// console.log(result)

// ------------leap year------------
// let num1=Number(prompt('enter year'))
// const leapyear=(num1)=>{
//     if(num1 % 4===0) 
//     {
//       if(num1 % 100===0)
//       {
//         if(num1 % 400===0)
//         {
//        return(`${num1} is leap year`)
//         }
//         else{
//             return(`${num1} is not leap year`)
//         }
//       }
//       else{
//         return(`${num1} is leap year`)
//       }
//     }
//     else{
//        return(`${num1} is not leap year`)
//     }
// }
// let result=leapyear(num1)
// console.log(result)

// --------even---------
// for(var i=0;i<=1000;i++)
// {
//     if(i%2==0)
//     console.log(i)
// }

// ----------odd--------
// for(var i=0;i<=1000;i++)
// {
//     if(i%2!=0)
//     console.log(i)
// }

// ------------palindrome----------
// let a=Number(prompt('enter number'))
// var y=0,r,b;
// b=a;
// while(a>0)
// {
//     r=a%10;
//     a=Math.floor(a/10);
//     y=y*10+r;
// }
// if(b==y)
// console.log('palindrome')
// else
// console.log(' non palindrome')

// --------armstrong Number-------
// let a=Number(prompt('enter number'))
// var r,s=0,b;
// b=a;
// while(a>0)
// {
//     r=a%10;
//     a=Math.floor(a/10);
//     s=s+r*r*r;
// }
//  console.log(s)
// if(s==b)
// console.log('armstrong number')
// else
// console.log('not armstrong number')

// ---------------string armstrong-------------
// let string=prompt("enter name")
// const checkstring=()=>{
// var len=string.length
// for(var i=0;i<len/2;i++)
// {
//     if(string[i]!=string[len-1-i])
//     {
//         return('not palindrome string')
//     }
//     else
//     return('palindrome string')
// }
// }

// let result=checkstring()
// console.log(result)

// -------------fabinocci-------
// let num1=Number(prompt('enter number'))
// var a=0,b=1,c;
// for(var i=0;i<=num1;i++)
// {
//   c=a+b
//   a=b
//   b=c
//    console.log(c)
// }

// let n=Number(prompt('enter number')) 
// var i = 0, j = 1, k;
// while(i<n)
// {
//     k = i+j;
//     console.log(i);
//     i = j;
//     j = k;

//     //  console.log(k);
// }


// let num1=Number(prompt('enter number'))
// const fabinocci=(num1)=>{
//   var a=0,b=1,c;
// for(var i=0;i<num1;i++)
// {
//   c=a+b
//   a=b
//   b=c
// }
//     return c;
// }
// let result=fabinocci(num1)
// console.log(result)


// ----------------sum of digit of numbers 123=6------
// let a=Number(prompt('enter number'))
// var s=0,r;
// while(a!=0)
// {
//   r=a%10
//   s=s+r
//   a=Math.floor(a/10)
// }
// console.log(s)

// ----------reverse number--------
// var a=Number(prompt('enter the value'));
// var b,s=0;
// var z=a;
// while(a>0)
// {
//     b=a%10;
//     s=s*10+b;
//     a=Math.floor(a/10);
// }
// console.log(s);

// -------------prime or not----------
// let num1=Number(prompt('enter any number'));
// const checkprime=(num1)=>{
// var i,c=0;
// for(i=1;i<=num1;i++){
//     if(num1%i==0){
//         c++;
//     }
// }
// if(c==2)
// {
//     return('prime number');
// }
// else{
//     return('not prime Number');
// }
// }
// let result=checkprime(num1)
// console.log(result)

// // --------------Dom--------
// //DOM document object model

// console.log(document);

// let heading = document.querySelector('h1') //selecting the element is javascript

// let heading2 = document.querySelector('.dec')

// let link = document.querySelector('a');

// link.innerHTML = 'Go to google'

// link.href = 'https://google.com'

// console.log(heading);

// console.log(heading2);

// heading2.innerHTML = 'tommorow'

// heading.innerHTML = 'hiiiii'

// heading.style.color = 'red'

// heading.style.fontSize = '55px' // font-size kabab case fontSize ->  camel case

// heading.style.backgroundColor = 'blue' // backgroundColor background-color


// ------------------Selectors----------------
// let heading1 = document.querySelector('h1')

// heading1.innerHTML = 'hiiii' 

// document.querySelector('h1').innerHTML = 'by'

// document.querySelector('h2').innerHTML = '20dec'

// document.querySelector('h2').style.color = 'red';

// document.querySelector('h2').style.backgroundColor = 'blue'

// document.querySelector('a').href = 'http://google.com'

// ------------different type of selectors in js-------------------

// console.log(document.getElementsByTagName('h1'));

// document.getElementsByTagName('h1')[0].innerHTML = 'tuesday'

// document.getElementsByTagName('h1')[1].innerHTML = 'today'

// console.log(document.getElementsByClassName('heading'));

// document.getElementsByClassName('heading')[0].style.color = 'red'

// // document.getElementsByClassName('heading')[1].style.color = 'blue'

// document.getElementById('link').style.color = 'red'

// document.querySelectorAll('.heading')[0].style.backgroundColor = 'blue'

// document.querySelector('#link').href = 'http://google.com'


// --------querySelector   querySelectorAll------------

// ----forEach loop------

// function sum(){

// }

// console.log(document.querySelectorAll('.heading'))

// let heading = document.querySelectorAll('.heading')

// heading.forEach(function(item){
//     item.style.fontSize = '30px'
//     item.style.color = 'red'
// });

// -----------project 1-----------
// //handler---something
// document.querySelector('button').addEventListener(`click`,randomColor)
// //random color
// function randomColor(){
//     // console.log('clicked');
//     document.body.style.backgroundColor = `rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`;
// }


// //random number
// const randomNumber = (number) =>{
//     return Math.floor(Math.random()* number) + 1;
// }

// ----------second file by aijaz-------
// document.querySelector('button').addEventListener('click',changecolor);



// function changecolor(){
//     document.body.style.backgroundColor=`rgb(${randomcolor(256)},${randomcolor(256)},${randomcolor(256)})`;
// }
// const randomcolor=(number)=>{
//     return Math.floor(Math.random()*number)+1;
// }

// -----------project 2----------
// --------random Color on div tags------
// const divData = document.querySelectorAll('.child');

// divData.forEach(function(item){
//     item.addEventListener('click',function(){
//         item.style.backgroundColor = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`
//     })
// })

// const randomNumber = (number) => {
//     return Math.floor(Math.random() * number) + 1;
// }

// -----------validation project-------------

// let email = document.querySelector('#emailData');
// let password = document.querySelector('#passwordData');
// let form = document.querySelector('form');
// let para = document.querySelector('.para');

//   form.addEventListener('submit', function(event){
//     event.preventDefault();
//     // console.log('submitted');
//     if(email.value === "" || password.value === ""){
//         para.innerHTML = 'please fill all the fields'
//     }
//     else{
//         email.value = "";
//         password.value = "";
//         para.value = "";
//     }
// })

// -----------settimeout --setinterval---------
// setTimeout(function(){
//     alert('hiiii')
//     console.log('hello')
// },2000)


// let para = document.querySelector('p')

// var i = 0;

// setInterval(function(){
//     para.innerHTML = i;
//     i++;
// },2000)


// -----------Increment decrement buttons-----------

// let para = document.querySelector('p');

// let inc = document.querySelector('#inc');

// let dec = document.querySelector('#dec');

// var i=0;

// inc.addEventListener('click',function(){
//     i++;
//     para.style.color = 'green';
//     para.innerHTML = i;
// });

// dec.addEventListener('click',function(){
//     i--;
//     para.style.color = 'red';
//     para.innerHTML = i;
// })

// -------------stopwatch------------
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
//  let count = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
stopBtn.addEventListener('click', function () {
    timer = false;
});
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    // count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    // document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
     if (timer) {
       second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute=0
            second = 0;
        }
        // if (minute == 60) {
        //     hour++;
        //     minute = 0;
        //     second = 0;
        // }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        // let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }
        // if (count < 10) {
        //     countString = "0" + countString;
        // }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        // document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 1000);

    }
 }
// ---------------------stopWatch--------by gks------

// let startBtn = document.getElementById('start');

// let stopBtn = document.getElementById('stop');

// let resetBtn = document.getElementById('reset');


// let hour = 00;
// let minute = 00;
// let second = 00;
//  let count = 00;



// startBtn.addEventListener('click', function () {

//     timer = true;

//     stopWatch();
// });



// stopBtn.addEventListener('click', function () {

//     timer = false;
// });



// resetBtn.addEventListener('click', function () {

//     timer = false;

//     hour = 0;

//     minute = 0;

//     second = 0;

//     count = 0;

//     document.getElementById('hr').innerHTML = "00";

//     document.getElementById('min').innerHTML = "00";

//     document.getElementById('sec').innerHTML = "00";

//     document.getElementById('count').innerHTML = "00";
// });


// function stopWatch() {

//     if (timer) {

//         count++;

//         if (count == 100) {

//             second++;

//             count = 0;

//         }

//         if (second == 60) {

//             minute++;

//             second = 0;

//         }

//         if (minute == 60) {

//             hour++;

//             minute = 0;

//             second = 0;

//         }

//         let hrString = hour;

//         let minString = minute;

//         let secString = second;

//         let countString = count;

//         if (hour < 10) {

//             hrString = "0" + hrString;

//         }

//         if (minute < 10) {

//             minString = "0" + minString;

//         }

//         if (second < 10) {

//             secString = "0" + secString;

//         }
//         if (count < 10) {

//             countString = "0" + countString;

//         }

//         document.getElementById('hr').innerHTML = hrString;

//         document.getElementById('min').innerHTML = minString;

//         document.getElementById('sec').innerHTML = secString;

//         document.getElementById('count').innerHTML = countString;

//         setTimeout(stopWatch, 10);

//     }
// }