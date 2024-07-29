let toggle=document.getElementById("img");
let imgs= document.getElementById("shape");

toggle.addEventListener('click',hey)
function hey(){
 
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        img.src="sun.jpeg"
       
        imgs.src="peeches.png"
    
        
    }
    else{
         img.src="moon.jpeg"
         imgs.src="shapes.png";
       
        
        

    }
   

}

function shape(){
    var imgs= document.getElementById("shape");
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
    
    
}
else{
     img.src="peeches.png"
    
    

}
}




