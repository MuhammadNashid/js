       // using list

// function fetchData(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         str=``
//         data.map((dt)=>{
//             str+=`<li>${dt.title}</li>`
//         })
//         document.getElementById("data").innerHTML=str
//     })
//     .catch((error)=>{
//         console.log(error);
        
//     })

// }

   //POSTS//
   
//    function fetchData(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         str=``
//         data.map((dt)=>{
//             str+=`<tr>
//             <td>${dt.id}</td>
//             <td>${dt.user}</td>
//             <td>${dt.title}</td>
//             <td>${dt.body}</td>
//         </tr>`;
//         })
//         document.getElementById("data").innerHTML=str
//     })
//     .catch((error)=>{
//         console.log(error);
        
//     })

// }


        //COMMENTS//

        function fetchData(){
            fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                str=``
                data.map((dt)=>{
                    str+=`<tr>
                    <td>${dt.id}</td>
                    <td>${dt.name}</td>
                    <td>${dt.email}</td>
                    <td>${dt.body}</td>
                </tr>`;
                })
                document.getElementById("data").innerHTML=str
            })
            .catch((error)=>{
                console.log(error);
                
            })
        
        }