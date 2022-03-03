var playerName = window.prompt("What is your robot's name?");
var playerHealth = 50;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
 // repeat and execute as long as the enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) {

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  //if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney" , playerMoney);
      break;
    }
  }
  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by substracting the amount set in the playerAttack variable  
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    break;
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " +playerName + " now has " + playerHealth + " health remaining."
  );
  
  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  } 
  
} 

  // If player did not chose 1 or 2 in prompt
  else {
  window.alert("You need to choose a valid option. Try again!");
  }
  } //end of while loop
}; // end of function

// run fight function to start game
  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1 ));
    }

    else {
      window.alert("You have lost your robot in battle! GAME OVER!");
      break;
    }


    // pick new enemy to fight based on index of enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemy health before starting new fight
    enemyHealth = 50;



    // use debugger to pause script from funning and check what's going on at the moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter 
    fight(pickedEnemyName)
  }

  

    