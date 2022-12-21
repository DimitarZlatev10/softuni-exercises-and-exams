function solve(input) {
  input.pop();
  let heroes = {};
  let numberOfHeroes = Number(input.shift());
  let choosingHeroes = input.splice(0, numberOfHeroes);
  for (let hero of choosingHeroes) {
    hero = hero.split(" ");
    let heroName = hero[0];
    let heroHealth = Number(hero[1]);
    let heroMana = Number(hero[2]);
    if (!heroes[heroName]) {
      heroes[heroName] = {
        hp: heroHealth,
        mana: heroMana,
      };
    }
  }
  for (let command of input) {
    command = command.split(" - ");
    let action = command[0];
    let heroName = command[1];
    if (action === "CastSpell") {
      let neededMana = Number(command[2]);
      let spellName = command[3];
      if (heroes[heroName].mana >= neededMana) {
        heroes[heroName].mana -= neededMana;
        console.log(
          `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mana} MP!`
        );
      } else {
        console.log(
          `${heroName} does not have enough MP to cast ${spellName}!`
        );
      }
    } else if (action === "TakeDamage") {
      let damageTaken = Number(command[2]);
      let enemyName = command[3];
      if (heroes[heroName].hp > damageTaken) {
        heroes[heroName].hp -= damageTaken;
        console.log(
          `${heroName} was hit for ${damageTaken} HP by ${enemyName} and now has ${heroes[heroName].hp} HP left!`
        );
      } else {
        console.log(`${heroName} has been killed by ${enemyName}!`);
        delete heroes[heroName];
      }
    } else if (action === "Recharge") {
      let amount = Number(command[2]);
      if (heroes[heroName].mana + amount > 200) {
        let manaRecharge = 200 - heroes[heroName].mana;
        heroes[heroName].mana += manaRecharge;
        console.log(`${heroName} recharged for ${manaRecharge} MP!`);
      } else {
        heroes[heroName].mana += amount;
        console.log(`${heroName} recharged for ${amount} MP!`);
      }
    } else if (action === "Heal") {
      let healAmount = Number(command[2]);
      if (heroes[heroName].hp + healAmount > 100) {
        let heal = 100 - heroes[heroName].hp;
        heroes[heroName].hp += heal;
        console.log(`${heroName} healed for ${heal} HP!`);
      } else {
        heroes[heroName].hp += healAmount;
        console.log(`${heroName} healed for ${healAmount} HP!`);
      }
    }
  }
  heroes = Object.entries(heroes);
//   heroes.sort((a, b) =>
//     a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1].hp - a[1].hp
//   );
  for (let hero of heroes) {
    console.log(hero[0]);
    console.log(`  HP: ${hero[1].hp}`);
    console.log(`  MP: ${hero[1].mana}`);
  }
}
solve([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
console.log(`-------------`);
solve(["2",
"Solmyr 85 120",
"Kyrre 99 50",
"Heal - Solmyr - 10",
"Recharge - Solmyr - 50",
"TakeDamage - Kyrre - 66 - Orc",
"CastSpell - Kyrre - 15 - ViewEarth",
"End"])

