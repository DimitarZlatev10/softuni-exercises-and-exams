function solve(input) {
  let number = Number(input.shift());
  let standardInput = input.slice(0, number);
  input = input.slice(number);
  input.pop();
  let composerPieces = {};
  for (let line of standardInput) {
    let [pieceName, composer, key] = line.split("|");
    if (!composerPieces.hasOwnProperty(pieceName)) {
      composerPieces[pieceName] = {
        composer: composer,
        key: key,
      };
    }
  }
  for (let line of input) {
    let [command, pieceName, composer, key] = line.split("|");
    if (command === "Add") {
      if (!composerPieces.hasOwnProperty(pieceName)) {
        composerPieces[pieceName] = {
          composer: composer,
          key: key,
        };
        console.log(
          `${pieceName} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${pieceName} is already in the collection!`);
      }
    } else if (command === "Remove") {
      if (composerPieces.hasOwnProperty(pieceName)) {
        delete composerPieces[pieceName];
        console.log(`Successfully removed ${pieceName}!`);
      } else {
        console.log(
          `Invalid operation! ${pieceName} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      let newKey = composer;
      if (composerPieces.hasOwnProperty(pieceName)) {
        composerPieces[pieceName].key = newKey;
        console.log(`Changed the key of ${pieceName} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${pieceName} does not exist in the collection.`
        );
      }
    }
  }
  let entries = Object.entries(composerPieces);
  for (let entry of entries) {
    console.log(
      `${entry[0]} -> Composer: ${entry[1].composer}, Key: ${entry[1].key}`
    );
  }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
console.log(`--------------------------`);
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )