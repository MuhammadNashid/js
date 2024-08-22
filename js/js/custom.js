// alert("external")

// a=10
// b=20
// console.log(a=a+b);

// a=10
// b=30
// c=10
// console.log(a==b&&a==c);

// a=10
// b=20
// c=10
// console.log(a==b||a==c);


// console.log(5+ "5");

// console.log(3+ +"3"); 

// console.log(4> 3);




// fno=parseFloat(prompt("Enter your first number"))

// sno=parseFloat(prompt("Enter your second number"))

// alert(fno+sno)




// if(mark>90){
//    alert("A+")
// }
// else if(mark>80){
//     alert("A")
// }
// else if(mark>70){
//     alert("B+")
// }
// else if(mark>60){
//     alert("B")
// }
// else if(mark>50){
//     alert("C+")
// }
// else if(mark>40){
//     alert("C")
// }
// else if(mark>30){
//     alert("D+");
// }
// else{
//     alert("fail");
// }


// op=10

// switch(op){
//     case 1: console.log("Sunday");
//     break;
//     case 2: console.log("Monday");
//     break;
//     case 3: console.log("Tuesday");
//     break;
//     case 4: console.log("Wednesday");
//     break;
//     case 5: console.log("Thursday");
//     break;
//     case 6: console.log("Friday");
//     break;
//     case 7: console.log("Saturday");
//     break;
//     default:console.log("Invalid");
// }


// i=1
// while(i<=10){
//     console.log(i);
//     i++
// }



// i=1
// do{
//     console.log(i);
//     i++
// }while(i<=10){

// }

// for(i=1;i<=5;i++)
// {
//     console.log(i);
// }


// for(i=1;i<=10;i=i+2)
// {
//     console.log(i)
// }


// even

// for(i=2;i<=10;i=i+2)
// {
//     console.log(i);
// }


// for(i=1;i<=100;i++){
//     console.log(i);
//     if(i%3==0)
//      console.log('fizz');
    
    
// }

// for(i=1;i<=100;i++){
//     console.log(i);
//     if(i%5==0)
//      console.log('buzz');
//     else if(i%3==0)
//     console.log('fizz');    
// }


// for(i=1;i<=100;i++){
//     console.log(i);
//     if(i%15==0)
//      console.log('fizzbuzz');
//      if(i%3==0)
//     console.log('fizz');
//     else if(i%5==0)
//     console.log('buzz');
// }



// for(i=1;i<=10;i++)
// {
   
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }


// for(i=1;i<=10;i++)
// {
//     if(i==5)
//     {
//         continue;
//     }
//     console.log(i);
// }



// function asd(){

//     if(true){
//         let a=30
//         var b=10
//         console.log("inside block"+a);
//     }
//     console.log("inside function"+b);

// }
// asd()


// for(i=1;i<=5;i++)
// {
//     str=""

//    for(j=1;j<=5;j++)
//    {
//     str+=j;
//    }
//    console.log(str);
// }

// for(i=1;i<=5;i++)
// {
//     str=""

//    for(j=1;j<=i;j++)
//    {
//     str+=j;
//    }
//    console.log(str);
// }

// for(i=1;i<=5;i++)
// {
//     str=""

//    for(j=1;j<=i;j++)
//    {
//     str+="*";
//    }
//    console.log(str);
// }


// for(i=1;i<=5;i++)
// {
//     str=""

//    for(j=1;j<=5;j++)
//    {
//     str+=j;
//    }
//    console.log(str);
// }


// for(i=5;i>=1;i--)
// {
//     str=""

//    for(j=1;j<=i;j++)
//    {
//     str+=j;
//    }
//    console.log(str);
// }



// function asd(){
//     console.log("===============================================");
//     console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
   
// }
// asd()
// console.log("Good morning");
// asd()
// console.log("Good afternoon");
// asd()
// console.log("Good evening");
// asd()
// console.log("Good Night");



// function eatFood(money){
//     if(money<=100)
//         console.log("eat a meals");
//     else if(money<150)
//         console.log("eat biriyani");
//     else
//         console.log("eat mandhi");
// }
// eatFood(200)


