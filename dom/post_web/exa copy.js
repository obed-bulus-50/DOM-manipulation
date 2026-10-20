const  arr =[ {'id':1, 'name':'obed bulus legend of zu'},
    {'id':2,'name':'mark second legend of zu'}
];
 const container = document.querySelector('post_container');

 const postData =(post)=>{
    const {id, name}= post;
    return`
    <div class="post_card flex bg-green-300 rounded p-2">
            <div class="flex flex-col gap-2 space-y-2 p-2">
              <h2 class="font-bold">${name}</h2>
              
            </div>
            <div class="flex justify-center items-start">
              <span class="py-2 px-3 rounded-full bg-green-400">${id}</span>
            </div>
          </div>
           `;
};
    


 document.addEventListener('DOMContentLoaded',()=>{
    
        arr.forEach(post=>{
            container.innerHTML +=postData(post)
        })
        
    });
