     //spans is var so dat is global.
     var spans = document.querySelectorAll("#clickSpans span");

     //console.log(spans);
  
      for(const mySpan of spans){

          mySpan.addEventListener("click", function(event){

              highlightActor(mySpan.dataset.actor);

          });
      }

     
     function highlightActor(myActor){

        //alert("Hello from highlightActor: " + myActor);
        for(const mySpan of spans){
              if (mySpan.dataset.actor == myActor){//current actor, hightlight
              mySpan.style.backgroundColor = 'yellow';
              mySpan.style.fontWeight='bold';
              } else {//not current actor? change to white
              mySpan.style.backgroundColor = 'white';
              mySpan.style.fontWeight='normal';

          }
      }
  }