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


//  for(i=5;i>=1;i--)
//  {
//      str=""

//    for(j=5;j>=1;j--)
//    {
//     str+=j;
//    }
//    console.log(str);
// }


for(i=5;i>=1;i--)
{
    str=""

   for(j=1;j>=i;j++)
   {
    str+=j;
   }
   console.log(str);
}