function solve(input) {
let nameOfSerial = input[0]
let numberOfSeasons = Number(input[1])
let numberOfEpi = Number(input[2])
let episodeNoAds = Number(input[3])

let timeForAds = episodeNoAds * 0.20
let normalTimeForEpi = timeForAds +episodeNoAds
let specialEpisodes = numberOfSeasons *10
let totalTimeToWatch = normalTimeForEpi * numberOfEpi * numberOfSeasons + specialEpisodes 
console.log(`Total time needed to watch the ${nameOfSerial} series is ${totalTimeToWatch} minutes.`);

}
solve(["Lucifer", "3", "18", "55"]);
