$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)


    $('#pickedNumber').text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var playerScore= 0; 
    var wins= 0;
    var losses = 0;
  

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);


  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#pickedNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        playerScore= 0;
        $('#finalScore').text(playerScore);
        } 
  
  function yay(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

      $('#one').on ('click', function(){
      playerScore = playerScore + num1;
      console.log("New playerScore= " + playerScore);
      $('#finalScore').text(playerScore); 
            
      
          if (playerScore == Random){
            yay();
          }
          else if ( playerScore > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      playerScore = playerScore + num2;
      console.log("New playerScore= " + playerScore);
      $('#finalScore').text(playerScore); 
          if (playerScore == Random){
            yay();
          }
          else if ( playerScore > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      playerScore = playerScore + num3;
      console.log("New playerScore= " + playerScore);
      $('#finalScore').text(playerScore);
  
            if (playerScore == Random){
            yay();
          }
          else if ( playerScore > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      playerScore = playerScore + num4;
      console.log("New playerScore= " + playerScore);
      $('#finalScore').text(playerScore); 
        
            if (playerScore == Random){
            yay();
          }
          else if ( playerScore > Random){
            loser();
          }
    });   
  }); 