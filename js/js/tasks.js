// let arr=[]

// function add(){
//     let a=document.getElementById("text").value
//     arr.push(a)
//     getData()
// }

// function getData(){
//     str=``
//     arr.map((i,index)=>{
//         str+=`<li>${i} <button onclick="edit(${index})">Edit</button> <button onclick="dlt(${index})">Delete</button></li>`
//     })
//     document.getElementById("print").innerHTML=str
//     document.getElementById("text").value=""
// }
// getData()
// function dlt(index){
//     console.log(index);
//     arr.splice(index,1)
//     getData()
// }

// function edit(index){
//     console.log(index);
//     let editData=prompt(`old data "${arr[index]}" if you want edit this then type in input field`);
//     if(editData!=null){
//         arr[index]=editData
//     }
// getData()
// }
// let arr=[]
// function add(){
//     let username=document.getElementById("text").value
//     let phoneNumber=document.getElementById("num").value
//     arr.push(`${username}:${phoneNumber}`)
//     getData()
// }
// function getData(){
//     str=``
//     arr.map((i,index)=>{
//         str+=`<li>${i} <button onclick="edit(${index})">Edit</button> <button onclick="dlt(${index})">Delete</button></li>`
//     })
//     document.getElementById("print").innerHTML=str
//     document.getElementById("text").value=""
//     document.getElementById("num").value=""
// }
// getData()
// function dlt(index){
//     console.log(index);
//     arr.splice(index,1)
//     getData()
// }
// function edit(index){
//     console.log(index);
//     let editData=prompt(`old data "${arr[index]}" if you want edit this then type in input field`);
//     let editphno=prompt(`old data "${arr[index]}" if you want edit this phno then type in input field`);
//     if(editData!=null){
//         arr[index]=`${editData}:${editphno}`
//     }
// getData()
// }


// Vehicle

// class Vehicle {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//     }
//     startEngine() {
//       console.log("Engine started");
//     }
//   }
//   class Car extends Vehicle {
//     constructor(make, model, doors) {
//       super(make, model); 
//       this.doors = doors;
//     }
//     honkHorn() {
//       console.log("Beep beep!");
//     }
//   }
//   const myCar = new Car('Toyota', 'Camry', 4);
  
//   myCar.startEngine(); 
//   myCar.honkHorn();  


//   student or person

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// class Student extends Person {
//     constructor(name, subject) {
//         super(name); 
//         this.subject = subject;
//     }

//     study() {
//         console.log(`I am studying ${this.subject}`);
//     }
// }
// const student = new Student("Athila", "Mathematics");


// student.introduce();
// student.study();


        // employeee

// class Employee {
//     constructor(name, position) {
//         this.name = name;
//         this.position = position;
//     }
//     describe() {
//         console.log(`I am ${this.name} and I work as a ${this.position}`);
//     }
// }
// class Manager extends Employee {
//     constructor(name, position, department) {
//         super(name, position); 
//         this.department = department;
//     }

//     describe() {
//         super.describe();
//         console.log(`I am also the manager of the ${this.department} department`);
//     }
// }
// let manager = new Manager("Nashid", "Project Head", "Engineering");
// manager.describe();


        // REGULAR EXPRESION//

 // (rexp=/^([0-2]\d|3[0-1])-([0]\d|1[0-2])-(\d{4})/

    // console.log(rexp.test("22-09-2002"));)



        
// function dob(){
//         d=document.getElementById("Date").value
// const dt=/^([0-2]\d|3[0-1])-([0]\d|1[0-2])-(\d{4})/  
// output=dt.test(d)
// str=``
// if(output){
//         str+=`
//         <h4>${d}</h4>`
//         console.log("Succecfull");
        
// }else{
//         str+=`
//         <h4>Enter Data or Correct Date</h4>
//         `
        
// }
// document.getElementById("data").innerHTML=str
// document.getElementById("Date").value=""

// }


      
// function username(){
//         x=document.getElementById("user").value
// const user=/^[a-zA-Z]{4,}$/
// ot=user.test(x)
// str=``

// if(ot){
//         str+=`
//         <h4>Name:${x}</h4><br>Successful
//         `     
// }else{
//         str+=`
//         <h4>Invalid username</h4>`     
// }
// document.getElementById("data").innerHTML=str
// document.getElementById("user").value=""

// }


// function passwrd(){
//         pass=document.getElementById("paswrd").value
// const paswrd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){8,}/
// password=paswrd.test(pass)
// str=``

// if(password){
//         str+=`
//         <h4>:${pass}</h4><br>Successful
//         `     
// }else{
//         str+=`
//         <h4>Invalid Password</h4>`     
// }
// document.getElementById("data").innerHTML=str
// document.getElementById("paswrd").value=""
// }



function email(){
        mail=document.getElementById("email").value
const emil= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
b=emil.test(mail)
str=``

if(b){
        str+=`
        <span>${mail}</span><br>Successful
        `     
}else{
        str+=`
        <span>Invalid E-mail</span>`     
}
document.getElementById("data").innerHTML=str
document.getElementById("email").value=""
}










// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        

