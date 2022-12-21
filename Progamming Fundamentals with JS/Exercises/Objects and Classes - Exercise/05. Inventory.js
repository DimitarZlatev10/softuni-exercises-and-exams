function solve(data){

    data.map(line =>  {
        let [name,level,items] = line.split(' / ')
        items = items.split(', ').sort((a,b)=>a.localeCompare(b)).join(', ')
        return{
            name,
            level: Number(level),
            items
        }
    }).sort((a,b)=> a.level-b.level).forEach(hero => {
        console.log(`Hero : ${hero.name}`);
        console.log(`Level => ${hero.level}`);
        console.log(`Items => ${hero.items}`);
    })


}
console.log(solve(
    [
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    ))