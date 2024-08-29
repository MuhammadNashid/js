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
