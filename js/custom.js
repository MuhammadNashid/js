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


let str=" a b c d e f "

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.substring(0,7));
console.log(str.replace("Hello","Hai"));
console.log(str.startsWith(" a b "));
console.log(str.endsWith(" "));
x=str.split(" ")
console.log(x);
y=x.join(" ")
console.log(y);



let a=[1,2,"hello","a","n",true,false]
console.log(a);
for(i=0;i<a.length;i++){
    console.log(a[i]);
}
for(i in a){
    console.log(a[i]);
}
console.log(a[5]);
console.log(a.length);
console.log(a.join(" "));
console.log(a.indexOf("n"));
a.push("good");
console.log(a);
a.pop();
console.log(a);
a.shift;
console.log(a);
a.splice(a.indexOf("a"),6)
console.log(a);
a[a.indexOf(false)]=7
console.log(a);





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


let num=[1,8,9,6,7,4,75,2,,3,10]
let b=num[0];
for(i=1;i<num.length;i++){
    // console.log(i);
    if(num[i]>b){
        b=num[i];
    }
}
console.log(b);


ob=[
    {name:"abin",age:20,class:"degree",mark:50},
    {name:"avin",age:20,class:"degree",mark:50},
    {name:"alan",age:20,class:"degree",mark:50},
];
console.log(ob[0].name);

for(i in ob){
    console.log(ob[i].name);
}

ob=[
    {name:"aswin",age:20,class:"degree",mark:50},
    {name:"avin",age:20,class:"degree",mark:50},
    {name:"abu",age:20,class:"degree",mark:50},
];
x=JSON.stringify(ob)
console.log(x);

y=JSON.parse(x)
console.log(y);



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



let todos=[];

while(true){
    choice=parseInt(prompt("[1] Add todo \n [2] Display Todo \n [3] Edit Todo \n [4] Delete Todo  \n [5] Exit"));

    if(choice===1){
        let username=prompt("Enter the username");
        let pno=prompt("Enter phone number");
        todos.push({username,pno});
    }
    else if(choice==2){
        let str=``
        for(i=0; i<todos.length;i++){
            str+=`[${i+1}] username:${todos[i].username}
            pno:${todos[i].pno}\n`
        }
        alert(str);
    }
    else if(choice==3){
        str=``
        for(i in todos){
            str+=`[${+[i]+1}]${todos[i]}\n`
        }
        if (username || phoneNumber) {
            let editChoice = prompt("1. Edit username\n2. Edit phone number");
            if (editChoice === '1') {
                username = prompt("Enter new username:");
            } else if (editChoice === '2') {
                phoneNumber = prompt("Enter new phone number:");
            } 
        }
    }
    else if(choice==4){
        index=parseInt(prompt("Enter the number of the task to delete"))-1;
        if(index >= 0 && index < todos.length){
            todos.splice(index,1);
            alert("task deleted")
        }
    }
    else if(choice==5){
        break;
    }
    else{
        alert("invalid")
    }
}