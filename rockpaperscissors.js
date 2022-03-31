//rock, paper, scissors project

/*Since a user can pass in a parameter, such 
as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing 
JavaScript’s toLowerCase() function to make the userInput all lowercase.*/

const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || 'paper' || 'scissors'){
      return userInput;
    }else{
      console.log("Error!! Invalid input");
    }
    };

    //getting computerChoice
    /*Now we need to have the computer make a choice. Create a new 
    function named getComputerChoice with no parameters. Inside its 
    block, utilize Math.random() and Math.floor() to get a whole number 
    between 0 and 2. Then, depending on the number,
     return either 'rock', 'paper', or 'scissors'. */

    /*we can call it using console.log(getComputerChoice()); just to test
    if it works */

    const getComputerChoice = () =>{
        let num = Math.floor(Math.random() * 3);
        switch(num){
          case 0:
          return 'rock';
          break;
          case 1:
          return 'paper';
          break;
          case 2: 
          return 'scissors';
          break;
          default:
          console.log("No match found!!");
        }
      };

//to determine if the game is a tie
/*to test if our code works console.log(determineWinner(userChoice, computerChoice)); */
const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
      return 'its a tie';
    }
  
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer Won';
      }else{
        return 'User has won';
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock' || computerChoice === 'paper'){
        return 'Computer Won';
      }else{
        return 'User won';
      }
    }
  };

//to determine the winner
const playGame = () =>{
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  //we call the playGame() function to start the game
  playGame();