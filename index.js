

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
        
        var button= this.innerHTML;
       makesound(button);

       
    });


    document.addEventListener("keydown",function(event){


        
       makesound(event.key);
       console.log(event.key);

    });
    

   function makesound(key)
    {
        var audio;
        switch (key) {
            case 'w':
                 audio=new Audio('tom-1.mp3');
                break;

            case 'a':
                 audio=new Audio('tom-2.mp3');
                break;

            case 's':
                 audio=new Audio('tom-3.mp3');
                break;
            
            case 'd':
                 audio=new Audio('tom-4.mp3');
                break;    
            
            case 'j':
                 audio=new Audio('snare.mp3');
                break;
                
            case 'k':
                 audio=new Audio('crash.mp3');
                break;    
   
            case 'l':
                 audio=new Audio('kick-bass.mp3');
                break;    

        }
        
        audio.play();
    }

}


