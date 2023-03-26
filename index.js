

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
       var button= this.innerHTML;
       makesound(button);
       btnannimation(button);

    });

}


document.addEventListener("keydown",function(event){
    makesound(event.key);
    console.log(event.key);

    btnannimation(event.key);
 });



 
 function makesound(key)
 {
     var audio;
     switch (key) {
         case 'w':
              audio=new Audio('sounds/tom-1.mp3');
              
             break;

         case 'a':
              audio=new Audio('sounds/tom-2.mp3');
             break;

         case 's':
              audio=new Audio('sounds/tom-3.mp3');
             break;
         
         case 'd':
              audio=new Audio('sounds/tom-4.mp3');
             break;    
         
         case 'j':
              audio=new Audio('sounds/snare.mp3');
             break;
             
         case 'k':
              audio=new Audio('sounds/crash.mp3');
             break;    

         case 'l':
              audio=new Audio('sounds/kick-bass.mp3');
             break;    

     }
     
     audio.play();
 }

 function btnannimation(currentkey)
 {

    var activebtn= document.querySelector("."+currentkey);

        activebtn.classList.add("pressed");

        setTimeout(function(){
            activebtn.classList.remove("pressed");

        },100);
 }