// function buyeggs(){
//     return "bought 10 eggs"
// }


// x=buyeggs()
//     console.log(x);




// function add(a,b){
//     return a+b
// }


// // x=add(5,3)
// console.log(add(5,3));



// fno=parseFloat(prompt("Enter your first number"))
// sno=parseFloat(prompt("Enter your second number"))

// function add(fno,sno){
//     return  (fno+sno)**2
// }
// console.log(add(fno,sno));


// function odd(num){
//     str=''
//     for(i=1;i<=num;i=i+2)
//     {
//         str=i
//     }
//     return str
// }
// x=odd(10)

// function fib(n){
//     a=0; b=1; c;
// console.log(a);
// console.log(b);
// for(i=2;1<n;i++){
//     c=a+b
//     console.log(c);
//     a=b;
//     b=c;
// }
// }
// console.log(fib(10));


// let str=" a b c d e f "

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.substring(0,7));
// console.log(str.replace("Hello","Hai"));
// console.log(str.startsWith(" a b "));
// console.log(str.endsWith(" "));
// x=str.split(" ")
// console.log(x);
// y=x.join(" ")
// console.log(y);



// let a=[1,2,"hello","a","n",true,false]
// console.log(a);
// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// for(i in a){
//     console.log(a[i]);
// }
// console.log(a[5]);
// console.log(a.length);
// console.log(a.join(" "));
// console.log(a.indexOf("n"));
// a.push("good");
// console.log(a);
// a.pop();
// console.log(a);
// a.shift;
// console.log(a);
// a.splice(a.indexOf("a"),6)
// console.log(a);
// a[a.indexOf(false)]=7
// console.log(a);





// a=[]


// for(i=0;i<100;i++){
//     console.log(i);
//     if(i%3==0&&i%5==0){
//         a[a.push("fizzbuzz")]=i;
//     }
//     else if(i%3==0){
//         a[a.push("fizz")]=i
//     }
//     else if(i%5==0){
//         a[a.push("buzz")]
//     }
//     console.log(a);

// }


// let num=[1,8,9,6,7,4,75,2,,3,10]
// let b=num[0];
// for(i=1;i<num.length;i++){
//     // console.log(i);
//     if(num[i]>b){
//         b=num[i];
//     }
// }
// console.log(b);


// ob=[
//     {name:"abin",age:20,class:"degree",mark:50},
//     {name:"avin",age:20,class:"degree",mark:50},
//     {name:"alan",age:20,class:"degree",mark:50},
// ];
// console.log(ob[0].name);

// for(i in ob){
//     console.log(ob[i].name);
// }

// ob=[
//     {name:"aswin",age:20,class:"degree",mark:50},
//     {name:"avin",age:20,class:"degree",mark:50},
//     {name:"abu",age:20,class:"degree",mark:50},
// ];
// x=JSON.stringify(ob)
// console.log(x);

// y=JSON.parse(x)
// console.log(y);



// let todos=[];

// while(true){
//     choice=parseInt(prompt("[1] Add todo \n [2] Display Todos \n [3] Delete Todos \n [4] Edit Todos \n [5] Exit"));

//     if(choice===1){
//         task=prompt("Enter task")
//         todos.push(task);
//     }
//     else if(choice==2){
//         str=``
//         for(i in todos){
//             str+=`[${+i+1}]${todos[i]}\n`
//         }
//         alert(str)
//     }
//     else if(choice==3){
//         str=``
//         for(i in todos){
//             str+=`[${+i+1}]${todos[i]}\n`
//         }
//         index=parseInt(prompt(str+"\n Enter Number For Delete Task"));
//         todos.splice(index-1,1);
//     }
//     else if(choice==4){
//         str=``
//         for(i in todos){
//             str+=`[${+[i]+1}]${todos[i]}\n`
//         }
//         edit=parseInt(prompt(str+"\n Enter Number For Edit Task"));
//         update=(prompt("Enter msg"));
//         todos[i-1]=update
//     }
//     else if(choice==5){
//         break;
//     }
//     else{
//         alert("invalid")
//     }
// }



// function asd(){
// let a=[10];
// bsd (a)
// console.log("function asd"+a[0]);


