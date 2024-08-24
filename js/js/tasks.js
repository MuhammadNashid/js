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


let arr=[]

function add(){
    let username=document.getElementById("text").value
    let phoneNumber=document.getElementById("num").value
    arr.push(`${username}:${phoneNumber}`)
    // arr.push(phoneNumber)
    getData()
}

function getData(){
    str=``
    arr.map((i,index)=>{
        str+=`<li>${i} <button onclick="edit(${index})">Edit</button> <button onclick="dlt(${index})">Delete</button></li>`
    })
    document.getElementById("print").innerHTML=str
    document.getElementById("text").value=""
    document.getElementById("num").value=""
}
getData()
function dlt(index){
    console.log(index);
    arr.splice(index,1)
    getData()
}

function edit(index){
    console.log(index);
    let editData=prompt(`old data "${arr[index]}" if you want edit this then type in input field`);
    let editphno=prompt(`old data "${arr[index]}" if you want edit this phno then type in input field`);
    if(editData!=null){
        arr[index]=`${editData}:${editphno}`
    }
// function edit(index){
//     console.log(index);
//     let editphno=prompt(`old data "${arr[index]}" if you want edit this phno then type in input field`);
//     if(editphno!=null){
//         arr[index]=editphno
//     }
    
// }
getData()
}



