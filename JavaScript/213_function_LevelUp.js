//Function Scope

//Block Scope

//Lexical Scope

//Funtion Expressions

//Higher Order Functions

//Returning Functions

//this

//Adding Methods To objects

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
      this.eggCount++;
      return 'EGG';
    }
  };


  // A bit more verbose:
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function () {
      this.eggCount += 1;
      return 'EGG';
    }
  };