// }
// function bsd(x){
// x[0]+=1;
// console.log("function bsd"+x[0]);


// }
// asd()



// function asd(a,b){
// function myFunction(){
//     c=a+b
//     return c
// }
// return myFunction
// }
// x=asd(5,3)
// console.log(x());



// document.getElementById("asd").innerHTML="<h1>Good Day</h1>"

// document.getElementById("asd").setAttribute("name","nam");

// let value=document.getElementById("asd").getAttribute("class")
// console.log(value);

// document.getElementById("asd").removeAttribute("class")

// document.getElementById("asd").style.color="red"

// const btn=document.createElement("button");
// btn.textContent="Click Me"
// document.getElementById("asd").appendChild(btn);



// let todos=[];

// while(true){
//     choice=parseInt(prompt("[1] Add todo \n [2] Display Todo \n [3] Edit Todo \n [4] Delete Todo  \n [5] Exit"));

//     if(choice===1){
//         let username=prompt("Enter the username");
//         let pno=prompt("Enter phone number");
//         todos.push({username,pno});
//     }
//     else if(choice==2){
//         let str=``
//         for(i=0; i<todos.length;i++){
//             str+=`[${i+1}] username:${todos[i].username}
//             pno:${todos[i].pno}\n`
//         }
//         alert(str);
//     }
//     else if(choice==3){
//         str=``
//         for(i in todos){
//             str+=`[${+[i]+1}]${todos[i]}\n`
//         }
//         if (username || phoneNumber) {
//             let editChoice = prompt("1. Edit username\n2. Edit phone number");
//             if (editChoice === '1') {
//                 username = prompt("Enter new username:");
//             } else if (editChoice === '2') {
//                 phoneNumber = prompt("Enter new phone number:");
//             } 
//         }
//     }
//     else if(choice==4){
//         index=parseInt(prompt("Enter the number of the task to delete"))-1;
//         if(index >= 0 && index < todos.length){
//             todos.splice(index,1);
//             alert("task deleted")
//         }
//     }
//     else if(choice==5){
//         break;
//     }
//     else{
//         alert("invalid")
//     }
// }

// aug 16

// function btnEvent(e){
//     console.log(e.value);
//     if(e.value==""){
//         alert("Empty Data")
//     }
//     else{
//         const value=parseInt(e.value);
//         document.getElementById("out").textContent=value**2
//     }
// }

// function add(){
//     const a=parseInt(document.getElementById("fno").value)
//     const b=parseInt(document.getElementById("sno").value)
//     document.getElementById("sum").textContent=a+b;
    
// }

// function sub(){
//     const a=parseInt(document.getElementById("fno").value)
//     const b=parseInt(document.getElementById("sno").value)
//     document.getElementById("difference").textContent=a-b;
    
// }

// function mul(){
//     const a=parseInt(document.getElementById("fno").value)
//     const b=parseInt(document.getElementById("sno").value)
//     document.getElementById("product").textContent=a*b;
    
// }

// function div(){
//     const a=parseInt(document.getElementById("fno").value)
//     const b=parseInt(document.getElementById("sno").value)
//     document.getElementById("result").textContent=a/b;
    
// }


// function table(){
//     let a=parseInt(document.getElementById("num").value)
//     str=``
//     for(i=1;i<=10;i++){
//         str+=`<h1>${i} x ${a} = ${i*a}</h1>`
//     }
//     document.getElementById("out").innerHTML=str
// }



// let main=[]

// function getdata(){
//     str=``
//     for(i in main){
//         str+=`<li>${main[i]} <button onclick="del(${i})">delete</button></li>`
//     }
//     document.getElementById("out").innerHTML=str
//     document.getElementById("list").value=""
// }
// function add(){
//     let a=document.getElementById("list").value
//     main.push(a)
// getdata()
//  }
// function del(index){
//     console.log(index);
//     main.splice(index,1)
//     getdata()
// }



// document.getElementById("name").addEventListener("keyup",(e)=>{
//     console.log(e.target.value);
// })

