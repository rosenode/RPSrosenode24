const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
      if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
      } else {
        console.log('error, invalid input');
        }
    };
    // Task 4 test
    // deleted, end
    
    const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      console.log(randomNumber);
        switch (randomNumber) {
          case 0:
          return 'rock';
          case 1:
          return 'paper';
          case 2:
          return 'scissors';
        }
      }
    
    // Task 6 test
    // deleted, end
    
    const determineWinner = (getUserChoice, getComputerChoice) => {
      if (getUserChoice === 'bomb'){
            return 'You won with a bomb!'
          }
      if (getUserChoice === getComputerChoice){
        return 'Game is a tie.';
      }
      if (getUserChoice === 'rock') {
        if (getComputerChoice === 'paper') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      if (getUserChoice === 'paper') {
        if (getComputerChoice === 'scissors') {
          return 'The computer won!' }
          else {
            return 'You won!';
          }
        if (getUserChoice === 'scissors') {
          if (getComputerChoice === 'rock') {
            return 'The computer won!'
          }
          else {
            return 'You won!'
          }
            }
          }
        }
        }
    // Task 11 test + Debugging test
    console.log(determineWinner(getUserChoice('Bomb'), getComputerChoice()));
    console.log(getUserChoice('Bomb'));
    console.log(getComputerChoice());
    // end