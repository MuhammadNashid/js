let arr=[]

function add(){
    let a=document.getElementById("text").value
    arr.push(a)
    getData()
}

function getData(){
    str=``
    arr.map((i,index)=>{
        str+=`<li>${i} <button onclick="edit(${index})">Edit</button> <button onclick="dlt(${index})">Delete</button></li>`
    })
    document.getElementById("print").innerHTML=str
    document.getElementById("text").value=""
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
    if(editData!=null){
        arr[index]=editData
    }
getData()
}