// console.log(Math.sqrt(9));
// console.log(Math.round(10.5));
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.9));
// console.log(Math.abs(90));
// console.log(Math.PI);
// console.log(Math.max(10,3,80,90,100,200));
// console.log(Math.min(6,40,70,50,10,30));
// console.log(Math.pow(2,4));



// let otp="";
// for(i=1;i<=4;i++){
//     otp+=Math.floor(Math.random()*10);
// }
// console.log(+otp);


// console.log("Start");
// for(i=0;i<=10;i++){
//     console.log(i);
// }
// console.log("End");




// console.log("Start");
// setTimeout(() => {
//     for(i=0;i<=10;i++){
//         console.log(i);
//     }
// }, 3000);
// console.log("End");


// i=1;

// x=setInterval(() => {
//     document.write(i)
//     if(i==10){
//         clearInterval(x)
//     }
//     i+=1;
// },1000);


// i=1

// function asd(){
//     console.log("Hai");
//     i++
//     if(i<=10){
//         asd()
//     }



// } 


// asd()


// i=1

// function asd(){
//     setTimeout(()=>{
//         document.write("*")
//         if(i<=10){
//             asd()
//         }
//         i++
//     },1000)

// } 

// asd()

// function putZero(sec){
//     return sec<10?`0${sec}`: sec;
// }

// function asd(){
// let dt=new Date();
// let hours= dt.getHours()
// let ampm=hours>12?"PM":"AM";
// document.getElementById("asd").innerHTML=`${putZero(hours%12)} : ${putZero(dt.getMinutes())} : ${putZero(dt.getSeconds())} ${ampm}`
// setTimeout(()=>{
//          asd() 
// },1000)
// }  
// asd()

// spread operator

// ob={name:"alan",age:20}
// c={...ob}
// c.name="amal"
// console.log(ob);
// console.log(c);


// objDestructuring//

    // obj={name:"Nashid",exp:1,des:"Mern"}
    // let{name,exp,des}=obj
    // console.log(name,exp,des);

    //Array destructre//

    // x=[1,2,3,4,5,6,7]
    // let[a,b,c,,e,f,g]=x
    // console.log(a,b,c,e,f,g);

    // nestedDestructure

    // obj={name:"Nashid",exp:1,des:"Mern",breaktime:{mng:15,noon:45,evng:15}}
    // let{name,exp,des,breaktime:{mng,noon,evng}}=obj
    // console.log(name,exp,des,mng,noon,evng);


    // console.log("start");

    // function asd(){
    //     console.log("asd function");
    // }


    // callbackFunction

    // function bsd(callback){
    //    setTimeout(()=>{
    //     console.log("bsd function");
    //     callback()
    //    },2000);
    // }
    

    // bsd(asd)

    // console.log("end");

                // map
//     a=[
//         {name:"Nashid",age:20,class:12},
//         {name:"Aswin",age:20,class:12},
//         {name:"Abin",age:20,class:12},
//         {name:"Athila",age:20,class:12},
//         {name:"Amal",age:20,class:12},
//         {name:"Alan",age:20,class:12},
//         {name:"Avin",age:20,class:12},
//         {name:"Aleena",age:20,class:12},
//         {name:"Jaimon",age:20,class:12},
//         {name:"Ramees",age:20,class:12},
//     ]

//    x= a.map(data => {
//         console.log(data);
//     });


    // ob={name:"Nashid",age:21,class:"mern"}
    // b={...ob}
    // b.name="Athila"
    // console.log(ob);
    // console.log(b);    

    // Obj={name:"Athila",age:20,des:"Mern"}
    // let{name,age,des}=Obj
    // console.log(name,age,des);


    a=[
                {name:"Nashid",age:20,class:12},
                {name:"Aswin",age:20,class:12},
                {name:"Abin",age:20,class:12},
                {name:"Athila",age:20,class:12},
                {name:"Amal",age:20,class:12},
                {name:"Nashid",age:10,class:12},
    ]
    // let x=a.find((data)=>{
    //     return data.name=="Nashid"
    // })
    // console.log(x);

    // let x=a.filter((data)=>{
    //     return data.name=="Nashid"
    // })
    // console.log(x);

    // let x=a.reduce((total,dt)=>{
    //     return total+dt.age
    // },0)
    // console.log(x);

    

