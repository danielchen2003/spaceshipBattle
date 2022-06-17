const battleWinCheck = () => {
  const numberleft = Alien.length;
  if (Alien[0].hull <= 0) {
    Alien.splice(0, 1);
    alert(`One down! Nice job! ${Alien.length} enemy left`);
    // victory();
  } else {
    alert(`Nice attack keep firing ${numberleft} enemy left`);
  }
};

const gameWinnerCheck = () => {
  if (Alien.length == 0) {
    alert("Congratulations! Endurance has killed all the Enemies!");
    console.log(
      `Alien ship is destroyed you have saved the Universe from complete destruction!!`
    );

    console.log("Endurance finally wins this game");
  } else if (Endurance.hull <= 0) {
    alert(
      `You have died, your people will now be used as cattle for the CRAVERSSS!!! GRRZZT ZOIK!`
    );

    console.log("Aliens finally won this game, Endurance has been destoried");
  } else if (Alien.length == 0 && Endurance.hull <= 0) {
    alert("Perish together and Endurance Sacrificed hiself");
    console.log("die togather");
  }
};

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
// console.log(Math.floor(Math.random() * 4) + 3);

class Ship {
  constructor(hull, firepower, accu) {
    this.name = "Endurance";
    this.hull = hull;
    this.firepower = firepower;
    this.accu = accu;
  }
}

class Alienship {
  constructor() {
    this.name = "Alienship";
    this.hull = Math.floor(Math.random() * 4) + 3; //// make random between 3 & 6
    this.firepower = Math.floor(Math.random() * 3) + 2; /// make random between 2 & 4
    this.accu = (Math.floor(Math.random() * 3) + 6) / 10; //make random between .6 and .8
  }
}

const Endurance = new Ship(20, 5, 0.7);
console.log(Endurance);
// console.log(Endurance.constructor.name);

// const alien1 = new Alienship();
const Alien = [];

const initialization = () => {
  for (let i = 0; i < 6; i++) {
    const badAlien = new Alienship();
    // console.log(badAlien);
    Alien.push(badAlien);
    console.log(Alien);
  }
};
initialization();
console.log(Alien);

const attack = (attacker, denfender) => {
  //////attack with missles if you are still alive
  if (getRandomNumber(0, 1) <= attacker.accu) {
    // console.log(getRandomNumber);
    denfender.hull -= attacker.firepower;
    alert(
      `${attacker.name} made ${attacker.firepower} demage to ${denfender.name}\n
      ${attacker.name} has ${attacker.hull} health left\n
      ${denfender.name} has ${denfender.hull} health left\n
      There are still ${Alien.length} enemies left`
    );
  } else {
    alert(`${attacker.name}Miss that attack\n
    ${attacker.name} has ${attacker.hull} health left\n
    ${denfender.name} has ${denfender.hull} health left\n
    There are still ${Alien.length} enemies left`);
  }
};

function battlestart() {
  // console.log(1);
  while (Endurance.hull > 0 && Alien.length >= 1) {
    // console.log(Endurance);
    // for (let i = 0; i < 10; i++) {

    attack(Endurance, Alien[0]);
    console.log(`Endurance's Health : ${Endurance.hull}`);
    battleWinCheck();
    attack(Alien[0], Endurance);
    console.log(`  ${Alien.length} Enemy left`);
    gameWinnerCheck();
  }
  // }
}

// Alien[0].hull -= 5;
// console.log(Alien);

// const obj = {
//   a: 3,
//   b: 2,
// };
// obj.a - 2;
// console.log(obj);
battlestart();

// var TestObject = function() {
//   return {
//       getObjectName: function() {
//           console.log( /* Get the Object instance name */ );
//       }
//   };
// }

// // create instance
// var a1 = TestObject();
// var a2 = TestObject();

// Endurance.getObjectName(); // Here I want to get the string name "a1";

// a2.getObjectName(); // Here I
