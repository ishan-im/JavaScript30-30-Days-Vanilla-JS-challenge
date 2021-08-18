// date and time function


    const secondHand = document.querySelector(".seconds-hand");
    const minsHand = document.querySelector(".minutes-hand");
    const hourHand = document.querySelector(".hour-hand");
    
    

     function clock(){
        
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 180;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 180;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) ;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
   }


   setInterval(clock, 1000);

  clock();


  // date //month and year 
   
 
   

 function myDate(){
   let today = new Date();
   let dd = String(today.getDate()).padStart(2, '0');
   let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!const yyyy = today.getFullYear();
   let yyyy = today.getFullYear();
 
   let day = mm + '/' + dd + '/' + yyyy;
    document.getElementById("#date").innerHTML = day;
 }

 myDate();