

 

const form = document.getElementById('post-form');
document.addEventListener('DOMContentLoaded', ()=>{

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let title = document.getElementById('title').value;
        let body = document.getElementById('body').value;
       // console.log({title,body});
        if( title.length < 4){
            alert('title must be atleast 4 character');
            return
        }
        if(body.length < 4){
            alert('body must be atleast 4 character');
            return
        }
        createPost({title,body});
        renderUi()
        // after post sumission, set the input 
        console.log({title,body})
        
        
    });
})