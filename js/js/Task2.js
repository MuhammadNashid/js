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

        // function fetchData(){
        //     fetch("https://jsonplaceholder.typicode.com/comments")
        //     .then((res)=>{
        //         return res.json();
        //     })
        //     .then((data)=>{
        //         console.log(data);
        //         str=``
        //         data.map((dt)=>{
        //             str+=`<tr>
        //             <td>${dt.id}</td>
        //             <td>${dt.name}</td>
        //             <td>${dt.email}</td>
        //             <td>${dt.body}</td>
        //         </tr>`;
        //         })
        //         document.getElementById("data").innerHTML=str
        //     })
        //     .catch((error)=>{
        //         console.log(error);
                
        //     })
        
        // }



        // function fetchData(){
        //     fetch("https://jsonplaceholder.typicode.com/albums")
        //     .then((res)=>{
        //         return res.json();
        //     })
        //     .then((data)=>{


        //         str=``
        //         data.map((content)=>{
        //             str+=`
        //             <div class="asd">${content.userId}<br>
        //             ${content.id}<br>
        //             ${content.title}
        //         </div>`;
        //         })
        //         document.getElementById("data").innerHTML=str
        //     })
        //     .catch((error)=>{
        //         console.log(error);
                
        //     })
        
        // }


        function fetchData(){
            fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res)=>{
                return res.json();
            })

            .then((data)=>{


               str=`` 

               data.map((content)=>{
                str+=`
                <div class="photos">
                <img src="${content.url}" alt="" style="width: 350px;" "height: 200px;"><br>
                <div class="tle">
                ${content.title}</div>
                </div>`;
            })
            document.getElementById("data").innerHTML=str
            })
            .catch((error)=>{
                console.log(error);
                
            })
        }



        // TODOS//


        // function fetchData(){
        //         fetch("https://jsonplaceholder.typicode.com/todos")
        //         .then((res)=>{
        //             return res.json();
                   
        //         })
        //         .then((data)=>{
        //             console.log(data);
        //             str=``
                    
        //             data.map((dt)=>{
        //                 str+=`<tr>
        //                 <td>${dt.id}</td>
        //                 <td>${dt.userId}</td>
        //                 <td>${dt.title}</td>
        //                 <td>${dt.completed ?"<h6 class='com'>completed</h6>":"<h6 class='notcom'>Not completed</h6>"}</td>
        //             </tr>`;
        //             })
        //             document.getElementById("data").innerHTML=str
        //         })

        //         .catch((error)=>{
        //             console.log(error);
                    
        //         })
            
        //     }
        